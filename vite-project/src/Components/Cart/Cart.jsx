import React from 'react'
import './Cart.css'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin5Fill } from 'react-icons/ri'

function Cart() {
    const nav = useNavigate()
    const cartpage = "red"
  return (
    <>
        <Header cart={cartpage}/>
        <div className='RedExCart_Page'>
            <div className='CartPage_Route'>
                <span>Home /<span style={{color:"red"}}>Cart</span></span>
            </div>
            <div className='CartPage_BoxDiv'>
                <div className='CartPage_Items'>
                    <div className='CartItems_Wrapper'>
                        <div className='CartItems_Header'>
                            <ul>
                                <li>P <hr /> image</li>
                                <li>P <hr />Name</li>
                                <li>P <hr />Price</li>
                                <li>P <hr />Quantity</li>
                                <li>P <hr />Total</li>
                            </ul>
                        </div>
                           <div className='CartItem_Container' onClick={()=>{
                            nav('/api/product/:id')
                           }}>
                             <div className='Cart_Item'>
                                <div className='Item_Img'>
                                    <div className=''>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div className='Item_Name'>
                                    <h4>Plain Package</h4>
                                </div>
                                <div className='Item_Price'>
                                    <h4>NGN4, 000</h4>
                                </div>
                                <div className='Item_Qty'>
                                    <h4>200</h4>
                                </div>
                                <div className='Item_Total'>
                                    <h4>NGN800, 000</h4>
                                </div>
                                <RiDeleteBin5Fill  className='DeleteCart_Icon'/>
                            </div>
                           </div>
                    </div>

                </div>
                <div className='CartPage_Checkout'>
                    <div className='CheckOut_Text'>
                        <h2>Checkout</h2>
                    </div>
                    <div className='CheckOut_Prices'>
                        <div className='Product_No'>
                            <span>No of Products</span>
                            <span>24</span>
                        </div>
                        <div className='Total_Qty'>
                            <span>Total Quantity</span>
                            <span>100</span>
                        </div>
                    </div>
                    <div className='CheckOut_Total'>
                        <span>Total Price</span>
                        <h2>NGN4,000,000</h2>
                    </div>
                    <button className='CheckOut_Btn'>Proceed to Details</button>
                </div>
            </div>
        </div>

    </>
  )
}

export default Cart