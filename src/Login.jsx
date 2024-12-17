import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='box'>
        <div className="container">
            <p id='t-1'>Welcome</p>
            <p id='t-2'>Login</p>
            <form className='inp'>
                <input type="text" placeholder='UserName'/><br/>
                <input type="password" placeholder='PassWord'/><br/>
                <button type='submit' className='button'>Login</button>    
            </form>
            
            <p id='reg'>New User?<a className='reg' href='/register'> Sign up</a></p>
        </div>
      
    </div>
  )
}

export default Login
