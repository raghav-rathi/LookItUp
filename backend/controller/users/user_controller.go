package users

import (
	"errors"

	"github.com/gin-gonic/gin"
	"github.com/raghav-rathi/LookItUp/backend/domain/users"
)

func Register(c *gin.Context) {
	var user users.User

	if err := c.ShouldBindJSON(&user); err != nil {
		err := errors.NewBadRequestError("invalid json body")
		c.JSON(err.Status, err)
		return
	}
	services.CreateUser(user)
}
