# Sprint 1 
**The major objective of our Sprint 1 was to implement the Login/Sign up functionality of the application. This will allow the user to register and log in into our web application. The user's credentials and information is stored in the sql database that we have hosted locally (for now). In future, we will host a sql server on AWS or Firebase.In the upcoming sprints, we will integrate this login/sign up functionality with other features of the application.**

## **Demo Links :** <br/>
Frontend demo: https://youtu.be/fQEifb0wewI <br/>
Backend demo: https://youtu.be/cBWP9MVdO8I <br/>
## Frontend Accomplishments :
### 1.Created Login screen for new Users so that can can save their searches and preferences. <br/>
![frontendpage](/assets/Images/FrontendScreen.jpeg)

### 2.Created Registration functionality design.

## Backend Accomplishments :
### 1.Created Local SQL server for saving user credentials. <br/>

![Local SQL server](/assets/Images/sql1.png)

### 2.Accessed the SQL server using go-sql-driver. <br/>

![Register New User](/assets/Images/go-sql.png)

### 3.Created function for registering new user and checking whether their email already exists in the database. <br/>

![Register New User](/assets/Images/postman1.png)

### 4.Created a function to convert user password into Hash before storing into SQL database. <br/>

![Password Encryption](/assets/Images/encrypt-pass.png)

### 5.Allow user to login using their credentials stored in the database. <br/>

![Register New User](/assets/Images/login.png)

### 6.User data is stored as cookie, so that the user remains logged in even if the page is refereshed. <br/>

![Register New User](/assets/Images/cookies-saved.png)

### 7.Created function to log out the user and delete stored cookies. <br/>

![Register New User](/assets/Images/cookies-deleted.png)




