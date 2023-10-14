import { React, useState} from 'react'
import Logo from '../assets/Tlogo.png'
import axios from 'axios'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css'
import './ForgetPasswordRes.css'
import { useEffect } from 'react';

function ForgetPassword() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
    const [disable, setdisable] = useState(true)
  console.log({email})
  const url = "https://redex-webapp-v1.onrender.com/api/forgotpassword"

  useEffect(()=>{
    if(!email){
      setdisable(true)
    }
    else{
      setdisable(false)
    }
  },[email])

  const reqResetPassword = () => {
      setLoading(true)
    axios.post(url, {email})
    .then(res=>{
        console.log(res)
        Swal.fire({
            title: 'A mail has been sent to your email',
            text: 'Check your mail for reset password link',
            icon: 'success',
            confirmButtonText: 'Close'
          })
          setLoading(false)
    })
    .catch(err=>{
      setLoading(false)
         if(err.message === "Network Error"){
            Swal.fire({
              title: "Check your internet connection",
              text: 'Check your network',
              icon: 'error',
              confirmButtonText: 'Close'
            })
          }
          else{
              console.log(err)
              Swal.fire({
                  title: err.response.data.message,
                  icon: 'error',
                  confirmButtonText: 'Close'
                })
          }
    })
  }



  return (
    <div className='ForgetPassword_Page'>
       <div className='ForgetPassword_Opacity'>
       <div className='ForgetPassword_Card'>
            <div className='RedExForgetPassword_Logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='ForgetPassword_Text'>
                <h1>Forgot Password</h1>
                <span>Enter the email used for registration</span>
            </div>
            <div className='ForgetPassword_Action'>
                <input className='EmailVer_Input' type="text" placeholder='E-mail' value={email } onChange={(e)=>setEmail(e.target.value)}/>
                <button disabled={loading || disable} style={{background:loading? "rgb(185, 184, 184)":disable?"rgb(216, 81, 81)":null}} className='ForgetPassword_Btn' onClick={reqResetPassword}>Resend verification link</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ForgetPassword