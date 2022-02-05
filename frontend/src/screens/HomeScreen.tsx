import React from 'react';

interface Props{
  firstName: string 
}

const HomeScreen = (firstName) => {
  return (
    firstName ? <h1> Welcome {firstName} </h1>
  ) : (
    <h1>Welcome to the Home page! You are not logged in.</h1>
  )
};

export default HomeScreen;
