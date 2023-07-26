import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='home'>
        <div className='home--text'>
            <p>React & Node</p>
            <span>Blog</span>
        </div>
        <div className='home--img'>
            <img src='../img/ttree.jpg'/>
        </div>
    </div>
  )
}

export default Header