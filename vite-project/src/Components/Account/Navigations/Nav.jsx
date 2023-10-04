import React, { useState } from 'react'
import './Nav.css'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { LiaGreaterThanSolid } from 'react-icons/lia'
import { MdOutlineBorderColor, MdPayment, MdOutlineDashboard } from 'react-icons/md'
import { TfiLocationPin } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const nav = useNavigate()
  const [personalDetails, setPersonalDetails] = useState(true)
  const [order, setorder] = useState(false)
  const [payment, setpayment] = useState(false)
  const [address, setaddress] = useState(false)
  const [dashboard, setdashboard] = useState(false)

  return (
    <div className='AccountNav_Routes'>
      <section className='AccNav_Header'>
        <BiLeftArrowAlt className='Back_Arrow'  onClick={()=>nav('/')}/>
        <h1>My account</h1>
      </section>

      <section className='AccNav_Navigations'>
        <div className='Account_Details'>
          <div onClick={()=>{
            nav('./')
            setPersonalDetails(true)
            setorder(false)
            setpayment(false)
            setaddress(false)
            setdashboard(false)
          }} style={{backgroundColor:personalDetails?"rgba(255, 0, 0, 0.4)":null}} className='AccDetails_Navs'>
            <div className='Icon_Circle'>
              <h4>KT</h4>
            </div>
            <div className='Nav_Settings'>
              <div>
              <h1>Kareem Taiye</h1>
              <h4>Personal details</h4>
              </div>

             <div className='Grea_ThanDiv'>
             < LiaGreaterThanSolid className='Nav_GreaThan'/>
             </div>
            </div>
          </div>
          <div className='AccNav_Lines'></div>
        </div>

        <div className='Account_Details'>
          
          <div onClick={()=>{
            nav('./order/:id')
            setPersonalDetails(false)
            setorder(true)
            setpayment(false)
            setaddress(false)
            setdashboard(false)
          }} style={{backgroundColor:order?"rgba(255, 0, 0, 0.4)":null}} className='AccDetails_Navs'>
            <div className='Icon_Circle'>
              <MdOutlineBorderColor />
            </div>
            <div className='Nav_Settings'>
              <div>
              <h1>My Order</h1>
              <h4>Track & manage order</h4>
              </div>

             <div className='Grea_ThanDiv'>
             < LiaGreaterThanSolid className='Nav_GreaThan'/>
             </div>
            </div>

          </div>
          <div className='AccNav_Lines'></div>
        </div>

        <div className='Account_Details'>
          
          <div onClick={()=>{
            nav('./payment/:id')
            setPersonalDetails(false)
            setorder(false)
            setpayment(true)
            setaddress(false)
            setdashboard(false)
          }} style={{backgroundColor:payment?"rgba(255, 0, 0, 0.4)":null}} className='AccDetails_Navs'>
            <div className='Icon_Circle'>
              <MdPayment />
            </div>
            <div className='Nav_Settings'>
              <div>
              <h1>Payments</h1>
              <h4>Your payments details</h4>
              </div>

             <div className='Grea_ThanDiv'>
             < LiaGreaterThanSolid className='Nav_GreaThan'/>
             </div>
            </div>

          </div>
          <div className='AccNav_Lines'></div>
        </div>

        <div className='Account_Details'>
          
          <div onClick={()=>{
            nav('./address/:id')
            setPersonalDetails(false)
            setorder(false)
            setpayment(false)
            setaddress(true)
            setdashboard(false)
          }} style={{backgroundColor:address?"rgba(255, 0, 0, 0.4)":null}} className='AccDetails_Navs'>
            <div className='Icon_Circle'>
              <TfiLocationPin />
            </div>
            <div className='Nav_Settings'>
              <div>
              <h1>Address</h1>
              <h4>Edit & add new address</h4>
              </div>

             <div className='Grea_ThanDiv'>
             < LiaGreaterThanSolid className='Nav_GreaThan'/>
             </div>
            </div>

          </div>
          <div className='AccNav_Lines'></div>
        </div>

        <div className='Account_Details'>
          
          <div onClick={()=>{
            nav('./dashboard/:id')
            setPersonalDetails(false)
            setorder(false)
            setpayment(false)
            setaddress(false)
            setdashboard(true)
          }} style={{backgroundColor:dashboard?"rgba(255, 0, 0, 0.4)":null}} className='AccDetails_Navs'>
            <div className='Icon_Circle'>
              <MdOutlineDashboard />
            </div>
            <div className='Nav_Settings'>
              <div>
              <h1>My Dashboard</h1>
              <h4>View your cart and wishlists </h4>
              </div>

             <div className='Grea_ThanDiv'>
             < LiaGreaterThanSolid className='Nav_GreaThan'/>
             </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Nav