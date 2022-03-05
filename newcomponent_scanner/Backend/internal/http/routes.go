package http

import (
	"net/http"

	"github.com/raghav-rathi/LookItUp/newcomponent_scanner/Backend/internal/scanner"

	"github.com/labstack/echo"
)

func mountRoutes(e *echo.Echo) {
	e.GET("/health", HealthCheck)
	e.POST("/scanner", scanner.GetIngredientsWithrating)
}

func HealthCheck(c echo.Context) error {
	return c.String(http.StatusOK, "OK")
}
