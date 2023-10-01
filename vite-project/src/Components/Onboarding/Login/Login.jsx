import { React, useEffect, useState} from 'react'
import './Login.css'
import './LoginRes.css'
import Logo from '../assets/Tlogo.png'
import axios from 'axios'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'
import { userResData, userStoreData } from '../../Redux/State'
import { useDispatch, useSelector} from 'react-redux'

function Login() {
  const userRes = useSelector(state=>state.redexstore.userRes)
  const user = useSelector(state=>state.redexstore.user)
  const Dispatch = useDispatch()
  const nav = useNavigate()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [disable, setdisable] = useState(true)

  const data = {email:email.trim().toLowerCase(), password}

  const url = "https://redex-webapp-v1.onrender.com/api/login"

  useEffect(()=>{
    if(!email){
      setdisable(true)
    }
    else if(!password){
      setdisable(true)
    }
    else{setdisable(false)}
  
  },[email, password])

  const LoginUser = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post(url, data)
    .then(res=>{
      console.log(res)
      setLoading(false)
      nav('/')
      Dispatch(userResData(res.data.data))
      Dispatch(userStoreData({name:res.data.data.firstname,
                              email:res.data.data.email, 
                              id:res.data.data._id,
                              token:res.data.data.token,
                              Login:res.data.data.islogin,
                              profilePicture:res.data.data.profilePicture,
                              admin:res.data.data.isAdmin
      }))
    })
    .catch(err=>{
      console.log(err)
      setLoading(false)
       if(err.message === "Network Error"){
        Swal.fire({
          title: "Check your internet connection",
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }
      else if(err.response.data.message === `User not found`){
        // console.log("oo");
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
      <img className='Redex_TlogoLogin' onClick={()=>nav('/')} src={Logo} alt="" />
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
           <button type='submit' disabled={loading || disable} className='Login_Btn' style={{background:loading? "rgb(185, 184, 184)":disable?"rgb(216, 81, 81)":null}} >Log in</button>
           <span className='SignUp_Route'>Don't have an account?<span onClick={()=>{
            nav('/signup')
           }}>Sign up</span></span>
        </section>
    </div>
      </div>
</form>
  )
}

export default Login