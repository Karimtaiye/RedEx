import React, { useState } from 'react'
import './LandingPage.css'
import './LandingPageRes.css'

import image from '../LandingPage/assets/DesImg.png'
import item1 from '../LandingPage/assets/item1.png'
import item2 from '../LandingPage/assets/item2.png'
import item3 from '../LandingPage/assets/item3.png'
import item4 from '../LandingPage/assets/item4.png'
import item5 from '../LandingPage/assets/item5.png'
import Service6 from '../LandingPage/assets/Service6.png'
import Service5 from '../LandingPage/assets/Service5.png'
import Service4 from '../LandingPage/assets/Service4.png'
import Service3 from '../LandingPage/assets/Service3.png'
import Service2 from '../LandingPage/assets/Service2.png'
import Service1 from '../LandingPage/assets/Service1.png'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const [ans, setAns] = useState({type:"first", drop:false})
  const nav = useNavigate()
  
  return (
    <div className='Landing_page'>
      <div className='LandingPage_Wrapper'>

        
        <section className='RedExDisplay_Details'>
          <div className='RedExDisplay_Carousel'>
            <div className='RedExDisplay_Image'>
              <img src={image} alt="" />
            </div>
            <div className='RedExDisplay_Desc'>
              <div className='RedExDisplay_DescWrapper'>
                <div className='RedExDes_Text'>
                <h1>Packaging Crafted From Ecosystem Responsible Materials</h1>
                <span>Packaging Crafted From Ecosystem Responsible Materials</span>
                </div>
                <button className='RedExShopNow_Btn'>Shop Now</button>
              </div>
            </div>
          </div>
          <div className='RedEx_AddressDiv'>
            <div className='RedEx_Address'>
              <div className='RedExAddress_Location'>
              <h4>Location</h4>
              <div>
                <span>2B, Rumens Road, Ikoyi, Lagos, Nigeria</span>
              </div>
              </div>
              <div className='Contact_Line'></div>
              <div className='RedExAddress_Contact'>
              <h4>Contact</h4>
              <div>
                <span>P: +2349075809289</span>
                <span>E: +Info@redexe.com</span>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section className='RedExFeatured_Categories'>
            <div className='Category_TextHeader'>
             <h1>Featured </h1><h1 style={{color:"red"}}>Category</h1>
          </div>  
          <div className='RedExCategories_Products'>
            <div className='Categoriy_Products' onClick={()=>{
              nav('/category')
            }}>
              <div className='Category_ProductImg'>
                <img src={item1} alt="" />
              </div>
              <div className='Category_ProductDesc'>
                <div className='Category_TopDesc'>
                  <span>Shop Generic Food Packaging</span>
                </div>
                <div className='Category_BotDesc'>
                  <button className='Get_ShoppingBtn'>Get Shopping</button>
                </div>
              </div>
            </div>
            <div className='Categoriy_Products' onClick={()=>{
              nav('/category')
            }}>
              <div className='Category_ProductImg'>
                <img src={item1} alt="" />
              </div>
              <div className='Category_ProductDesc'>
                <div className='Category_TopDesc'>
                  <span>Shop Generic Food Packaging</span>
                </div>
                <div className='Category_BotDesc'>
                  <button className='Get_ShoppingBtn'>Get Shopping</button>
                </div>
              </div>
            </div>
            <div className='Categoriy_Products' onClick={()=>{
              nav('/category')
            }}>
              <div className='Category_ProductImg'>
                <img src={item1} alt="" />
              </div>
              <div className='Category_ProductDesc'>
                <div className='Category_TopDesc'>
                  <span>Shop Generic Food Packaging</span>
                </div>
                <div className='Category_BotDesc'>
                  <button className='Get_ShoppingBtn'>Get Shopping</button>
                </div>
              </div>
            </div>
            <div className='Categoriy_Products' onClick={()=>{
              nav('/category')
            }}>
              <div className='Category_ProductImg'>
                <img src={item1} alt="" />
              </div>
              <div className='Category_ProductDesc'>
                <div className='Category_TopDesc'>
                  <span>Shop Generic Food Packaging</span>
                </div>
                <div className='Category_BotDesc'>
                  <button className='Get_ShoppingBtn'>Get Shopping</button>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className='RedExTop_Demanding'>
        <div className='Demanding_TextHeader'>
            <h1>Top </h1><h1 style={{color:"red"}}>Demanding</h1>
          </div>
          <div className='RedExDemanding_Products'>
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
          </div>
        </section>

        <section className='RedEx_Service'>
           <div className='Service_TextHeader'>
            <div>
            <h1>Explore </h1><h1 style={{color:"red"}}>Our</h1><h1>Service</h1>
            </div>
            <h3>Unleash a world of responsible materials</h3>
          </div>

          <div className='RedExService_Template'>
            <div className='RedExService_Info'>
              <img src={Service6} alt="" />
              <span>Quality Assurance</span>
            </div>
            <div className='RedExService_Info'>
              <img src={Service5} alt="" />
              <span>Quality Assurance</span>

            </div>
            <div className='RedExService_Info'>
              <img src={Service4} alt="" />
              <span>Quality Assurance</span>

            </div>
            <div className='RedExService_Info'>
              <img src={Service3} alt="" />
              <span>Quality Assurance</span>

            </div>
            <div className='RedExService_Info'>
              <img src={Service2} alt="" />
              <span>Quality Assurance</span>

            </div>
            <div className='RedExService_Info'>
              <img src={Service1} alt="" />
              <span>Quality Assurance</span>

            </div>
          </div>
        </section>

        <section className='RedExCase_Studies'>
          <div className='CaseStudies_TextHeader'>
             <h1>Case </h1><h1 style={{color:"red"}}>Studies</h1>
          </div> 
          <div className='Case_StudiesDiv'>

          </div>
        </section>

        <section className='RedEx_FAQ'>
          <div className='FAQ_TextHeader'>
             <h1>Frequently </h1><h1 style={{color:"red"}}>Asked</h1><h1>Questions</h1>
          </div> 
          <div className='RedExFAQ_AnsDiv'>
            <div className='FAQ_AnsWrapper'>
              <div className='FAQ_Que'>
                <span>What can i do on redex?</span>
                <img src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' onClick={()=>{
                  setAns({type:"first", drop:true})
                }} className={ans.type === "first" && ans.drop?'rot':null} style={{cursor:"pointer"}} />
                
              </div>
             {
              ans.type === "first" && ans.drop?
              <span className='FAQ_Ans'>You can do some shii</span>:null
             }
            </div>
            <div className='FAQ_AnsWrapper'>
              <div className='FAQ_Que'>
                <span>What can i do on redex?</span>
                <img src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' onClick={()=>{
                  setAns({type:"second", drop:true})
                }} className={ans.type === "second" && ans.drop?'rot':null} style={{cursor:"pointer"}} />
                
              </div>
             {
              ans.type === "second" && ans.drop?
              <span className='FAQ_Ans'>You can do some shii</span>:null
             }
            </div>
            <div className='FAQ_AnsWrapper'>
              <div className='FAQ_Que'>
                <span>What can i do on redex?</span>
                <img src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' onClick={()=>{
                  setAns({type:"third", drop:true})
                }} className={ans.type === "third" && ans.drop?'rot':null} style={{cursor:"pointer"}} />
                
              </div>
             {
              ans.type === "third" && ans.drop?
              <span className='FAQ_Ans'>You can do some shii</span>:null
             }
            </div>
            <div className='FAQ_AnsWrapper'>
              <div className='FAQ_Que'>
                <span>What can i do on redex?</span>
                <img src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' onClick={()=>{
                  setAns({type:"fourth", drop:true})
                }} className={ans.type === "fourth" && ans.drop?'rot':null} style={{cursor:"pointer"}} />
                
              </div>
             {
              ans.type === "fourth" && ans.drop?
              <span className='FAQ_Ans'>You can do some shii</span>:null
             }
            </div>
            <div className='FAQ_AnsWrapper'>
              <div className='FAQ_Que'>
                <span>What can i do on redex?</span>
                <img src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' onClick={()=>{
                  setAns({type:"fifth", drop:true})
                }} className={ans.type === "fifth" && ans.drop?'rot':null} style={{cursor:"pointer"}} />
                
              </div>
             {
              ans.type === "fifth" && ans.drop?
              <span className='FAQ_Ans'>You can do some shii</span>:null
             }
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LandingPage