import React, { useState, useEffect, memo } from 'react'
import './Header.css'
import './HeaderRes.css'
import Logo from '../../assets/Logo1.png'
import Logo2 from '../../assets/Logo2.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BiSolidCart } from 'react-icons/bi'
import { RiMenu2Line } from 'react-icons/ri'
import axios from 'axios'
import { motion } from 'framer-motion'

function Header({home, about, blog, cart, login, renders}) {
  const user = useSelector(state=>state.redexstore.user)
  const userRes = useSelector(state=>state.redexstore.userRes)
  const nav = useNavigate()
  const firstname = userRes.firstname
  const lastname = userRes.lastname
  const [accPopUp, setAccPopUp] = useState(false)
  const [menu, setMenu] = useState(false)
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
        <img className='MobileLogo' src={Logo2} alt="" style={{cursor:'pointer'}} onClick={()=>nav('/')}/>
      </div>
      <div className='RedExHeader_Nav'>
        <ul>
         <NavLink className="menu" to={'/'} style={{color:"black", textDecoration:"none", background:"none"}}>
              <li style={{color:home}}>Home</li>
         </NavLink>
          <NavLink className="menu" to={'/about'} style={{color:"black", textDecoration:"none", background:"none"}} >
              <li style={{color:about}}>About us</li>
          </NavLink>
          <NavLink className="menu" to={'/blog'} style={{color:"black", textDecoration:"none", background:"none"}} >
              <li style={{color:blog}}>Blog</li>
          </NavLink>
          <NavLink className="menu" to={'/cart'} style={{color:"black", textDecoration:"none", background:"none"}} >
             <li style={{color:cart}}><BiSolidCart  style={{fontSize:'25px'}}/>
             <div className='Cart_Qty' style={{ background:cart}}>{userCart.length === 0?"...":userCart.items.length}</div>
             </li>
          </NavLink>
          <li className='Burger' ><RiMenu2Line onClick={()=>{
            setMenu(!menu)
          }} className='Menu_Icon'/> </li>
         {
          !token?
          <NavLink to={'/login'} style={{color:"black", textDecoration:"none", background:"none"}} >
             <li style={{color:login}}>Log in</li>
          </NavLink>:
          <li  onMouseOver={()=>{
            setAccPopUp(!accPopUp)
          }}  className='Profile' style={{fontFamily:"cursive", textDecoration:"none"}}>{firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase()}
          </li>
          
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

        {
          menu?
          <div className='Menu_Navs'>
          <div className='Close_Nav'>
            <span  onClick={()=>{
            setMenu(!menu)
          }}>X</span>
          </div>
         <div className='RedExHeader_LogoM'>
        <img src={Logo} alt="" style={{cursor:'pointer'}} onClick={()=>nav('/')}/>
        {
          !token?
          <NavLink to={'/login'} style={{color:"black", textDecoration:"none", background:"none"}} >
             <li style={{color:login}}>Log in</li>
          </NavLink>:
          <li  onMouseOver={()=>{
            setAccPopUp(!accPopUp)
          }}  className='ProfileM' style={{fontFamily:"cursive", textDecoration:"none"}}>{firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase()}
          </li>
          
         }
        </div>
        <ul className='Mobile_Navs'>
         <NavLink className="menuM" to={'/'} style={{color:"black", textDecoration:"none", background:"none"}}>
              <li style={{color:home}}>Home</li>
         </NavLink>
          <NavLink className="menuM" to={'/about'} style={{color:"black", textDecoration:"none", background:"none"}} >
              <li style={{color:about}}>About us</li>
          </NavLink>
          <NavLink className="menuM" to={'/blog'} style={{color:"black", textDecoration:"none", background:"none"}} >
              <li style={{color:blog}}>Blog</li>
          </NavLink>
          <NavLink className="menuM" to={'/cart'} style={{color:"black", textDecoration:"none", background:"none"}} >
             <li style={{color:cart}}><BiSolidCart  style={{fontSize:'25px'}}/>
             {/* <div className='Cart_Qty' style={{ background:cart}}>{userCart.length === 0?"...":userCart.items.length}</div> */}
             </li>
          </NavLink>
         
        </ul>
         </div>:null
        }
     </motion.div>
    {/* } */}
    </>
   
  )
}

export default Header