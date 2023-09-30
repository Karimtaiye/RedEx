import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo1.png'
import { NavLink, useNavigate } from 'react-router-dom'

function Header({home, about, blog, cart, login}) {
  const nav = useNavigate()
  
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
        <NavLink to={'/login'} style={{color:"black", textDecoration:"none", background:"none"}} >
            <li style={{color:login}}>Log in</li>
        </NavLink>
      </ul>
    </div>
  </section>
   </div>
  )
}

export default Header