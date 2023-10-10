import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'

import Signup from './Components//Onboarding/Signup/Signup'
import Login from './Components/Onboarding/Login/Login'
import Verification from './Components/Onboarding/Verification/Verification'
import LandingPage from './Components/LandingPage/LandingPage'
import ForgetPassword from './Components/Onboarding/ForgetPassword/ForgetPassword'
import NewPassword from './Components/Onboarding/NewPassword/NewPassword'
import Detail from './Components/Detail/Detail'
import Header from './Components/Header/Header'
import Category from './Components/Category/Category'
import Cart from './Components/Cart/Cart'
import Blog from './Components/Blog/Blog'
import About from './Components/About/About'
import LogOut from './Components/Onboarding/LogOut/LogOut'
import UpdateCart from './Components/UpdateCart/UpdateCart'
import Account from './Components/Account/Account'
import AllProducts from './Components/AllProducts/AllProducts'
import UserOrder from './Components/UserOrder/UserOrder'
import { AnimatePresence } from "framer-motion"


function Framer() {
  const location = useLocation()

  return (
    <AnimatePresence>
       <Routes location={location} key={location.pathname} >
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/api/verify' element={<Verification />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/api/changepassword/:id/:token' element={<NewPassword />} />
        <Route path='/api/product/:id' element={<Detail />} />
        <Route path='/category' element={<Category />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/update/:id' element={<UpdateCart />} />
        <Route path='/about' element={<About />} />
        <Route path='/account/*' element={<Account />} />
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/userorder' element={<UserOrder />} />
        <Route path='/api/logout/:id' element={<LogOut />} />
       </Routes>
    </AnimatePresence>
  )
}

export default Framer