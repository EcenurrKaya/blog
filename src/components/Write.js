import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Post from './Post'
import './Write.css'

const Write = () => {
  return (
    <div>
        <Navbar/>
        <div className='write'>
           <Post/> 
           <Sidebar/>
        </div>
       
    </div>
  )
}

export default Write