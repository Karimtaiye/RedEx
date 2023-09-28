import { React, useState, useEffect} from 'react'
import './Signup.css'
import './SignupRes.css'
import axios from 'axios'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/Tlogo.png'
import { BiHide, BiShow } from 'react-icons/bi'
const emailRegex = /^\s*[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}\s*$/;
const nameRegex = /^[a-zA-Z\s]+$/;
const numberPatterns = /^\d+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


function Signup() {
  const nav = useNavigate()
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMsg, seterrorMsg] = useState({type:"", msg:""})
  const [firtsnameErr, setfirtsnameErr] = useState(false)
  const [lastnameErr, setlastnameErr] = useState(false)
  const [emailErr, setemailErr] = useState(false)
  const [phonenumberErr, setphonenumberErr] = useState(false)
  const [passworderr, setpassworderr] = useState(false)
  const [showPassword, setshowPassword] = useState(false)
  const [showconfirmPassword, setshowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const data = {firstname:firstname.trim(), lastname:lastname.trim(), email:email.trim().toLowerCase(), phoneNumber, password, confirmPassword,}



  useEffect(()=>{
    if(!nameRegex.test(firstname)){
      setfirtsnameErr(true)
      seterrorMsg("First name must contain letters only")
      console.log("First name must contain letters only")
    }
    else if(!nameRegex.test(lastname)){
      setlastnameErr(true)
      seterrorMsg("Last name must contain letters only")
    }
    else if(!emailRegex.test(email)){
      setemailErr(true)
      seterrorMsg("Please enter a valid email")
      console.log("Please enter a valid email")
    }
    else if(!phoneNumber.startsWith("9") || !phoneNumber.startsWith("8") || !phoneNumber.startsWith("7")){
      setphonenumberErr(true)
      seterrorMsg("Wrong phone format")
      console.log("Wrong phone format")
    }
    else if(!numberPatterns.test(phoneNumber)){
      setemailErr(true)
      seterrorMsg("Phone numbers must contain digits only")
      console.log("Phone numbers must contain digits only")
    }
     else if(!numberPatterns.test(phoneNumber)){
      setemailErr(true)
      seterrorMsg("Phone numbers must contain digits only")
      console.log("Phone numbers must contain digits only")
    }
     else if(!passwordRegex.test(password)){
      setpassworderr(true)
      seterrorMsg("Password must contain at least 8 characters, including a lowercase letter, an uppercase letter, and a digit")
      console.log("Password must contain at least 8 characters, including a lowercase letter, an uppercase letter, and a digit")
    }
     else if(password !== confirmPassword){
      setpassworderr(true)
      seterrorMsg("password doesnt match")
      console.log("password doesnt match")
    }
     else{
      setlastnameErr(false)
      setfirtsnameErr(false)
      setemailErr(false)
      setphonenumberErr(false)
      setpassworderr(false)
     }
  },[firstname, lastname, email, password, phoneNumber, confirmPassword])

  const url = "https://redex-webapp-v1.onrender.com/api/signup"

  const SignUpUser = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post(url, data)
    .then(res=>{
      localStorage.setItem("userDetails", JSON.stringify(res.data.data))
      console.log(res)
      setLoading(false)
      Swal.fire({
        title: 'Account created successsfuly',
        text: '',
        icon: 'success'
      })
      setTimeout(() => {
        nav('/api/verify')
      }, 2000);
    })
    .catch(err=>{
      console.log(err)
      setLoading(false)
      if(err.response.data.message === `User with this Email: ${email} already exist.`){
        Swal.fire({
          title: 'User Already Exists!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }
      if(err.response.data.message === `User with this Phone Number :${phoneNumber},already exists`){
        Swal.fire({
          title: 'User Already Exists!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Close',
          // showCancelButton: true
        })
      }
      else if(err.response.data.message === `Please provide your email address.`){
        Swal.fire({
          title: err.response.data.message,
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
      else if(err.message === "Network Error"){
        Swal.fire({
          title: "Check your internet connection",
          // text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
      else{
        Swal.fire({
          title: err.response.data.message,
          // text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    })
  }


  return (
    <form onSubmit={SignUpUser} className='Signup_Page'>
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
                        }} type="text" placeholder='First name' value={firstname}/>
                      </div>
                      <div>
                        <label>Last Name</label>
                        <input onChange={(e)=>{
                          setLastname(e.target.value)
                        }} type="text" placeholder='Last name' value={lastname}/>                        
                      </div>
                    </div>
                    <div className='Signup_Input'>
                      <label>E-mail</label>
                      <input onChange={(e)=>{
                        setEmail(e.target.value)
                      }} type="email" placeholder='E-mail ' value={email}/>
                    </div>
                    <div className='Signup_Input'>
                      <label>Phone number</label>
                      <input style={{paddingInline:"50px"}} onChange={(e)=>{
                        setphoneNumber(e.target.value)
                      }} type="number"  placeholder='Phone number' value={phoneNumber}/>
                      <span className='Country_Code'>+234</span>
                    </div>
                    <div className='Signup_Input'>
                      <label>Password</label>
                      <input onChange={(e)=>{
                        setpassword(e.target.value)
                      }} type={showPassword?"text":"password"} placeholder='Password' value={password}/>
                      {
                        showPassword?<BiShow className='Show_Password' onClick={()=>setshowPassword(!showPassword)}/>:<BiHide className='Show_Password' onClick={()=>setshowPassword(!showPassword)}/>
                      }
                    </div>
                    <div className='Signup_Input'>
                      <label>Confirm Password</label>
                      <input onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                      }} type={showconfirmPassword?"text":"password"} placeholder='Confirm Password' value={confirmPassword}/>
                      {
                        showconfirmPassword?<BiShow className='Show_Confirmpassword' onClick={()=>setshowConfirmPassword(!showconfirmPassword)}/>:<BiHide className='Show_Confirmpassword' onClick={()=>setshowConfirmPassword(!showconfirmPassword)}/>
                      }
                    </div>
               </div>
               <button type='submit' disabled={loading} className='Signup_Btn' style={{background:loading? "rgba(255, 0, 0, 0.589)":null}} >Create account</button>
            </section>
        </div>

      </div>
    </form>
  )
}

export default Signup