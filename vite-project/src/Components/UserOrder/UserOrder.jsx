import React, { useState } from "react";
import "./UserOrder.css";
import { SpinnerCircularSplit } from "spinners-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

function UserOrder() {
  const userRes = useSelector((state) => state.redexstore.userRes);
  const user = useSelector((state) => state.redexstore.user);
  const [loading, setLoading] = useState(false);
  console.log(userRes);

  
  const token = user.token
  
  const config = {
    headers:{
      Authorization:`Bearer ${token}`
    }
  }


  const createUserOrder = () => {
    setLoading(true);
    axios
      .post("https://redex-webapp-v1.onrender.com/api/order", null, config)
      .then((res) => {
        console.log(res);
         setLoading(false);
        Swal.fire({
          title: res.data.message,
          text: "Check your mail for order details",
          icon: "success",
          confirmButtonText: "Close",
        });
      })
      .catch((err) => {
        console.log(err);
         setLoading(false);
        if(err.message === "Network Error"){
            Swal.fire({
              title: "Check your internet connection",
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          }
          else{
            Swal.fire({
                title: "Cannot create order",
                text: err.response.data.message,
                icon: "error",
                confirmButtonText: "Close",
              });
          }
      
      });
  };

  
  const paymentForTicket = () => {
    setLoading(true);
    const refVal = "Creativents" + Math.random() * 1000;
    window.Korapay.initialize({
      key: "pk_test_1QYXY85UpKezdtEXEGbhpnTxRx5ef2aQ4hsA46g7",
      reference: `${refVal}`,
      amount: 5000,
      currency: "NGN",
      customer: {
        name: "user",
        email: "user",
      },
      notification_url: "https://example.com/webhook",
      onClose: function () {},
      onSuccess: function () {
      },
      onFailed: function () {
        setLoading(false);
      },
    });
  };

  return (
    <div className="User_OrderPage">
      <div className="Order_Header"></div>
      <div className="Order_TextHeader">
        <h1>You've come a long way</h1>
      </div>

      <div className="OrderInfo_Text">
        <div className="Order_Step">1</div>
        <h4>Personal information</h4>
      </div>

      <div className="Order_Informations">
        <div className="Info_Wrapper">
          <div className="UserOrder_Details">
            <div className="User_Names">
              <div>
                <span>First name</span>
                <input type="text" value={userRes.firstname} />
              </div>
              <div>
                <span>Last name</span>
                <input type="text" value={userRes.lastname} />
              </div>
            </div>
            <div className="User_Email">
              <div>
                <span>Email</span>
              <input type="text" value="olayinkahassan117@gmail.com" />
              </div>
            </div>
            <div className="User_StateComp">
            <div>
                <span>State</span>
                <input type="text" value="Lagos State" />
              </div>
              <div>
                <span>Company</span>
                <input type="text" value="Onyenze Limited" />
              </div>
            </div>
            <div className="User_Names">
              <div>
              <span>Phone Number</span>
              <input type="text" value={`+234${ userRes.phoneNumber}`} />
              </div>
            </div>
          </div>
          <div className="UserOrder_CheckOut">
            <div className="CheckOut_Text">
              <h1>Your Order</h1>
              <div className="Order_Sum">
                <h4>Main Packaging</h4>
                <h4>NGN40,000</h4>
              </div>
              <div className="Order_Sum">
                <h4>Main Packaging</h4>
                <h4>NGN40,000</h4>
              </div>
              <div className="Order_Sum">
                <h4>Main Packaging</h4>
                <h4>NGN40,000</h4>
              </div>
            </div>
            <div className="Total_Pur">
              <div className="Order_Sum">
                <h4>Total Purchase</h4>
                <h4>NGN120,000</h4>
              </div>
              <div className="Order_Sum">
                <h4>Estimated Task</h4>
                <h4>NGN 0</h4>
              </div>
            </div>
            <div className="Total_Price">
              <h3>Total Price</h3>
              <h5>NGN120,000</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="Proceed_PayDiv">
        <button
          className="Proceed_Btn"
          style={{ background: loading ? "#08022f93" : null }}
          disabled={loading}
          onClick={createUserOrder}
        >
          {loading ? (
            <SpinnerCircularSplit
              style={{ animation: "slideInUp", animationDuration: "0.5s" }}
              size={30}
              thickness={150}
              speed={100}
              color="#ffffff"
              secondaryColor="rgba(0, 0, 0, 0.44)"
            />
          ) : (
            "Proceed to payment"
          )}
        </button>
      </div>
    </div>
  );
}

export default UserOrder;
