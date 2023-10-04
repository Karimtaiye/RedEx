import React from 'react'
import './Order.css'
import logo from '../assets/logo.png'
import { LiaGreaterThanSolid } from 'react-icons/lia'
import { IoSearch } from 'react-icons/io5'

function Order() {
  return (
    <div className='My_Order'>
        <section className='Order_Header'>
        <h1>My Order</h1>
        </section>
        <section className='MyOrder_Update'>
            <div className='Search_Order'>
                <IoSearch className='Order_SearchIcon'/>
                <input type="text"  className='Search_OrderInput' placeholder='Search'/>
            </div>
            <div className='Order_BoxContainer'>
            <div className='Order_Box'>
                <div className='Order_Name'>
                    <div className='Desc_Part'>
                    <img src={logo} alt="" />
                    <h4>Plain Package</h4>
                    <h4 className='Order_Date'>02-09</h4>
                    </div>
                    <h4>NGN40,000</h4>
                </div>
                <div className='Order_Stat'>
                    <h5>Paid & delivered</h5>
                </div>
                <div className='Order_Add'>
                    <span>24 Carat Hotel, Festac, Lagos State</span>
                    <LiaGreaterThanSolid className='Order_GreaThan'/>
                </div>
                <div className='Order_Img'>
                    <span>4 Products</span>
                    <div className='Product_Img'>
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div className='Order_Box'>
                <div className='Order_Name'>
                    <div className='Desc_Part'>
                    <img src={logo} alt="" />
                    <h4>Plain Package</h4>
                    <h4 className='Order_Date'>02-09</h4>
                    </div>
                    <h4>NGN40,000</h4>
                </div>
                <div className='Order_Stat'>
                    <h5>Paid & delivered</h5>
                </div>
                <div className='Order_Add'>
                    <span>24 Carat Hotel, Festac, Lagos State</span>
                    <LiaGreaterThanSolid className='Order_GreaThan'/>
                </div>
                <div className='Order_Img'>
                    <span>4 Products</span>
                    <div className='Product_Img'>
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div className='Order_Box'>
                <div className='Order_Name'>
                    <div className='Desc_Part'>
                    <img src={logo} alt="" />
                    <h4>Plain Package</h4>
                    <h4 className='Order_Date'>02-09</h4>
                    </div>
                    <h4>NGN40,000</h4>
                </div>
                <div className='Order_Stat'>
                    <h5>Paid & delivered</h5>
                </div>
                <div className='Order_Add'>
                    <span>24 Carat Hotel, Festac, Lagos State</span>
                    <LiaGreaterThanSolid className='Order_GreaThan'/>
                </div>
                <div className='Order_Img'>
                    <span>4 Products</span>
                    <div className='Product_Img'>
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div className='Order_Box'>
                <div className='Order_Name'>
                    <div className='Desc_Part'>
                    <img src={logo} alt="" />
                    <h4>Plain Package</h4>
                    <h4 className='Order_Date'>02-09</h4>
                    </div>
                    <h4>NGN40,000</h4>
                </div>
                <div className='Order_Stat'>
                    <h5>Paid & delivered</h5>
                </div>
                <div className='Order_Add'>
                    <span>24 Carat Hotel, Festac, Lagos State</span>
                    <LiaGreaterThanSolid className='Order_GreaThan'/>
                </div>
                <div className='Order_Img'>
                    <span>4 Products</span>
                    <div className='Product_Img'>
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div className='Order_Box'>
                <div className='Order_Name'>
                    <div className='Desc_Part'>
                    <img src={logo} alt="" />
                    <h4>Plain Package</h4>
                    <h4 className='Order_Date'>02-09</h4>
                    </div>
                    <h4>NGN40,000</h4>
                </div>
                <div className='Order_Stat'>
                    <h5>Paid & delivered</h5>
                </div>
                <div className='Order_Add'>
                    <span>24 Carat Hotel, Festac, Lagos State</span>
                    <LiaGreaterThanSolid className='Order_GreaThan'/>
                </div>
                <div className='Order_Img'>
                    <span>4 Products</span>
                    <div className='Product_Img'>
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div className='Order_Box'>
                <div className='Order_Name'>
                    <div className='Desc_Part'>
                    <img src={logo} alt="" />
                    <h4>Plain Package</h4>
                    <h4 className='Order_Date'>02-09</h4>
                    </div>
                    <h4>NGN40,000</h4>
                </div>
                <div className='Order_Stat'>
                    <h5>Paid & delivered</h5>
                </div>
                <div className='Order_Add'>
                    <span>24 Carat Hotel, Festac, Lagos State</span>
                    <LiaGreaterThanSolid className='Order_GreaThan'/>
                </div>
                <div className='Order_Img'>
                    <span>4 Products</span>
                    <div className='Product_Img'>
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Order