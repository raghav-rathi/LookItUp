package users

import (
	"github.com/raghav-rathi/LookItUp/backend/domain/users"
	"github.com/raghav-rathi/LookItUp/backend/utils/errors"

	"github.com/gin-gonic/gin"
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
