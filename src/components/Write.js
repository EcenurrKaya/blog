import React from 'react'
import './Write.css'

const Write = () => {
  return (
    <div>
        <div className='write'>
          <img src='../img/ttree.jpg' className='write--photo'/>
          <div className='write--title'>
            <div className='write--title2'>
              <img src='../img/plus.png'/>
              <textarea placeholder='Title' ></textarea>
            </div>
            <button>Publis</button>
          </div>
          <div className='write-desc'>
            <textarea placeholder='Tell your story' typeof='text'></textarea>
          </div>
        </div> 
    </div>
  )
}

export default Write