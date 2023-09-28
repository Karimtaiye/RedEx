import { React, useState, useEffect} from 'react'
import './Verification.css'
import './VerificationRes.css'
import Logo from '../assets/Tlogo.png'
import axios from 'axios'
import Swal from "sweetalert2";
import { useLocation, useNavigate } from 'react-router-dom';

function Verification() {
  const nav = useNavigate()
  const location = useLocation();
    const [verified, setVerified] = useState(false)
    // const { token } = useParams()
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token")

    const url2 = 'https://redex-webapp-v1.onrender.com/api/re-verify'
    
    useEffect(()=>{

      if(token){
        VerifyUser(token)
      }

    },[token])
    
    const VerifyUser = (token) => {
      const url = `https://redex-webapp-v1.onrender.com/api/verify/${token}`
      axios.put(url)
      .then(res=>{
        console.log(res)
        setVerified(true)
          Swal.fire({
            title: "Verification successful",
            text: 'Click to Continue',
            icon: 'success',
            confirmButtonText: 'Continue'
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
        else {
          Swal.fire({
            title: 'Cannot verify user',
            text: 'Click to go back',
            icon: 'error',
            confirmButtonText: 'Close'
          })
        }
        console.log(err)

      })
    }


    const ReVerifyUser = () => {
      axios.put(url2, "olayinkahassan117@gmail.com")
      .then(res=>{
        console.log(res)
        setVerified(true)
          Swal.fire({
            title: "Verification Resent",
            text: 'Check your mail for verification link',
            icon: 'success',
            confirmButtonText: 'Continue'
          })
      })
      .catch(err=>{
        console.log(err)
        Swal.fire({
          title: 'Cannot send link',
          text: 'Click to try agian',
          icon: 'error',
          confirmButtonText: 'try again'
        })
      })
    }
    

  return (
    <div className='Verification_Page'>
       <div className='Verification_Opacity'>
       <div className='Verification_Card'>
            <div className='RedExVerification_Logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='Verification_Text'>
                <h1>Email Verification</h1>
                <span>Check your email  for verification</span>
            </div>
            <div className='Resend_Verification'>
                <span>Didn’t receive any mail?</span>
                <button className='ResendVerification_Btn' onClick={ReVerifyUser}>Resend verification link</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Verification