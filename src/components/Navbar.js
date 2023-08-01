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
                    <NavLink to="/"><li>HOME</li></NavLink>
                    <NavLink to="/"><li>ABOUT</li></NavLink>
                    <NavLink to="/contact"><li>CONTACT</li></NavLink>
                    <NavLink to="/write"><li>WRITE</li></NavLink>
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