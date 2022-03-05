package mysql

import (
	"database/sql"
	"fmt"
	"os"
)

// declaring variable of sql.stmt type
var SelectAllIngredients *sql.Stmt

func prepareStatement() {
	prepareSelectAllIngredients()
}

func prepareSelectAllIngredients() {
	stmt, err := DB.Prepare("SELECT name, rating, description FROM cosmetic_ingredients")
	if err != nil {
		fmt.Println("Failed to prepare the query statement.")
		os.Exit(1)
	}
	SelectAllIngredients = stmt
}
