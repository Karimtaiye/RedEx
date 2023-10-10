import React, { useState, useEffect } from 'react'
import './Header.css'
import Logo from '../../assets/Logo1.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BiSolidCart } from 'react-icons/bi'
import axios from 'axios'
import { motion } from 'framer-motion'

function Header({home, about, blog, cart, login, renders}) {
  const user = useSelector(state=>state.redexstore.user)
  const userRes = useSelector(state=>state.redexstore.userRes)
  const nav = useNavigate()
  const firstname = userRes.firstname
  const lastname = userRes.lastname
  const [accPopUp, setAccPopUp] = useState(false)
  const [userCart, setuserCart] = useState([])
  // const renders = true


  const token = user.token
  const id = user.id

  const config = {
    headers:{
      Authorization:`Bearer ${token}`
    }
  }

  console.log(userRes.cart);

  const getUserCart = () => {
    axios.get(`https://redex-webapp-v1.onrender.com/api/getCart/${userRes.cart}`, config)
    .then(res=>{
      console.log(res)
      setuserCart(res.data.data)
    })
    .catch(err=>{
      console.log(err);
    })
  }


  useEffect(()=>{
    getUserCart()
  },[renders])
  console.log(userCart);
  
  return (
    <>
    {/* {
      userCart.length === 0 ?
      <><h1>Loading</h1></>: */}
      <motion.div
      initial={{animation:"slideInDown",
        animationDuration:"1s"}}
      animate={{opacity:1}}
      exit={{}} className='RedExHeaderWrappper'>
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
             <li style={{color:cart}}><BiSolidCart  style={{fontSize:'25px'}}/>
             <div className='Cart_Qty' style={{ background:cart}}>{userCart.length === 0?"...":userCart.items.length}</div>
             </li>
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
              nav('/account')
            }}>Account</li>
            <li>Dashboard</li>
            <li onClick={()=>{
              nav(`/api/logout/${id}`)
            }}>Log Out</li>
          </ul>
        </div>:null
         }
     </motion.div>
    {/* } */}
    </>
   
  )
}

export default Header