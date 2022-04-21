// Unit tests for the backend of login sign up functionality

// package main

// import (
// 	"database/sql"
// 	"log"
// 	"testing"

// 	"github.com/raghav-rathi/LookItUp/backend/datasource/mysql/users_db"
// 	"github.com/stretchr/testify/assert"
// )

// func NewMock() (*sql.DB, users_db) {
// 	db, mock, err := users_db.Init()
// 	if err != nil {
// 		log.Fatalf("an error '%s' was not expected when opening a stub database connection", err)
// 	}

// 	return db, mock
// }

// func TestFindByID(t *testing.T) {
// 	db, mock := NewMock()
// 	repo := &repository{db}
// 	defer func() {
// 		repo.Close()
// 	}()

// 	query := "SELECT id, name, email FROM users WHERE id = \\?"

// 	rows := sqlmock.NewRows([]string{"id", "name", "email"}).
// 		AddRow(u.ID, u.Name, u.Email)

// 	mock.ExpectQuery(query).WithArgs(u.ID).WillReturnRows(rows)

// 	user, err := repo.FindByID(u.ID)
// 	assert.NotNil(t, user)
// 	assert.NoError(t, err)
// }

package main

import (
	"bytes"
	"encoding/json"
	"log"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"
)

var a App

func TestMain(m *testing.M) {
	a.Initialize("sqlite", "testing.db")

	if err := a.DB.Migrator().HasTable("client_details"); err != true {
		log.Fatal(err)
	}

	if err := a.DB.Migrator().HasTable("user_details"); err != true {
		log.Fatal(err)
	}

	code := m.Run()

	a.DB.Migrator().DropTable("client_details")
	a.DB.Migrator().DropTable("user_details")

	os.Exit(code)

}

func TestCreateUser(t *testing.T) {

	var jsonStr = []byte(`
	{
		"email": "postman@email.com",
		"firstName": "firstname",
		"lastName": "test",
		"password": "temp"
	}`)

	req, _ := http.NewRequest("POST", "http://localhost:3000/registerUser", bytes.NewBuffer(jsonStr))
	req.Header.Set("Content-Type", "application/json")

	res := httptest.NewRecorder()
	a.r.ServeHTTP(res, req)

	if want, got := http.StatusCreated, res.Code; want != got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}

	var m map[string]interface{}
	json.Unmarshal(res.Body.Bytes(), &m)

	if m["message"] != "Status Created" {
		t.Errorf("Expected message to be 'Status Created'. Got '%v'", m["message"])
	}
}

func TestExistingUser(t *testing.T) {

	var s ClientDetails

	s.TrackingID = "381539592"
	a.DB.Save(&s)

	req, _ := http.NewRequest("GET", "http://localhost:3000/getClient?trackingID=381539592", nil)

	w := httptest.NewRecorder()
	a.r.ServeHTTP(w, req)

	if want, got := http.StatusOK, w.Code; want != got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}
}

func TestIncorrectPassword(t *testing.T) {
	var u UserDetails

	u.FirstName = "backend"
	u.Password = "temp"
	a.DB.Save(&u)

	req, _ := http.NewRequest("GET", "http://localhost:3000/checkUser?firstname=backend&password=tempo", nil)

	w := httptest.NewRecorder()
	a.r.ServeHTTP(w, req)

	if want, got := http.StatusBadRequest, w.Code; want != got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}

}

func TestLogin(t *testing.T) {

	var jsonStr = []byte(`
	{
		"appointmentDate": "11th November 2022",
		"email": "backend@test.com",
		"firstName": "backend",
		"lastName": "test",
		"phoneNumber": "12345",
		"registrationNumber": "12345678",
		"serviceType": "Interim"
	}`)

	req, _ := http.NewRequest("POST", "http://localhost:3000/stars", bytes.NewBuffer(jsonStr))
	req.Header.Set("Content-Type", "application/json")

	res := httptest.NewRecorder()
	a.r.ServeHTTP(res, req)

	if want, got := http.StatusCreated, res.Code; want != got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}

	var m map[string]interface{}
	json.Unmarshal(res.Body.Bytes(), &m)

	if m["message"] != "Status Created" {
		t.Errorf("Expected message to be 'Status Created'. Got '%v'", m["message"])
	}
}

func TestLogout(t *testing.T) {

	var u UserDetails

	u.FirstName = "backend"
	u.Password = "temp"
	a.DB.Save(&u)

	req, _ := http.NewRequest("GET", "http://localhost:3000/checkUser?firstname=backend&password=temp", nil)

	w := httptest.NewRecorder()
	a.r.ServeHTTP(w, req)

	if want, got := http.StatusOK, w.Code; want != got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}
}
