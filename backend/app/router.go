package app

import "github.com/raghav-rathi/LookItUp/backend/controller/users"

func mapUrls() {
	router.POST("/api/register", users.Register)
	router.POST("/api/login", users.Login)
}
