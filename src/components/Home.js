import React from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import './Home.css'
import Header from './Header'

const Home = () => {
  return (
    <div>
      <Header/>
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
    </div>
  )
}

export default Home