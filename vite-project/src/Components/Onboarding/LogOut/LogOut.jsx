import React from 'react'
import './LogOut.css'
import Logo from '../assets/Tlogo2.png'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { userStoreData } from '../../Redux/State'

function LogOut() {
  const nav = useNavigate()
  const { id } = useParams()
  const user = useSelector(state=>state.redexstore.user)
  const Dispatch = useDispatch()
  const token = user.token
  const url = `https://redex-webapp-v1.onrender.com/api/logout/${id}`

  const config = {
    Headers:`Bearer ${token}`
  }

  const logOutUser = () => {
    axios.put(url, null, config)
  .then(res=>{
    console.log(res)
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
    console.log(err);
  })
  }
  

  return (
    <div className='LogOut_Page'>
       <div className='Login_Opacity'>
      <img className='Redex_TlogoLogin' onClick={()=>nav('/')} src={Logo} alt="" />
      </div>
    </div>
  )
}

export default LogOut