import React from 'react';
import {Nav,Navbar,Button,Container} from 'react-bootstrap'


const Header = () => {
  return(<Navbar bg="dark" variant='dark' collapseOnSelect expand="lg">
  <Container>
    <Navbar.Brand href="/">LookItUp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>)  
}

export default Header;
