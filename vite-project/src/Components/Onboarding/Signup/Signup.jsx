import { React, useState, useEffect} from 'react'
import './Signup.css'
import './SignupRes.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/Tlogo.png'


function Signup() {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phonenumber, setphonenumber] = useState("")
  const [password, setpassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")

  const data = {firstname, lastname, email, phonenumber, password, confirmpassword}
  console.log(data);


  const url = "https://redex-webapp-v1.onrender.com/signup"

  const SignUpUser = () => {
    axios.post(url, data)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }


  return (
    <div className='Signup_Page'>
      <div className='SignUp_Opacity'>
      <img className='Redex_TlogoSignUp' src={Logo} alt="" />
        <div className='Signup_Card'>
            <section className='Signup_Header'>
                <h1>Welcome Onboard</h1>
                <span>Sign up to create an account</span>
            </section>
            <section className='Signup_Body'>
               <div className='Signup_Inputs'>
                    <div className='Signup_InputDuo'>
                      <div>
                        <label>First Name</label>
                        <input onChange={(e)=>{
                          setFirstName(e.target.value)
                        }} type="text" placeholder='First name'/>
                      </div>
                      <div>
                        <label>Last Name</label>
                        <input onChange={(e)=>{
                          setLastname(e.target.value)
                        }} type="text" placeholder='Last name'/>                        
                      </div>
                    </div>
                    <div className='Signup_Input'>
                      <label>E-mail</label>
                      <input onChange={(e)=>{
                        setEmail(e.target.value)
                      }} type="email" placeholder='E-mail'/>
                    </div>
                    <div className='Signup_Input'>
                      <label>Phone number</label>
                      <input onChange={(e)=>{
                        setphonenumber(e.target.value)
                      }} type="number" placeholder='Phone number'/>
                    </div>
                    <div className='Signup_Input'>
                      <label>Password</label>
                      <input onChange={(e)=>{
                        setpassword(e.target.value)
                      }} type="password" placeholder='Password'/>
                    </div>
                    <div className='Signup_Input'>
                      <label>Confirm Password</label>
                      <input onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                      }} type="password" placeholder='Confirm Password'/>
                    </div>
               </div>
               <button className='Signup_Btn' onClick={SignUpUser}>Create account</button>
            </section>
        </div>

      </div>
    </div>
  )
}

export default Signup