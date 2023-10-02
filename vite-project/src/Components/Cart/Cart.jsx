import React, { useState, useEffect } from 'react'
import './Cart.css'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

function Cart() {
    const nav = useNavigate()
    const cartpage = "red"

    const [myCart, setMyCart] = useState([])
    const userRes = useSelector(state=>state.redexstore.userRes)
    const user = useSelector(state=>state.redexstore.user)
    const token = user.token
    const Dispatch = useDispatch()
    const categorypage = "red"
    console.log(token);
    const [userCart, setuserCart] = useState([])
    const [RFC, setRFC] = useState(false)
    const [userCartItem, setuserCartItem] = useState([])

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
          setuserCartItem(res.data.data.items)
        })
        .catch(err=>{
          console.log(err);
        })
      }
    
      useEffect(()=>{
        getUserCart()
      },[])
      console.log(userCart);
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
                        
                           {
                           userCart.length === 0?
                           <div className='CartItem_Container'>
                             <div className='Cart_Item'>
                                <div className='Item_Img'>
                                    <div className=''>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div className='Item_Name'>
                                    <h4>.... .....</h4>
                                </div>
                                <div className='Item_Price'>
                                    <h4>NGN-- ---</h4>
                                </div>
                                <div className='Item_Qty'>
                                    <h4>.....</h4>
                                </div>
                                <div className='Item_Total'>
                                    <h4>NGN--- ---</h4>
                                </div>
                                <RiDeleteBin5Fill  onClick={()=>{
                                    axios.put(`https://redex-webapp-v1.onrender.com/api/remove/${produucts._id}`,null, config)
                                    .then(res=>{                             
                                    console.log(res)
                                    setRFC(true)
                                    
                                    }).catch(err=>{
                                        console.log(err);
                                    })
                              }} className='DeleteCart_Icon'/>
                            </div>
                           </div>
                           : 
                           userCartItem.map((cart)=>(
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
                                        <h4>{cart.product.productName}</h4>
                                    </div>
                                    <div className='Item_Price'>
                                        <h4>NGN{cart.product.productPrice}</h4>
                                    </div>
                                    <div className='Item_Qty'>
                                        <h4>{cart.product.productQuantity}</h4>
                                    </div>
                                    <div className='Item_Total'>
                                        <h4>NGN{cart.product.productPrice * cart.product.productQuantity}</h4>
                                    </div>
                                    <RiDeleteBin5Fill  className='DeleteCart_Icon'/>
                                </div>
                               </div>
                        ))
                           }
                           <div className='Clear_CartFun'><h4>Clear cart</h4></div>
                    </div>

                </div>
                <div className='CartPage_Checkout'>
                    <div className='CheckOut_Text'>
                        <h2>Checkout</h2>
                    </div>
                    <div className='CheckOut_Prices'>
                        <div className='Product_No'>
                            <span>No of Products</span>
                            <span>{userCartItem.length}</span>
                        </div>
                        <div className='Total_Qty'>
                            <span>Total Quantity</span>
                            <span>{userCart.totalQuantity}</span>
                        </div>
                    </div>
                    <div className='CheckOut_Total'>
                        <span>Total Price</span>
                        <h2>NGN{userCart.totalPrice}</h2>
                    </div>
                    <button className='CheckOut_Btn'>Proceed to Details</button>
                </div>
            </div>
        </div>

    </>
  )
}

export default Cart