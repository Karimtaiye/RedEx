import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './Components/Onboarding/Signup/Signup'
import Login from './Components/Onboarding/Login/Login'
import Verification from './Components/Onboarding/Verification/Verification'
import LandingPage from './Components/LandingPage/LandingPage'

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/email-verification' element={<Verification />} />
       </Routes>
    </Router>
  )
}

export default App