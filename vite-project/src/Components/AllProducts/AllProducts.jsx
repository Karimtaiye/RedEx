import React from 'react'
import './AllProducts.css'
import './AllProductsRes.css'
import Titem1 from '../LandingPage/assets/Titem1.png'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'

function AllProducts() {
  const nav = useNavigate()
  const products = [0,1,3,4,5,6,7,8,9,9,8]
  const homepage = "red"

  return (
    <>
      <Header home={homepage} />
      <div className='All_Products'>
        <div className='All_ProductRoute'>
          <span  onClick={()=>nav('/')} style={{cursor:"pointer"}}>Home</span>/<span style={{color:"red"}}>All Products</span>
        </div>
        <div className='All_ProductHeader'>
          <span>All Products</span>
        </div>
        <div className="AllProducts_Div">
          {
            products.map((product)=>(
              <div className='Products_Card'>
            <div className='Image_Part'>
              <img src={Titem1} alt="" />
            </div>
            <div className='Description_Part'>
              <div className='Desc_Name-Price'>
                <div className='Name_Price'>
                 <span> Product Generic</span>
                  <p>Plain Package</p>
                </div>
                <span>NGN5,000</span>
              </div>
              <div className='Desc_ATC'>
                <div className='Stars'>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                </div>
                <button className="Product_ATC">Add To Cart</button>
              </div>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default AllProducts