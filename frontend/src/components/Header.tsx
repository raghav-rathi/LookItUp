import React, { SyntheticEvent } from 'react';
import {Nav,Navbar,Button,Container} from 'react-bootstrap'

interface Props {
  firstName: string
  setFirstName : (firstName:string) => void
}

const logoutHandler = async(e:SyntheticEvent) => {
e.preventDefault()

await fetch ('https://localhost:8081/api/logout',{
  headers: {'Content-Type':'application/json'}
  credentials:'include'
})

setFirstName('')

}

const Header = ({firstName}:Props) => {
  return(<Navbar bg="dark" variant='dark' collapseOnSelect expand="lg">
  <Container>
    <Navbar.Brand href="/">LookItUp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      {firstName? (
         <Nav className="ms-auto">
         <Nav.Link onClick={logoutHandler}>Log out</Nav.Link>
        </Nav>

      ) : (
      <Nav className="ms-auto">
       <Nav.Link href="/signup">Sign Up</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
      )}
     
    </Navbar.Collapse>
  </Container>
</Navbar>)  
}

export default Header;
