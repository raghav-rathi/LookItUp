package scanner

type Ingredient struct {
	Name string `json:"name"`
	Rating string `json:"rating"`
	Description string `json:"description"`
}

type Ingredients []Ingredient