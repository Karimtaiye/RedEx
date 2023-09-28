import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './Components/Onboarding/Signup/Signup'
import Login from './Components/Onboarding/Login/Login'
import Verification from './Components/Onboarding/Verification/Verification'
import LandingPage from './Components/LandingPage/LandingPage'
import ForgetPassword from './Components/Onboarding/ForgetPassword/ForgetPassword'
import NewPassword from './Components/Onboarding/NewPassword/NewPassword'
import Detail from './Components/Detail/Detail'
import Header from './Components/Header/Header'
import Category from './Components/Category/Category'

function App() {
  return (
    <Router>
      <Header />
       <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/api/verify' element={<Verification />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/newpassword' element={<NewPassword />} />
          <Route path='/details' element={<Detail />} />
          <Route path='/category' element={<Category />} />
       </Routes>
    </Router>
  )
}

export default App