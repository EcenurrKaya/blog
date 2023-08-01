import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
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
                  <li><NavLink to="/">HOME</NavLink></li>
                  <li><NavLink to="/post">ABOUT</NavLink></li>
                  <li><NavLink to="/contact">CONTACT</NavLink></li>
                  <li><NavLink to="/write">WRITE</NavLink></li>
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