import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo1.png'

function Header() {
  return (
   <div className='RedExHeaderWrappper'>
     <section className='RedEx_Header'>
    <div className='RedExHeader_Logo'>
      <img src={Logo} alt="" />
    </div>
    <div className='RedExHeader_Nav'>
      <ul>
        <li style={{color:"red"}}>Home</li>
        <li>About us</li>
        <li>Blog</li>
        <li>Cart</li>
        <li>Account</li>
      </ul>
    </div>
  </section>
   </div>
  )
}

export default Header