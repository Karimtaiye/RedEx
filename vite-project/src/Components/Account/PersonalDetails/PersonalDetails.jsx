import React from 'react'
import './PersonalDetails.css'
import { BiSolidEdit } from 'react-icons/bi'
import { BiLeftArrowAlt } from 'react-icons/bi'

function PersonalDetails() {


  return (
    <div className='Personal_Details'>
      <div className="AccCont_Header" style={{position:"relative"}}>
      <BiLeftArrowAlt className='Back_ArrowMobile' style={{position:"absolute", left:"6%", top:"40%"}} onClick={()=>nav('/')}/>
        <h1>Personal details</h1>
      </div>
      <div className='PerDetails_Update'>

        <div className='PerDetailsBox'>
        <span>First Name</span>
        <div className='Edit_Details'>
          <input className='Details_Input' value={"Kareem"} type="text" />
          <BiSolidEdit className='Edit_Icon'/>
        </div>
        <div className='DetailsLine'></div>
        </div>

        <div className='PerDetailsBox'>
        <span>Last Name</span>
        <div className='Edit_Details'>
          <input className='Details_Input' value={"Taiye"} type="text" />
          <BiSolidEdit className='Edit_Icon'/>
        </div>
        <div className='DetailsLine'></div>
        </div>

        <div className='PerDetailsBox'>
        <span>Gender</span>
        <div className='Edit_Details'>
          <input className='Details_Input' value={"Gender"} type="text" />
          <BiSolidEdit className='Edit_Icon'/>
        </div>
        <div className='DetailsLine'></div>
        </div>

        <div className='PerDetailsBox'>
        <span>Mobile</span>
        <div className='Edit_Details'>
          <input className='Details_Input' value={"+234 8106490119"} type="text" />
          <BiSolidEdit className='Edit_Icon'/>
        </div>
        <div className='DetailsLine'></div>
        </div>

        <div className='PerDetailsBox'>
        <span>Email</span>
        <div className='Edit_Details'>
          <input className='Details_Input' value={"olayinkahassan117@gmail.com"} type="text" />
          <BiSolidEdit className='Edit_Icon'/>
        </div>
        <div className='DetailsLine'></div>
        </div>

        <div className='SaveDet_Div'>
          <button className='SaveDet_Btn'>Save changes</button>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetails