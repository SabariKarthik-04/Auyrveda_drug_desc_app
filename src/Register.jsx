import React from 'react'
import './Register.css'
const Register = () => {
  return (
     <div className='box'>
        <div className="container-1">
            <p id='ti-1'>Welcome</p>
            <p id='ti-2'>Register</p>
            <form className='input'>
                <input type="text" placeholder='Email'/><br/>
                <input type="text" placeholder='Age'/><br/>
                <input type="text" placeholder='Gender'/><br/>
                <input type="text" placeholder='UserName'/><br/>
                <input type="password" placeholder='PassWord'/><br/>
                <button type='submit' className='buton'>Login</button>
            </form>
            <input type='file'></input>
            
            <p id='login'>Having An Account?<a className='login' href='/'> Sign In</a></p>
        </div>
      
    </div>
  )
}

export default Register
