import React from 'react'
import './LogOut.css'
import './LogOutRes.css'
import Logo from '../assets/Tlogo2.png'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2";
import { userStoreData, userTokenExp } from '../../Redux/State'
import { useState } from 'react'

function LogOut() {
  const nav = useNavigate()
  const { id } = useParams()
  const user = useSelector(state=>state.redexstore.user)
  const expireToken = useSelector(state=>state.redexstore.expToken)
  const [loading, setLoading] = useState(false)
  const Dispatch = useDispatch()
  const token = user.token
  const url = `https://redex-webapp-v1.onrender.com/api/logout/${id}`

  const config = {
    headers:{
      Authorization:`Bearer ${token}`
    }
  }

  console.log(expireToken)
  const logOutUser = () => {
    setLoading(true)
    axios.put(url, null, config)
  .then(res=>{
    setLoading(false)
    console.log(res)
    nav('/login')
    Dispatch(userStoreData({
      name:"",
      email:"", 
      id:"",
      token:"",
      Login:false,
      profilePicture:"",
      admin:false
    })
    )
  })
  .catch(err=>{
    setLoading(false)
    console.log(err);
    if(err.message === "Network Error"){
      Swal.fire({
        title: "No internet connection",
        text: 'Check your network',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }
    else if(err.response.data.message === "jwt expired"){
        console.log(err)
        Dispatch(userTokenExp({expToken:true}))
        nav("/login")
        
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
    <div className='LogOut_Page'>
       <div className='LogOut_Opacity'>
      <img className='Redex_TlogoLogin' onClick={()=>nav('/')} src={Logo} alt="" />
      <div className='LogOut_Card'>
            <div className='LogOut_Text'>
                <h1>Log Out</h1>
                <span>Are you sure you want to log out?</span>
            </div>
            <div className='LogOut_Action'>
                <button  className='GoBack_Btn' onClick={()=>nav('/')}>Go Back</button>
                <button style={{background:loading? "rgb(185, 184, 184)":null}}  className='LogOut_Btn' onClick={logOutUser}>Log Out</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LogOut