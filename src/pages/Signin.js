import React from 'react'
import img from '../images/gobhi.png'
import '../css/Signin.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Signin = () => {
  const [isFocuseduser, setIsFocuseduser] = useState(false);
  const [isFocusedpass, setIsFocusedpass] = useState(false);
  const handleFocususer = () => {
    setIsFocuseduser(true);
  };
  const handleFocuspass = () => {
    setIsFocusedpass(true);
  };
  const handleBluruser = () => {
    setIsFocuseduser(false);
  };
  const handleBlurpass = () => {
    setIsFocusedpass(false);
  };
  return (
    <div>
      <div className='Signin-form-container' style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'
      }}>
        <form className='Signinform'>
          <h1 className='Signinh1'>SIGN IN</h1>
          {isFocuseduser ? (
            <label htmlFor="text-input">Enter your username:</label>
          ) : null}
          <input onFocus={handleFocususer} onBlur={handleBluruser} id='username' className='Signin-email-input' type="email" placeholder="Username" />
          {isFocusedpass ? (
            <label htmlFor="text-input">Enter your Password:</label>
          ) : null}
          <input onFocus={handleFocuspass} onBlur={handleBlurpass} className='Signin-password-input' type="password" placeholder="Password" />
          <button className='submit-butt' type='submit'><Link to='/'>Next</Link></button>
          <p className='Signin-p'>Already have an account ? <br /><br /><Link to="/login">CLICK HERE</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signin
