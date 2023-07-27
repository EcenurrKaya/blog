import React from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import './Home.css'

const Home = () => {
  return (
    <div className='homee'>
      <div className='homee--card'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Home