import { React, useState, useEffect} from 'react'
import './Signup.css'
import './SignupRes.css'
import axios from 'axios'
import { useDispatch, useSelector} from 'react-redux'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/Tlogo.png'
import { BiHide, BiShow } from 'react-icons/bi'
import { userResData } from '../../Redux/State'
const emailRegex = /^\s*[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}\s*$/;
const nameRegex = /^[a-zA-Z\s]+$/;
const numberPatterns = /^\d+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


function Signup() {
  const userRes = useSelector(state=>state.redexstore.userRes)
  const Dispatch = useDispatch()
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
  const [disable, setdisable] = useState(true)
  const [phonenumberErr, setphonenumberErr] = useState(false)
  const [passworderr, setpassworderr] = useState(false)
  const [showPassword, setshowPassword] = useState(false)
  const [showconfirmPassword, setshowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const data = {firstname:firstname.trim(), lastname:lastname.trim(), email:email.trim().toLowerCase(), phoneNumber, password, confirmPassword,}

  console.log(userRes);

  useEffect(()=>{
    if(!nameRegex.test(firstname) && firstname){
      setfirtsnameErr(true)
      setlastnameErr(false)
      setemailErr(false)
      setphonenumberErr(false)
      setpassworderr(false)
      seterrorMsg("First name must be letters only")
      console.log("First name must contain letters ")
      setdisable(true)
    }
    
    else if(!nameRegex.test(lastname) && lastname){
      setlastnameErr(true)
      setfirtsnameErr(false)
      setemailErr(false)
      setphonenumberErr(false)
      setpassworderr(false)
      seterrorMsg("Last name must be letters only")
      console.log("Last name must contain letters only")
      setdisable(true)
    }
    else if(!emailRegex.test(email) && email){
      setemailErr(true)
      setlastnameErr(false)
      setfirtsnameErr(false)
      setphonenumberErr(false)
      setpassworderr(false)
      seterrorMsg("Please enter a valid email")
      console.log("Please enter a valid email")
      setdisable(true)
    }
    // else if(!phoneNumber){
    //   setphonenumberErr(false)
    // }
    else if(!phoneNumber.startsWith("9") && !phoneNumber.startsWith("8") && !phoneNumber.startsWith("7") && phoneNumber){
      setphonenumberErr(true)
      setlastnameErr(false)
      setfirtsnameErr(false)
      setemailErr(false)
      setpassworderr(false)
      seterrorMsg("Wrong phone format")
      console.log("Wrong phone format")
      setdisable(true)
    }
    else if(!numberPatterns.test(phoneNumber) && firstname && lastname && email){
      setphonenumberErr(true)
      setlastnameErr(false)
      setfirtsnameErr(false)
      setemailErr(false)
      setpassworderr(false)
      seterrorMsg("Phone numbers must contain digits only")
      console.log("Phone numbers must contain digits only")
      setdisable(true)
    }
     else if(!passwordRegex.test(password) && password){
      setpassworderr(true)
      setphonenumberErr(false)
      setlastnameErr(false)
      setfirtsnameErr(false)
      setemailErr(false)
      seterrorMsg("Password must be 8 characters and contain a lowercase, an uppercase, and a digit")
      console.log("Password must be at least 8 characters, including an uppercase letter, a lowercase letter, and a number")
      setdisable(true)
    }
     else if(password !== confirmPassword && password){
      setpassworderr(true)
      setphonenumberErr(false)
      setlastnameErr(false)
      setfirtsnameErr(false)
      setemailErr(false)
      seterrorMsg("password doesnt match")
      console.log("password doesnt match")
      setdisable(true)
    }
    // else if(!firstname !lastname ) {
    //   setdisable(true)
    // }
     else{
      setlastnameErr(false)
      setfirtsnameErr(false)
      setemailErr(false)
      setphonenumberErr(false)
      setpassworderr(false)
      setdisable(false)
     }

     if(!firstname || !lastname || !email || !phoneNumber || !password || !confirmPassword) {
      setdisable(true)
     }
     else{
      setdisable(false)
     }
  },[firstname, lastname, email, password, phoneNumber, confirmPassword])

  const url = "https://redex-webapp-v1.onrender.com/api/signup"

  const SignUpUser = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post(url, data)
    .then(res=>{
      // localStorage.setItem("userDetails", JSON.stringify(res.data.data))
      Dispatch(userResData(res.data.data))
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
      else if(err.code === "Network Error"){
        alert("net")
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
      <img className='Redex_TlogoSignUp' onClick={()=>nav('/')} src={Logo} alt="" />
        <div className='Signup_Card'>
            <section className='Signup_Header'>
                <h1>Welcome Onboard</h1>
                <span>Sign up to create an account</span>
            </section>
            <section className='Signup_Body'>
               <div className='Signup_Inputs'>
                    <div className='Signup_InputDuo'>
                      <div>
                        {!firtsnameErr?<label>First Name</label>:<span style={{fontSize:"11px", color:"red",fontWeight:"bold"}}>{errorMsg}</span>}
                        <input style={{border:firtsnameErr?"1px solid red":null}} onChange={(e)=>{
                          setFirstName(e.target.value)
                        }} type="text" placeholder='First name' value={firstname}/>
                      </div>
                      <div>
                        {!lastnameErr?<label>Last Name</label>:<span style={{fontSize:"11px", color:"red",fontWeight:"bold"}}>{errorMsg}</span>}
                        <input style={{border:lastnameErr?"1px solid red":null}} onChange={(e)=>{
                          setLastname(e.target.value)
                        }} type="text" placeholder='Last name' value={lastname}/>                        
                      </div>
                    </div>
                    <div className='Signup_Input'>
                    {!emailErr?<label>E-mail</label>:<span style={{fontSize:"11px", color:"red",fontWeight:"bold"}}>{errorMsg}</span>}
                      <input style={{border:emailErr?"1px solid red":null}} onChange={(e)=>{
                        setEmail(e.target.value)
                      }} type="email" placeholder='E-mail ' value={email}/>
                    </div>
                    <div className='Signup_Input'>
                    {!phonenumberErr?<label>Phone Number</label>:<span style={{fontSize:"11px", color:"red",fontWeight:"bold"}}>{errorMsg}</span>}
                      <input  style={{paddingInline:"50px", border:phonenumberErr?"1px solid red":null}} onChange={(e)=>{
                        setphoneNumber(e.target.value)
                      }} type="number"  placeholder='Phone number' value={phoneNumber}/>
                      <span className='Country_Code'>+234</span>
                    </div>
                    <div className='Signup_Input' style={{height:passworderr?"19.5%":null}}>
                    {!passworderr?<label>Password</label>:<span style={{fontSize:"11px", color:"red",fontWeight:"bold"}}>{errorMsg}</span>}
                      <input style={{border:passworderr?"1px solid red":null}} onChange={(e)=>{
                        setpassword(e.target.value)
                      }} type={showPassword?"text":"password"} placeholder='Password' value={password}/>
                      {
                        showPassword?<BiShow className='Show_Password' onClick={()=>setshowPassword(!showPassword)}/>:<BiHide className='Show_Password' onClick={()=>setshowPassword(!showPassword)}/>
                      }
                    </div>
                    <div className='Signup_Input'>
                    {passworderr && errorMsg === "password doesnt match"?<span style={{fontSize:"11px", color:"red",fontWeight:"bold"}}>{errorMsg}</span>:<label>Confirm Password</label>}
                      <input style={{border:passworderr &&  errorMsg === "password doesnt match"?"1px solid red":null}} onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                      }} type={showconfirmPassword?"text":"password"} placeholder='Confirm Password' value={confirmPassword}/>
                      {
                        showconfirmPassword?<BiShow className='Show_Confirmpassword' onClick={()=>setshowConfirmPassword(!showconfirmPassword)}/>:<BiHide className='Show_Confirmpassword' onClick={()=>setshowConfirmPassword(!showconfirmPassword)}/>
                      }
                    </div>
               </div>
               <button type='submit' disabled={loading || disable} className='Signup_Btn' style={{background:loading? "rgb(185, 184, 184)":disable?"rgb(216, 81, 81)":null}} >Create account</button>
            </section>
            <span style={{marginTop:'5px'}} className='SignUp_Route'>Already have an account?<span onClick={()=>{
            nav('/login')
           }}>Sign in</span></span>
        </div>

      </div>
    </form>
  )
}

export default Signup