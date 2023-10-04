import React from 'react'
import './Contents.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PersonalDetails from '../PersonalDetails/PersonalDetails'
import Order from '../Order/Order'
import Payment from '../Payment/Payment'
import Address from '../Address/Address'
import Dashhboard from '../Dashhboard/Dashhboard'


function Contents() {
  return (
    <div className='Account_Contents'>
      <div className='AccCont_Wrapper'>

       <Routes>
        <Route path='/' element={<PersonalDetails />} />
        <Route path='/order/:id' element={<Order />} />
        <Route path='/payment/:id' element={<Payment />} />
        <Route path='/address/:id' element={<Address />} />
        <Route path='/dashboard/:id' element={<Dashhboard />} />
       </Routes>

      </div>
    </div>
  )
}

export default Contents