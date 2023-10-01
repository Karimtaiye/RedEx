import React, { useEffect, useState } from 'react'
import './Category.css'
import item1 from '../LandingPage/assets/item1.png'
import item2 from '../LandingPage/assets/item2.png'
import item3 from '../LandingPage/assets/item3.png'
import item4 from '../LandingPage/assets/item4.png'
import item5 from '../LandingPage/assets/item5.png'
import { BiSearch } from 'react-icons/bi'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi'
import axios from 'axios'
import { useDispatch, useSelector} from 'react-redux'


function Category() {
    const [allProducts, setAllProducts] = useState([])
    const user = useSelector(state=>state.redexstore.user)
    const token = user.token
    const Dispatch = useDispatch()
    const nav = useNavigate()
    const categorypage = "red"

    const config = {
        Headers:`Bearer ${token}`
    }

    const url = "https://redex-webapp-v1.onrender.com/api/getProducts"
  const getAllProducts = () => {
    axios.get(url)
    .then(res=>{
      console.log(res)
      setAllProducts(res.data.data)
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  const carousel = () => {
    setNextPro((prev)=>prev += 1) 
    if(execute){
     setTimeout(() => {
      carousel()
     }, 5000);
    }
  }
  
  useEffect(()=>{
    getAllProducts()
  },[])

  console.log(allProducts);

  return (
   <>
    <Header active={categorypage}/>
    <div className='RedExCategory_Page'>
        <section className='RexExMain_Category'>
            <div className='MainCategory_Img'>
                <img src={item1} alt="" />
            </div>
            <div className='MainCategory_Desc'>
                <div className='Category_SearchBar'>
                    <BiSearch style={{cursor:"pointer"}}/>
                </div>
                <div className='Category_Header'>
                    <h1>Shop Generic Food Pakaging plain and shii</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, minima! Similique velit ab recusandae nisi corporis, fugit tenetur placeat.</p>
                </div>
                <div className='Category_BtnDiv'>
                    <button className='Category_Btn'>Shop More</button>
                </div>
            </div>
        </section>

        <section className='Category_ProductSection'>
            <div className='Category_SortDiv'>
                <div className='SortBy_Category'>
                    <span>Sort By</span>
                </div>
                <select className='Choose_Category'>
                    <option value="Date">Date</option>
                    <option value="Price">Price</option>
                    <option value="Name">Name</option>
                    <option value="NaCategoryme">Category</option>
                </select>
            </div>
            <div className='Category_ProductsDiv'>
               {
                allProducts.map((produucts)=>(
            <div className='Category_Products' key={produucts._id}>
                <div className='Category_Img'>
                    <img src={item1} alt="" />
                </div>
                <div className='Category_Des'>
                    <div className='CategoryDes_Details'>
                        <h4>Name: choke</h4>
                        <h4>Price: </h4>
                    </div>
                    <div className='CategoryDes_Btn'>
                        <button className='Cateory_ATCBtn'  onClick={()=>{
                            axios.put(`https://redex-webapp-v1.onrender.com/api/cart/${produucts._id}`, null, config)
                            .then(res=>{
                                console.log(res)
                            
                            }).catch(err=>{
                                console.log(err);
                            })
                        }}><HiShoppingCart className='ATC_Icon'/>Add to Cart</button>
                    </div>
                </div>
            </div>))
               }
                <div className='Category_Products'>
                    <div className='Category_Img'>
                        <img src={item1} alt="" />
                    </div>
                    <div className='Category_Des'>
                        <div className='CategoryDes_Details'>
                            <h4>Name: </h4>
                            <h4>Price: </h4>
                        </div>
                        <div className='CategoryDes_Btn'>
                            <button className='Cateory_ATCBtn'><HiShoppingCart className='ATC_Icon' />Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='Category_Products'>
                    <div className='Category_Img'>
                        <img src={item1} alt="" />
                    </div>
                    <div className='Category_Des'>
                        <div className='CategoryDes_Details'>
                            <h4>Name: </h4>
                            <h4>Price: </h4>
                        </div>
                        <div className='CategoryDes_Btn'>
                            <button className='Cateory_ATCBtn'><HiShoppingCart className='ATC_Icon' />Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='Category_Products'>
                    <div className='Category_Img'>
                        <img src={item1} alt="" />
                    </div>
                    <div className='Category_Des'>
                        <div className='CategoryDes_Details'>
                            <h4>Name: </h4>
                            <h4>Price: </h4>
                        </div>
                        <div className='CategoryDes_Btn'>
                            <button className='Cateory_ATCBtn'><HiShoppingCart className='ATC_Icon' />Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='Category_Products'>
                    <div className='Category_Img'>
                        <img src={item1} alt="" />
                    </div>
                    <div className='Category_Des'>
                        <div className='CategoryDes_Details'>
                            <h4>Name: </h4>
                            <h4>Price: </h4>
                        </div>
                        <div className='CategoryDes_Btn'>
                            <button className='Cateory_ATCBtn'><HiShoppingCart className='ATC_Icon' />Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='Category_Products'>
                    <div className='Category_Img'>
                        <img src={item1} alt="" />
                    </div>
                    <div className='Category_Des'>
                        <div className='CategoryDes_Details'>
                            <h4>Name: </h4>
                            <h4>Price: </h4>
                        </div>
                        <div className='CategoryDes_Btn'>
                            <button className='Cateory_ATCBtn'><HiShoppingCart className='ATC_Icon' />Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='Category_Products'>
                    <div className='Category_Img'>
                        <img src={item1} alt="" />
                    </div>
                    <div className='Category_Des'>
                        <div className='CategoryDes_Details'>
                            <h4>Name: </h4>
                            <h4>Price: </h4>
                        </div>
                        <div className='CategoryDes_Btn'>
                            <button className='Cateory_ATCBtn'><HiShoppingCart className='ATC_Icon' />Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='Category_Products'>
                    <div className='Category_Img'>
                        <img src={item1} alt="" />
                    </div>
                    <div className='Category_Des'>
                        <div className='CategoryDes_Details'>
                            <h4>Name: </h4>
                            <h4>Price: </h4>
                        </div>
                        <div className='CategoryDes_Btn'>
                            <button className='Cateory_ATCBtn'><HiShoppingCart className='ATC_Icon' />Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='Category_Products'>
                    <div className='Category_Img'>
                        <img src={item1} alt="" />
                    </div>
                    <div className='Category_Des'>
                        <div className='CategoryDes_Details'>
                            <h4>Name: </h4>
                            <h4>Price: </h4>
                        </div>
                        <div className='CategoryDes_Btn'>
                            <button className='Cateory_ATCBtn'><HiShoppingCart className='ATC_Icon' />Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
    <div className='ATC_Noftication'>
        <div><h5>item has been added to cart </h5>
        <h5 style={{color:"green", cursor:"pointer", background:"rgba(243, 239, 239, 0.835)", padding:"3px"}}>view details</h5>
        <h5>view cart</h5>
        </div>
        <h4>x</h4>
        
    </div>
   </>
   
  )
}

export default Category