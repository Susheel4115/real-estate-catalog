import React from 'react'
import {Link} from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='container'>
        <div className='signin-container'>
        <div className='logo'>Logo</div>
        <div className='signin'>Enter Your Credentials to access your account</div>
        <form>
            <input type='text' placeholder='UserID' />
            <input type='password' placeholder='Password'/>
            <Link to='/User'><button className='btn' >Sign In</button></Link>
            <a href='/signup'>sign Up</a>
            </form>
            <div className='signup-nav'>Don't have an account? <a href='/SignUp'>signup</a></div>
        </div>
        {/* <Route path='/signup' element={<SignUp/>}/> */}

       
            </div>
  )
}

export default SignIn