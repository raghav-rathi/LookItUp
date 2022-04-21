# LookItUp

<img width="914" alt="banner" src="https://user-images.githubusercontent.com/45250166/164387389-28fa8421-e720-429b-a50b-0b679e918865.png">


LookItUp is a web application that allows its users to scan the ingredient list of their cosmetic products to check for harmful compositions. It will categorize the components of the product as Safe or Harmful. Further, you can look up the use case of each component used in the product and how it is manufactured. Ratings of the product will also be displayed to the user based on safety composition (accuracy improves as our database expands).<br>
To begin with, the user will have to first log in or sign-up for authenticity reasons. Once he logs in, he will be directed to the scanner page. On the scanner page, the user will have the option to upload an image of the product label. Once he uploads an image, our application will preprocess the image using OCR and identify the list of ingredients from the image. The web application will then show all the ingredients present in the product in a structured tabular manner. It will also show a brief description of all the ingredients and their safety rating. A pie chart of the product composition is also shown.

## Video Demonstration of the Product


https://user-images.githubusercontent.com/45250166/164404963-c33cc52a-f456-4964-a541-f1a73836457f.mp4


## Cypress Testing


https://user-images.githubusercontent.com/45225674/164406480-699dd0d7-6aaf-4222-b234-01fca1f9b618.mp4


## Backend Unit Testing

## API Documentation
- [API 1](https://github.com/raghav-rathi/LookItUp/wiki/API-Documnetation#api-1-register-a-user)

- [API 2](https://github.com/raghav-rathi/LookItUp/wiki/API-Documnetation#api-2-register-a-user)

- [API 3](https://github.com/raghav-rathi/LookItUp/wiki/API-Documnetation#api-3-register-a-user)

- [API 4](https://github.com/raghav-rathi/LookItUp/wiki/API-Documnetation#api-4-logs-out-a-user)

- [API 5](https://github.com/raghav-rathi/LookItUp/wiki/API-Documnetation#api-5-scanner)

- [API 6](https://github.com/raghav-rathi/LookItUp/wiki/API-Documnetation#api-6-health)

## Project Boards
- [Sprint 1](https://github.com/raghav-rathi/LookItUp/projects/1)
- [Sprint 2](https://github.com/raghav-rathi/LookItUp/projects/2)
- [Sprint 3](https://github.com/raghav-rathi/LookItUp/projects/4)
- [Sprint 4](https://github.com/raghav-rathi/LookItUp/projects/7)

## Sprint Deliverables 
- [Sprint 1](https://github.com/raghav-rathi/LookItUp/blob/main/Sprint1.md)
- [Sprint 2](https://github.com/raghav-rathi/LookItUp/blob/main/Sprint2.md)
- [Sprint 3](https://github.com/raghav-rathi/LookItUp/blob/main/Sprint3.md)
- [Sprint 4](https://github.com/raghav-rathi/LookItUp/blob/main/Sprint4.md)

## Team Members <br>
- Raghav Rathi : [raghav-rathi](https://github.com/raghav-rathi) (Frontend)
- Daksh Mehta: [dakshmehta23](https://github.com/dakshmehta23) (Frontend)
- Priyanshu Prasad: [priyanshu0499](https://github.com/raghav-rathi/LookItUp/commits?author=priyanshu0499) (Backend)
- Suneet Jain: [suneet10](https://github.com/suneet10) (Backend)

## Tech Stack<br>

- Frontend: React<br>
- Backend : 
  - Go 
  - Echo 
  - Tesseract 
- Database : MySQL
- Testing : Cypress

## Project Setup - How to run
> 1. In order for this application to run you must make sure you have installed all libraries mentioned in requirements.txt.<br>
> 2. Then you should connect to the MySQL database using XAMPP server and you can import the CSV file into a database.<br>
> 3. We have saved an SQL database that you can easily import and it has the table comestic_ingredients ready.<br>
> 4. After that you must make sure that you have ran npm install or npm i in the main react folder (newcomponent_scanner/scannerfrontend) this is where the react file is.<br>
> 5. Ensure that all the packages mentioned in the package.json file have been downloaded and installed with the same version to avoid any errors.<br>
> 6. Then run the command npm start.<br>
> 7. Open a new terminal, then go to the folder where the main.go file resides and run the command "go run main.go".<br>
> 8. Upload a picture in the browser and give it a few seconds for the results to appear.<br>

## Components and Functions
- ### Sign up page
![Sign Up](https://user-images.githubusercontent.com/45250166/164394777-dbea2981-15a0-4484-9b14-37a727fa9641.png)

A new user can setup their account to use our product by entering their details and credentials.
- ### Login Page
![Loginscreen](https://user-images.githubusercontent.com/45250166/164394280-4cf28d65-7aa6-47da-a10b-7c6742d8e0ab.png)
Existing users can enter their credentials to login into their account and use our product.

- ### Ingredients Detail
![piechart](https://user-images.githubusercontent.com/45250166/164394805-cb6d2183-a576-4076-a427-a8a250535317.png)

Graphical representation of composition of ingredients.







