package http

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func InitHTTPServer() {
	PORT := "8080"
	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType,
			echo.HeaderAccept},
		AllowMethods: []string{http.MethodGet, http.MethodPost,
			http.MethodPut, http.MethodOptions},
	}))
	// route mounting
	mountRoutes(e)

	// Starting server
	e.Logger.Print(fmt.Sprintf("Listening to PORT %s", PORT))
	e.Logger.Fatal(e.Start(fmt.Sprintf("127.0.0.1:%s", PORT)))
}
