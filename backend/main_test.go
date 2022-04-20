// Unit tests for the backend of login sign up functionality

package main

import (
	"database/sql"
	"log"
	"testing"

	"github.com/raghav-rathi/LookItUp/backend/datasource/mysql/users_db"
	"github.com/stretchr/testify/assert"
)

func NewMock() (*sql.DB, users_db) {
	db, mock, err := users_db.Init()
	if err != nil {
		log.Fatalf("an error '%s' was not expected when opening a stub database connection", err)
	}

	return db, mock
}

func TestFindByID(t *testing.T) {
	db, mock := NewMock()
	repo := &repository{db}
	defer func() {
		repo.Close()
	}()

	query := "SELECT id, name, email FROM users WHERE id = \\?"

	rows := sqlmock.NewRows([]string{"id", "name", "email"}).
		AddRow(u.ID, u.Name, u.Email)

	mock.ExpectQuery(query).WithArgs(u.ID).WillReturnRows(rows)

	user, err := repo.FindByID(u.ID)
	assert.NotNil(t, user)
	assert.NoError(t, err)
}
