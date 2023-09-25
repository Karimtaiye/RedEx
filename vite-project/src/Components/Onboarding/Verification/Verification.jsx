import { React, useState, useEffect} from 'react'
import './Verification.css'
import './VerificationRes.css'
import Logo from '../assets/Tlogo.png'

function Verification() {
    const [verified, setVerified] = useState(false)
    

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
                <button className='ResendVerification_Btn'>Resend verification link</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Verification