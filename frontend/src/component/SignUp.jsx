import React from 'react'

const SignUp = () => {
  return (
    
         <div className='SignUp'>
             <div className='Signup-container'>
                 Logo
            <div>
                <div className='text'>Create New Account</div>
                <form>
                    <input type='text' placeholder='Mail Id'required/>
                    <input type='password' placeholder='Password' required/>
                    <input type='password' placeholder='Confirm Password'required/>
                    <button>Sign Up</button>
                </form>
                <a href='*'>Sign In</a>
            </div>
         </div>

        
      
    </div>
  )
}

export default SignUp