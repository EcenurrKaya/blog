import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img src='../img/woman.jpg'/>
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input type='file' id='finleInput' style={{display:"none"}}></input>
          </div>
          <label>Username</label>
          <input type='text' placeholder='Safak'/>
          <label>Email</label>
          <input type='email' placeholder='safak457@gmail.com'/>
          <label>Password</label>
          <input type='password'/>
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Contact