import React from 'react'
import Logo from '../assets/Tlogo.png'
import axios from 'axios'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css'
// import Swal from "sweetalert2";
import { useEffect } from 'react';

function ForgetPassword() {
    const user = JSON.parse(localStorage.getItem("userData"))
    console.log(user);
    const email = user.email

    // useEffect(()=>{
    //     Swal.fire({
    //         title: 'User Already Exists!',
    //         text: 'Do you want to continue',
    //         icon: 'error',
    //         confirmButtonText: 'Close',
    //         showCancelButton: true
    //       })

    // },[])

  const url = "https://redex-webapp-v1.onrender.com/api/forgotpassword"
  const reqResetPassword = () => {
    axios.post(url, email)
    .then(res=>{
        console.log(res)
        Swal.fire({
            title: 'A mail has been sent to your email',
            text: 'Check your mail for reset password link',
            icon: 'success',
            confirmButtonText: 'Close'
          })
    })
    .catch(err=>{
         if(err.message === "Network Error"){
            Swal.fire({
              title: "Check your internet connection",
              // text: 'Do you want to continue',
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          }
          else{
              console.log(err)
              Swal.fire({
                  title: err.response.data.message,
                  // text: 'Check your mail for reset password link',
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
                <input className='EmailVer_Input' type="text" placeholder='E-mail'/>
                <button style={{background:loading? "rgba(255, 0, 0, 0.589)":null}} disabled={loading} className='ForgetPassword_Btn' onClick={reqResetPassword}>Resend verification link</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ForgetPassword