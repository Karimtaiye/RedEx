import { React, useState} from 'react'
import './NewPassword.css'
import Logo from '../assets/Tlogo.png'
import axios from 'axios'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

function NewPassword() {
    const nav = useNavigate()
    const [password, setpassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setshowPassword] = useState(false)
    const [showconfirmPassword, setshowConfirmPassword] = useState(false)
    const [loading, setLoading] = useState(false)
  

    const url = "https://redex-webapp-v1.onrender.com/api/changepassword"

    const changePassword = () => {
        if(password !== confirmPassword){
            alert("password doesn't match")
        }
        else{
        axios.put(url, {password})
        .then(res=>{
            console.log(res)
            Swal.fire({
                title: 'Password reset successfully',
                text: 'Go back to login',
                icon: 'success',
                confirmButtonText: 'Continue'
              })
              .then(result=>{
                if(result.isConfirmed){
                    nav('/login')
                }
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
                   icon: 'error',
                   confirmButtonText: 'Close'
                  })
              }
        })
    }
      }

  return (
    <div className='NewPassword_Page'>
       <div className='NewPassword_Opacity'>
       <div className='NewPassword_Card'>
            <div className='RedExNewPassword_Logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='NewPassword_Text'>
                <h1>Set Up your new Password</h1>
            </div>
            <div className='NewPassword_Action'>
                <input className='EmailVer_Input' onChange={(e)=>{
                        setpassword(e.target.value)
                      }} type={showPassword?"text":"password"} placeholder='Password' value={password}/>
                <input className='EmailVer_Input' onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                      }} type={showconfirmPassword?"text":"password"} placeholder='Confirm Password' value={confirmPassword}/>
                <button className='NewPassword_Btn' disabled={loading} style={{background:loading? "rgba(255, 0, 0, 0.589)":null}} onClick={changePassword}>Reset Password</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default NewPassword