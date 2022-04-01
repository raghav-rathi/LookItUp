package initialize

import (
	"github.com/raghav-rathi/LookItUp/newcomponent_scanner/Backend/internal/http"

	"github.com/raghav-rathi/LookItUp/newcomponent_scanner/Backend/pkg/db/mysql"
)

func InitializeApp() {

	// setting configurations
	// config.InitConfig()

	// connecting to mysql database
	mysql.CreateClient()

	// initializing echo server
	http.InitHTTPServer()
}
