import React from 'react'
import img from '../images/gobhi.png'
import '../css/Loginform.css'
import { Link } from 'react-router-dom'
const Loginpage = () => {
  return (
    <div className='login-form-container' style={{backgroundImage:`url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'}}>
      <form className='loginform'>
        <h1 className='loginh1'>LOG IN</h1>
        <input className='login-email-input' type="email" placeholder="Username" />
        <input className='login-password-input' type="password" placeholder="Password" />
        <button className='submit-butt' type='submit'><Link to='/'>Next</Link></button>
        <p className='login-p'>New to the App ? <br /><br /><Link to="/signin">CLICK HERE</Link></p>
      </form>
    </div>
  )
}
export default Loginpage
