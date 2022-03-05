import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='container-footer'>
        <div className='wrapper-footer'>
            <div className='copyright'>
                Copyright &copy; LookItUp 2021
            </div>
            <ul>
                <li>Privacy</li>
                <li className='footer-dot'></li>
                <li>Terms</li>
                <li className='footer-dot'></li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer