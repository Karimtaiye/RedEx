import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/Logo1.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaLessThan } from 'react-icons/fa'

function Header({home, about, blog, cart, login}) {
  const user = useSelector(state=>state.redexstore.user)
  const resData = useSelector(state=>state.redexstore.userRes)
  const nav = useNavigate()
  const firstname = resData.firstname
  const lastname = resData.lastname
  const [accPopUp, setAccPopUp] = useState(false)

  const token = user.token
  const id = user.id
  
  return (
   <div className='RedExHeaderWrappper'>
     <section className='RedEx_Header'>
    <div className='RedExHeader_Logo'>
      <img src={Logo} alt="" style={{cursor:'pointer'}} onClick={()=>nav('/')}/>
    </div>
    <div className='RedExHeader_Nav'>
      <ul>
       <NavLink to={'/'} style={{color:"black", textDecoration:"none", background:"none"}}>
            <li style={{color:home}}>Home</li>
       </NavLink>
        <NavLink to={'/about'} style={{color:"black", textDecoration:"none", background:"none"}} >
            <li style={{color:about}}>About us</li>
        </NavLink>
        <NavLink to={'/blog'} style={{color:"black", textDecoration:"none", background:"none"}} >
            <li style={{color:blog}}>Blog</li>
        </NavLink>
        <NavLink to={'/cart'} style={{color:"black", textDecoration:"none", background:"none"}} >
           <li style={{color:cart}}>Cart</li>
        </NavLink>
       {
        !token?
        <NavLink to={'/login'} style={{color:"black", textDecoration:"none", background:"none"}} >
           <li style={{color:login}}>Log in</li>
        </NavLink>:
        <li onMouseOver={()=>{
          setAccPopUp(!accPopUp)
        }}  className='Profile' style={{fontFamily:"cursive", textDecoration:"none"}}>{firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase()}</li>
        
       }
      </ul>
    </div>
  </section>
       {
        accPopUp?
        <div onMouseLeave={()=> setAccPopUp(!accPopUp)}  className='Nav_PopUp'>
        <ul>
          <li onClick={()=>{
            nav('/acc')
          }}>Account</li>
          <li>Dashboard</li>
          <li onClick={()=>{
            nav(`api/logout/${id}`)
          }}>Log Out</li>
        </ul>
      </div>:null
       }
   </div>
   
  )
}

export default Header