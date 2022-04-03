package scanner

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"runtime"

	"github.com/raghav-rathi/LookItUp/newcomponent_scanner/Backend/pkg/db/mysql"

	"github.com/google/uuid"
	"github.com/labstack/echo"
	fuzzy "github.com/paul-mannino/go-fuzzywuzzy"
)

func GetIngredientsWithrating(c echo.Context) error {

	// Extract the file from formData and save it in upload asset folder

	fileType := c.FormValue("type")
	if fileType == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "File type is a required field.")
	}
	file, fileErr := c.FormFile("file")
	if fileErr != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Image file is required.")
	}

	src, srcErr := file.Open()
	if srcErr != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Error in opening the uploaded image file.")
	}
	defer src.Close()

	cwd, cwdErr := os.Getwd()
	if cwdErr != nil {
		return cwdErr
	}

	img_filename := uuid.NewString()
	img_filename = fmt.Sprintf("image_file_%s.%s", img_filename, fileType)

	destination, destErr := os.Create(fmt.Sprintf("%s/external/uploadAssets/%s", cwd, img_filename))
	if destErr != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Error in creating file in uploadAsset folder.")
	}

	_, copyErr := io.Copy(destination, src)
	if copyErr != nil {
		return copyErr
	}

	destination.Close()

	operating_system := runtime.GOOS
	var output []byte
	var outputErr error
	if operating_system == "windows" {
		cmd := exec.Command("python", fmt.Sprintf("%s/external/pythonScript/pythonScript/tes.py", cwd), fmt.Sprintf("%s/external/uploadAssets/%s", cwd, img_filename))
		output, outputErr = cmd.CombinedOutput()
	} else {
		cmd := exec.Command("python3", fmt.Sprintf("%s/external/pythonScript/pythonScript/tes.py", cwd), fmt.Sprintf("%s/external/uploadAssets/%s", cwd, img_filename))
		output, outputErr = cmd.CombinedOutput()
	}
	if outputErr != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Unable to get the result from python script.")
	}
	removeErr := os.Remove(fmt.Sprintf("%s/external/uploadAssets/%s", cwd, img_filename))
	if removeErr != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Error in deleting file from server.")
	}

	list := string(output)
	data := []byte(list)
	fmt.Println(list)
	type Ingred string
	// 	Name        string
	// 	Rating      string
	// 	Description string
	// }
	var ingredientsList []Ingred
	JsonErr := json.Unmarshal(data, &ingredientsList)
	if JsonErr != nil {
		fmt.Println(JsonErr)
		return echo.NewHTTPError(http.StatusInternalServerError, "Error in parsing the data back to JSON.")
	}

	rows, rowsErr := mysql.SelectAllIngredients.Query()
	if rowsErr != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Error in fetching the data from Mysql database")
	}
	defer rows.Close()
	var ingredients Ingredients
	for rows.Next() {
		var ingredient Ingredient
		ingErr := rows.Scan(&ingredient.Name, &ingredient.Rating, &ingredient.Description)
		if ingErr != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Error in scaning the data fetched from mysql database.")
		}
		ingredients = append(ingredients, ingredient)
	}

	ingredientMap := make(map[string][]string)
	listOfIngredientNames := []string{}
	for _, in := range ingredients {
		ingredientMap[in.Name] = []string{in.Rating, in.Description}
		listOfIngredientNames = append(listOfIngredientNames, in.Name)
	}
	ingredientMapToSend := make(map[string][]string)
	for _, ingredientName := range ingredientsList {
		matchedIngredientName, matchErr := fuzzy.ExtractOne(string(ingredientName), listOfIngredientNames)
		if matchErr != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Error in extraction of ingredient from list which matches the name in the data on image.")
		}
		if matchedIngredientName.Score >= 90 {
			ingredientMapToSend[matchedIngredientName.Match] = []string{ingredientMap[matchedIngredientName.Match][0], ingredientMap[matchedIngredientName.Match][1]}
		} else {
			if len([]rune(ingredientName)) <= 22 {
				ingredientMapToSend[string(ingredientName)] = []string{"NA", "Unable to find"}
			}
		}
	}

	rating_count := make(map[string]int)
	rating_count["Best"] = 0
	rating_count["Good"] = 0
	rating_count["Average"] = 0
	rating_count["Poor"] = 0
	rating_count["NA"] = 0

	for _, value := range ingredientMapToSend {
		if value[0] == "Best" {
			rating_count[value[0]] += 1
		} else if value[0] == "Good" {
			rating_count[value[0]] += 1
		} else if value[0] == "Average" {
			rating_count[value[0]] += 1
		} else if value[0] == "Poor" {
			rating_count[value[0]] += 1
		} else if value[0] == "NA" {
			rating_count[value[0]] += 1
		}
	}

	dataToSend := make(map[string]interface{})
	dataToSend["result"] = ingredientMapToSend
	dataToSend["data"] = rating_count
	return c.JSON(http.StatusOK, dataToSend)
}
