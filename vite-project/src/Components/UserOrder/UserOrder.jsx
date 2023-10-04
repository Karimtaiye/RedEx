import React, {useState} from 'react'
import './UserOrder.css'
import { SpinnerCircularSplit } from 'spinners-react'

function UserOrder() {
const [loading, setLoading] = useState(false)

    const paymentForTicket = () => {
        setLoading(true)
        const refVal = "Creativents"+ Math.random() * 1000;
        window.Korapay.initialize({
          key: "pk_test_1QYXY85UpKezdtEXEGbhpnTxRx5ef2aQ4hsA46g7",
          reference: `${refVal}`,
          amount: 5000, 
          currency: "NGN",
          customer: {
            // name: user.name,
            name: "user",
            email: "user"
          },
          notification_url: "https://example.com/webhook",
          onClose: function () { 
          },
           onSuccess: function () { 
            console.log("o");            // navigate("/")
          }, 
          onFailed: function () { 
            setLoading(false)
          },
        });
    
    
    }



  return (
    <div className='User_OrderPage'>
        <div className='Order_Header'></div>
        <div className='Order_TextHeader'>
            <h1>You've come a long way</h1>
        </div>

        <div className='OrderInfo_Text'>
            <div className='Order_Step'>1</div>
            <h4>Personal information</h4>
        </div>

        <div className='Order_Informations'>
            <div className='Info_Wrapper'>
                <div className='UserOrder_Details'>
                    <div className='User_Names'>
                         <input type="text" value="Kareem"/>
                         <input type="text" value="Taiye"/>
                    </div>
                    <div className='User_Email'>
                        <input type="text" value="olayinkahassan117@gmail.com"/>
                    </div>
                    <div className='User_StateComp'>
                         <input type="text" value="Lagos state"/>
                         <input type="text" value="Onyenze Limited"/>
                    </div>
                    <div className='User_Phone'>
                         <input type="text" value="+234 8106738002"/>
                    </div>
                </div>
                <div className='UserOrder_CheckOut'>
                    <div className='CheckOut_Text'>
                        <h1>Your Order</h1>
                        <div className='Order_Sum'>
                            <h4>Main Packaging</h4>
                            <h4>NGN40,000</h4>
                        </div>
                        <div className='Order_Sum'>
                            <h4>Main Packaging</h4>
                            <h4>NGN40,000</h4>
                        </div>
                        <div className='Order_Sum'>
                            <h4>Main Packaging</h4>
                            <h4>NGN40,000</h4>
                        </div>
                    </div>
                    <div className='Total_Pur'>
                        <div className='Order_Sum'>
                            <h4>Total Purchase</h4>
                            <h4>NGN120,000</h4>
                        </div>
                        <div className='Order_Sum'>
                            <h4>Estimated Task</h4>
                            <h4>NGN 0</h4>
                        </div>
                    </div>
                    <div className='Total_Price'>
                            <h3>Total Price</h3>
                            <h5>NGN120,000</h5>
                    </div>
                </div>
            </div>
        </div>
            <div className='Proceed_PayDiv'>
               <button className='Proceed_Btn' style={{background:loading?"#08022f93":null}} disabled={loading} onClick={paymentForTicket}>{
            loading?<SpinnerCircularSplit style={{animation:"slideInUp",animationDuration:"0.5s"}} size={30} thickness={150} speed={100} color="#ffffff" secondaryColor="rgba(0, 0, 0, 0.44)" />:
            "Proceed to payment"}</button>
            </div>
    </div>
  )
}

export default UserOrder