package initialize

import (
	"Plaser/internal/http"
	"Plaser/pkg/db/mysql"

	"github.com/raghav-rathi/LookItUp/newcomponent_scanner/Backend/internal/initialize/http"
)

func InitializeApp() {

	// setting configurations
	// config.InitConfig()

	// connecting to mysql database
	mysql.CreateClient()

	// initializing echo server
	http.InitHTTPServer()
}
