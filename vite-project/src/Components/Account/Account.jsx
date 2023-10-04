import React from 'react'
import './Account.css'
import './AccountRes.css'
import Nav from './Navigations/Nav'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contents from './Navigations/Contents'

function Account() {
  return (
    <div className='Account_Page'>

      <div className='AboutPage_Wrapper'>
        <Nav />
        <div className='Acc_Line'></div>
        <Contents />
      </div>
    </div>
  )
}

export default Account