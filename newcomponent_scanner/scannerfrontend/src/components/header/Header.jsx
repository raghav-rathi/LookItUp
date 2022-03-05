import React from 'react';
import './Header.css';

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
        </div>
    </div>
  )
}

export default Header;