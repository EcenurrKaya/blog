import React from 'react'
import Post from './Post'
import Sidebar from './Sidebar'
import './PostPage.css'

const PostPage = () => {
  return (
    <div className='postpage'>
        <div className='pp-sidebar'>
         <Post/>
        </div>
        <Sidebar/>
    </div>
  )
}

export default PostPage