import React from 'react';
import './Header.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Header(props) {
  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='logo' onClick={props.goToHome}>
                LookItUp
            </div>
            <div className='scanner' onClick={props.goToHome}>    
                Scanner
            </div> 
            <Link to="/about"  className='scanner'>About Us</Link>
            <div>
              <Form className='divsearch'>
                          <Form.Control className="search" type="text" placeholder="Enter Query" />
              </Form>
              <button className="button-31" role="button">Search</button>
              
            </div>
        </div>
    </div>
  )
}
export default Header;