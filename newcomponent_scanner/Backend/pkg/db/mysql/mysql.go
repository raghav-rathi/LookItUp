package mysql

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func CreateClient() {
	// establishing the connection to MYSQL database
	db, dbErr := sql.Open("mysql", "root:@tcp(127.0.0.1:3306)/scannerdatabase")
	if dbErr != nil {
		fmt.Println("Error in connection to MYSQL database.")
		os.Exit(1)
	}
	DB = db

	// Testing the connection to database
	pingErr := DB.Ping()
	if pingErr != nil {
		fmt.Println(pingErr)
		os.Exit(1)
	}

	// Preparing the statements for mysql database
	prepareStatement()
}
