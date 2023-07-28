import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div>
            <p>Username</p>
            <input type='text' placeholder='username'/>
        </div>

        <div>
            <p>Email</p>
            <input type='email' placeholder='email'/>
        </div>

        <div>
            <p>Password</p>
            <input type='password' placeholder='***'/>
        </div>

        <button>Update</button>
    </div>
  )
}

export default Contact