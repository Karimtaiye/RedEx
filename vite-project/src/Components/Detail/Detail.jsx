import React, { useEffect, useState } from 'react'
import './Detail.css'
import './DetailRes.css'
import Header from '../Header/Header'
import MainPackage from './assets/MainPackage.png'
import Min1 from './assets/Min1.png'
import Min2 from './assets/Min2.png'
import Min3 from './assets/Min3.png'
import { BiLeftArrowAlt } from 'react-icons/bi'
import item1 from '../LandingPage/assets/item1.png'
import item2 from '../LandingPage/assets/item2.png'
import item3 from '../LandingPage/assets/item3.png'
import item4 from '../LandingPage/assets/item4.png'
import item5 from '../LandingPage/assets/item5.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams()
  const [details, setDetails] = useState(true)
  const [reviews, setReview] = useState(false)
  const [allProducts, setOneProducts] = useState([])
  const [related, setRelated] = useState(false)
  const [quote, setQuote] = useState(false)
  const [addImg, setAddImg] = useState(false)
  const [selImg, setSelImg] = useState("")
  const [main, setMain] = useState(MainPackage)
  const [nextNav, setNextNav] = useState(0)

  const images = [Min1, Min2, Min3, Min1, Min3, Min2, Min3, Min2]


  const PreviewImg = (e) => {
    const File = e.target.files[0]
    setSelImg(URL.createObjectURL(File))
   }
    const url = `https://redex-webapp-v1.onrender.com/api/product/${id}`
    const getOneProducts = () => {
      axios.get(url)
      .then(res=>{
        console.log(res)
        setOneProducts(res.data.data)
      })
      .catch(err=>{
        console.log(err);
      })
    }
    useEffect(()=>{
      getOneProducts()
      // window.location.reload()
    },[])
    console.log(nextNav)      
    
    const itemNav = ["CheckOut Details", "Related Products", "Products Reviews"]

    useEffect(()=>{
      if(details){
        setRelated(false)
        setReview(false)
      }
      else if(related){
        setDetails(false)
        setReview(false)
      }
        else if(reviews){
          setDetails(false)
          setRelated(false)
        }

    },[details, related, reviews])
  return (
    <>
        <Header />
        <div className='RedEx_DetailPage'>
          <div className='DetailPage_Wrapper'>
            <section className='DetailPage_Item'>
              <div className='DetailItem_Actions'>
                <div className='Detail_ItemImg'>
                <div className='Item_MainImg'>
                    <img src={main} alt="" />
                  </div>
                  <div className='Item_SubImg'>
                  {
                    images.map((image, id)=>(
                  <div key={id} className='Sub_Img' onClick={()=>{
                    setMain(image)
                  }}>
                    <img src={image} alt="" />
                  </div>))
                  }
                    {/* <div className='Sub_Img'>
                      <img src={Min2} alt="" />
                    </div>
                    <div className='Sub_Img'>
                      <img src={Min3} alt="" />
                    </div>
                    <div className='Sub_Img'>
                      <img src={Min1} alt="" />
                    </div>
                    <div className='Sub_Img'>
                      <img src={Min2} alt="" />
                    </div>
                    <div className='Sub_Img'>
                      <img src={Min3} alt="" />
                    </div>
                    <div className='Sub_Img'>
                      <img src={Min1} alt="" />
                    </div> */}
                  </div>
                </div>

                <div className='Detail_ItemDet'>
                  <div className='Item_NameDes'>
                    <h1>Premium Package</h1>
                    <span>Premium Package descriptions and lorem ipsum </span>
                  </div>
                  <div className='Item_InputInfo'>
                    <div className='Item_InfoSel'>
                      <h4>Quantity</h4>
                      <select>
                        <option value="1">1</option>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                      </select>
                    </div>
                    <div className='Item_InfoSel'>
                      <h4>Size</h4>
                      <select>
                        <option value="Extra Large">Extra Large</option>
                        <option value="Large">Large</option>
                        <option value="Small">Small</option>
                      </select>
                    </div>
                    <div className='Item_InfoSel'>
                      <h4>Type</h4>
                      <select>
                        <option value="Type A">Type A</option>
                        <option value="Type B">Type B</option>
                        <option value="Type C">Type C</option>
                      </select>
                    </div>
                  </div>
                  <div className='Item_Action'>
                    <button className='ATC_Btn'>Add to Cart</button>
                    <button className='PTP_Btn'>Proceed to payment</button>
                  </div>
                </div>
              </div>
              <div className='SubmitDesign_Act'>
                <button className='SubmitDesign_Btn' onClick={()=>{
                  setQuote(!quote)
                }}>Submit Design</button>
              </div>
            </section>

            <section className='RedEx_ItemVideo'>
                <video src="./ "></video>
            </section>

            <section className='ItemDetails_Others'>
              <ul className='ItemDetails_Nav'>
                <li className={details?"active":null}  onClick={()=>{
                  setDetails(true)
                  setReview(false)
                  setRelated(false)
                }}>CheckOut Details</li>
                  <li className={related?"active":null} onClick={()=>{
                    setDetails(false)
                    setReview(false)
                    setRelated(true)
                  }}>Related Products</li>
                <li className={reviews?"active":null} onClick={()=>{
                  setDetails(false)
                  setReview(true)
                  setRelated(false)
                }}>Product Reviews</li>
              </ul>

              <ul className='ItemDetails_NavMobile'>
                <BiLeftArrowAlt onClick={()=>{
                  nextNav === 0?
                  setNextNav(0):
                  setNextNav(prev=>prev -= 1  )
                }} className='Left_Arrow'/>
                    
                 <>
                   {
                    nextNav === 0?
                    <li className="active">CheckOut Details</li>:
                    nextNav === 1?
                    <li className="active">Related Products</li>:
                    nextNav === 2?
                    <li className="active">Product Reviews</li>:null
                   }
                </>
               
                <BiLeftArrowAlt onClick={()=>{
                  nextNav === 2?
                  setNextNav(2):
                  setNextNav(prev=>prev += 1)
                }} className='Right_Arrow'/>
              </ul>

                {
                  nextNav === 0?
                  <div className='CheckOut_DetailsMobile'>
                  <div className='CheckOut_Img'>
                    <img src={MainPackage} alt="" />
                  </div>
                  <div className='CheckOutDesc'>
                    <span>Products Name</span>
                    <span>Products Description</span>
                    <span>Products Quantity</span>
                    <span>Products Size</span>
                    <span>Products Type</span>
                    <span>NGN 50,000 </span>
                  </div>
                </div>:
                nextNav === 1?
                <div className='Related Categories_Products'>
                <div className='Demanding_Products'>
                  <img src={item1} alt="" />
                  <span>Customized Takeout Full Package</span>
                </div>
                <div className='Demanding_Products'>
                <img src={item2} alt="" />
                  <span>Overchoke carton stuff chsi</span>
                </div>

                <div className='Demanding_Products'>
              <img src={item3} alt="" />
                <span>Choke multi-package stuffs</span>
              </div>
              <div className='Demanding_Products'>
              <img src={item4} alt="" />
                <span>Customized Takeout Full Package</span>
              </div>
              <div className='Demanding_Products'>
              <img src={item5} alt="" />
                <span>Choke Bag-package stuffs</span>
              </div>
              <div className='Demanding_Products'>
              <img src={item1} alt="" />
                <span>Customized Takeout Full Package</span>
              </div>
                </div>:null
                }

              {
                details
                ?<div className='CheckOut_Details'>
                <div className='CheckOut_Img'>
                  <img src={MainPackage} alt="" />
                </div>
                <div className='CheckOutDesc'>
                  <span>Products Name</span>
                  <span>Products Description</span>
                  <span>Products Quantity</span>
                  <span>Products Size</span>
                  <span>Products Type</span>
                  <span>NGN 50,000 </span>
                </div>
              </div>
              
              :related?
              <div className='Related Categories_Products'>
              <div className='Demanding_Products'>
                <img src={item1} alt="" />
                <span>Customized Takeout Full Package</span>
              </div>
              <div className='Demanding_Products'>
              <img src={item2} alt="" />
                <span>Overchoke carton stuff chsi</span>
              </div>
              <div className='Demanding_Products'>
              <img src={item3} alt="" />
                <span>Choke multi-package stuffs</span>
              </div>
              <div className='Demanding_Products'>
              <img src={item4} alt="" />
                <span>Customized Takeout Full Package</span>
              </div>
              <div className='Demanding_Products'>
              <img src={item5} alt="" />
                <span>Choke Bag-package stuffs</span>
              </div>
              <div className='Demanding_Products'>
              <img src={item1} alt="" />
                <span>Customized Takeout Full Package</span>
              </div>
            </div>:null
              }
              
            </section>

          </div>
        </div>
         {
            quote?
            <div className='Quote_PopUpDiv'>
            <div className='Quote_PopUp'>\
            <div className='Quote_Header'>
              <h4>Quotes</h4>
              <h3 onClick={()=>{
                setQuote(!quote)
              }}>X</h3>
            </div>
            <div className='Quote_Img'>
              <div className='Quote_PrevImg'>
                <img src={selImg} alt="" />
              </div>
              <div className='Quote_SeleImg'>
                <input type="file" id='SelImg' style={{display:"none"}} onChange={PreviewImg}/>
                <label htmlFor="SelImg" className='Select_Btn' onClick={()=>setAddImg(true)}>Select image</label>
              </div>
            </div>
            <div className='Quote_Txt'>
              <h4>Enter texts</h4>
              <textarea cols="30" rows="10" t></textarea>
            </div>
            <div className='Quote_Submit'>
              <button className='Quote_Btn'>Submit</button>
            </div>

            </div>
          </div>:null
         }
    </>
  )
}

export default Detail