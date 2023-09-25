import React from 'react'
import './Login.css'
import './LoginRes.css'
import Logo from '../assets/Tlogo.png'

function Login() {
  return (
    <div className='Login_Page'>
      <div className='Login_Opacity'>
      <img className='Redex_TlogoLogin' src={Logo} alt="" />
    <div className='Login_Card'>
        <section className='Login_Header'>
            <h1>Welcome Back</h1>
            <span>Sign in to your account</span>
        </section>
        <section className='Login_Body'>
           <div className='Login_Inputs'>
                <div className='Login_Input'>
                  <label>E-mail</label>
                  <input type="email" placeholder='E-mail'/>
                </div>
                <div className='Login_Input'>
                  <label>Password</label>
                  <input type="password" placeholder='Password'/>
                </div>
           </div>
           <button className='Login_Btn'>Log in</button>
        </section>
    </div>
      </div>
</div>
  )
}

export default Login