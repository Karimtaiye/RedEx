import { React, useState} from 'react'
import './Login.css'
import './LoginRes.css'
import Logo from '../assets/Tlogo.png'
import axios from 'axios'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'

function Login() {
  const nav = useNavigate()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")

  const data = {email:email.trim().toLowerCase(), password}

  const url = "https://redex-webapp-v1.onrender.com/api/login"

  const LoginUser = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post(url, data)
    .then(res=>{
      console.log(res)
      setLoading(false)
      
      nav('/')
    })
    .catch(err=>{
      console.log(err)
      setLoading(false)
      if(err.response.data.message === `User not found`){
        Swal.fire({
          title: err.response.data.message,
          text: 'Check your input',
          icon: 'error',
          confirmButtonText: 'Continue'
        })
      }
      else{
        Swal.fire({
          title: err.response.data.message,
          text: 'Check your input',
          icon: 'error',
          confirmButtonText: 'Continue'
        })
      }
    })
  }


  return (
    <form onSubmit={LoginUser} className='Login_Page'>
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
                  <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='E-mail or phone number'/>
                </div>
                <div className='Login_Input'>
                  <label>Password</label>
                  <input onChange={(e)=>setpassword(e.target.value)} type="password" placeholder='Password'/>
                </div>
                <span onClick={()=>{
                  nav('/forgetpassword')
                }} className='Forgot_PasswordSpan'>Forgot password?</span>
           </div>
           <button type='submit' disabled={loading} className='Login_Btn' style={{background:loading? "rgba(255, 0, 0, 0.589)":null}} >Log in</button>
        </section>
    </div>
      </div>
</form>
  )
}

export default Login