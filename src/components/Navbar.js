import React from 'react'
import './Navbar.css'
import { Link, Route, Router } from 'react-router-dom';
import Write from './Write';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
            <div className='logo'>
                <img src='../img/github.png'/>
                <img src='../img/instagram.png'/>
                <img src='../img/twitter.png'/>
            </div>

            <div className='navbar--li mt-3'>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>
                      WRITE
                    </li>
                </ul>
            </div>

            <div className='navbar--right '>
                <img src='../img/woman.jpg'/>
                <img src='../img/search.png'/>
            </div>
    </div>
   
    </>
  )
}

export default Navbar