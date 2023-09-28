import React from 'react'
import './Category.css'
import item1 from '../LandingPage/assets/item1.png'
import item2 from '../LandingPage/assets/item2.png'
import item3 from '../LandingPage/assets/item3.png'
import item4 from '../LandingPage/assets/item4.png'
import item5 from '../LandingPage/assets/item5.png'
import { BiSearch } from 'react-icons/bi'


function Category() {
  return (
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
                            <button className='Cateory_ATCBtn'>Add to Cart</button>
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
                            <button className='Cateory_ATCBtn'>Add to Cart</button>
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
                            <button className='Cateory_ATCBtn'>Add to Cart</button>
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
                            <button className='Cateory_ATCBtn'>Add to Cart</button>
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
                            <button className='Cateory_ATCBtn'>Add to Cart</button>
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
                            <button className='Cateory_ATCBtn'>Add to Cart</button>
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
                            <button className='Cateory_ATCBtn'>Add to Cart</button>
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
                            <button className='Cateory_ATCBtn'>Add to Cart</button>
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
                            <button className='Cateory_ATCBtn'>Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Category