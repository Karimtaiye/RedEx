import React, { useEffect, useState } from "react";
import "./Category.css";
import "./CategoryRes.css";
import Swal from "sweetalert2";
import Titem1 from "../LandingPage/assets/Titem1.png";
import item2 from "../LandingPage/assets/item2.png";
import item3 from "../LandingPage/assets/item3.png";
import item4 from "../LandingPage/assets/item4.png";
import item5 from "../LandingPage/assets/item5.png";
import { BiSearch } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";
import Header from "../Header/Header";
import {ThreeDots} from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiShoppingCart } from "react-icons/hi";
import axios from "axios";
import { userTokenExp } from "../Redux/State";
import { useDispatch, useSelector } from "react-redux";

function Category() {
  const [allProducts, setAllProducts] = useState([]);
  const [ATC, setATC] = useState(false);
  const [loading, setLoading] = useState(false)
  const [search, setsearch] = useState(false)
  const [item, setItem] = useState("");
  const user = useSelector((state) => state.redexstore.user);
  const token = user.token;
  const Dispatch = useDispatch();
  const nav = useNavigate();
  const categorypage = "red";
  console.log(token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = "https://redex-webapp-v1.onrender.com/api/getProducts";
  const getAllProducts = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setAllProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, [ATC]);

  const carousel = () => {
    setNextPro((prev) => (prev += 1));
    if (execute) {
      setTimeout(() => {
        carousel();
      }, 5000);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [ATC]);

  console.log(allProducts);

  useEffect(() => {
    setTimeout(() => {
      setATC(false);
    }, 4000);
  }, [ATC]);

  return (
    <>
      <Header renders={ATC} home={categorypage} />
      <div className="RedExCategory_Page">
        <div className="All_ProductRoute">
          <span onClick={() => nav("/")} style={{ cursor: "pointer" }}>
            Home
          </span>
          /<span>Category</span>/
          <span style={{ color: "red" }}>Plain package</span>
        </div>
        <section className="RexExMain_Category">
          <div className="MainCategory_Img">
            <img src={Titem1} alt="" />
          </div>
          <div className="MainCategory_Desc">
            <div className="Category_SearchBar">
              <BiSearch style={{ cursor: "pointer" }} onClick={()=>{
                setsearch(!search)
              }}/>
            </div>
            <div className="Category_Header">
              <h1>Shop Generic Food Pakaging Plain and shii,  </h1>
              <span>Natural Stuffs and very nice Products</span>
            </div>
            <div className="Category_BtnDiv">
              <button className="Category_Btn">Explore</button>
            </div>
          </div>
        </section>

        <section className="Category_ProductSection">
          <div className="Category_SortDiv">
            <div className="SortBy_Category">
              <span>Sort By</span>
            </div>
            <select className="Choose_Category">
              <option value="Date">Date</option>
              <option value="Price">Price</option>
              <option value="Name">Name</option>
              <option value="NaCategoryme">Category</option>
            </select>
          </div>
          <div className="Category_ProductsDiv">
            {/* <div className='Category_ProductsH'>
                    <div className='Category_ImgH'>
                        <img src={Titem1} alt="" />
                    </div>
                    <div className='Category_DesH'>
                    <div className='CategoryDes_Details'>
                          <div className='Detail_Name'>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                            <h4>Plain package</h4>
                            <h4>NGN5,000</h4>
                            </div>
                            <span>For Pizza</span>
                          </div>
                          <div className='Detail_Size'>
                            <h4>Sizes</h4>
                            <div>
                            <span style={{background:"white", color:"black"}}>XL</span><span>L</span><span>M</span><span>S</span>
                            </div>
                          </div>
                        </div>
                        <div className='CategoryDes_Btn'>
                            <button className='Cateory_ATCBtn'><HiShoppingCart className='ATC_Icon'/>Order now</button>
                            <button className='Cateory_ORNBtn'><HiShoppingCart className='ATC_Icon' onClick={()=>{
                                axios.post(`https://redex-webapp-v1.onrender.com/api/cart/${produucts._id}`,null, config)
                                .then(res=>{                             
                                 console.log(res)
                                 setATC(true)
                                
                                }).catch(err=>{
                                    console.log(err);
                                })
                            }}/>Add to Cart</button>
                        </div>
                    </div>
                </div> */}
                

            {allProducts.map((products) => (
              <div className="Products_Card" key={products._id}>
                <div className="Image_Part">
                  <img src={Titem1} alt="" />
                </div>
                <div className="Description_Part">
                  <div className="Desc_Name-Price">
                    <div className="Name_Price">
                      <span> Product Generic</span>
                      <p>Plain Package</p>
                    </div>
                    <span>NGN{products.productPrice}</span>
                  </div>
                  <div className="Desc_ATC">
                    <div>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                    </div>
                    <button
                      className="Product_ATC"
                      style={{display:"flex", justifyContent:"center", alignItems:"center"}}
                      onClick={() => {
                        setLoading(true)
                        axios
                          .post(
                            `https://redex-webapp-v1.onrender.com/api/cart/${products._id}`,
                            null,
                            config
                          )
                          .then((res) => {
                            console.log(res);
                            setLoading(false)
                            setItem(res._id)
                            setATC(true);
                          })
                          .catch((err) => {
                            console.log(err);
                            setLoading(false)
                            if(err.response.data.message === "jwt expired"){
                                console.log(err)
                                Dispatch(userTokenExp({expToken:true}))
                                nav("/login")
                            }
                            else if(err.response.data.message === "jwt must be provided"){
                              Swal.fire({
                                title: "You are not logged in",
                                text: 'Log in to your account',
                                icon: 'error',
                                confirmButtonText: 'Close'
                              })
                            }
                          });
                      }}
                    >
                       {loading?<ThreeDots 
                    height="60" 
                    width="60" 
                    radius="9"
                    color="#fff" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    />:ATC?"View Cart":"Add To Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {allProducts.map((products) => (
              <div className="Products_Card" key={products._id}>
                <div className="Image_Part">
                  <img src={Titem1} alt="" />
                </div>
                <div className="Description_Part">
                  <div className="Desc_Name-Price">
                    <div className="Name_Price">
                      <span> Product Generic</span>
                      <p>Plain Package</p>
                    </div>
                    <span>NGN{products.productPrice}</span>
                  </div>
                  <div className="Desc_ATC">
                    <div className="Stars">
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                    </div>
                    <button
                      className="Product_ATC"
                      style={{display:"flex", justifyContent:"center", alignItems:"center"}}
                      onClick={() => {
                        setLoading(true)
                        axios
                          .post(
                            `https://redex-webapp-v1.onrender.com/api/cart/${products._id}`,
                            null,
                            config
                          )
                          .then((res) => {
                            setLoading(false)
                            console.log(res);
                            setATC(true);
                          })
                          .catch((err) => {
                            setLoading(false)
                            console.log(err);
                            if(err.response.data.message === "jwt expired"){
                                console.log(err)
                                Dispatch(userTokenExp({expToken:true}))
                                nav("/login")
                            }
                            else if(err.response.data.message === "jwt must be provided"){
                              Swal.fire({
                                title: "You are not logged in",
                                text: 'Log in to your account',
                                icon: 'error',
                                confirmButtonText: 'Close'
                              })
                            }
                          });
                      }}
                    >
                       {loading?<ThreeDots 
                    height="60" 
                    width="60" 
                    radius="9"
                    color="#fff" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    />:ATC?"View Cart":"Add To Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {allProducts.map((products) => (
              <div className="Products_Card" key={products._id}>
                <div className="Image_Part">
                  <img src={Titem1} alt="" />
                </div>
                <div className="Description_Part">
                  <div className="Desc_Name-Price">
                    <div className="Name_Price">
                      <span> Product Generic</span>
                      <p>Plain Package</p>
                    </div>
                    <span>NGN{products.productPrice}</span>
                  </div>
                  <div className="Desc_ATC">
                    <div className="Stars">
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                    </div>
                    <button
                      className="Product_ATC"
                      style={{display:"flex", justifyContent:"center", alignItems:"center"}}
                      onClick={() => {
                        setLoading(true)
                        axios
                          .post(
                            `https://redex-webapp-v1.onrender.com/api/cart/${products._id}`,
                            null,
                            config
                          )
                          .then((res) => {
                            setLoading(false)
                            console.log(res);
                            setATC(true);
                          })
                          .catch((err) => {
                            setLoading(false)
                            console.log(err);
                            if(err.response.data.message === "jwt expired"){
                                console.log(err)
                                Dispatch(userTokenExp({expToken:true}))
                                nav("/login")
                            }
                            else if(err.response.data.message === "jwt must be provided"){
                              Swal.fire({
                                title: "You are not logged in",
                                text: 'Log in to your account',
                                icon: 'error',
                                confirmButtonText: 'Close'
                              })
                            }
                          });
                      }}
                    >
                       {loading?<ThreeDots 
                    height="60" 
                    width="60" 
                    radius="9"
                    color="#fff" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    />:ATC?"View Cart":"Add To Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {allProducts.map((products) => (
              <div className="Products_Card" key={products._id}>
                <div className="Image_Part">
                  <img src={Titem1} alt="" />
                </div>
                <div className="Description_Part">
                  <div className="Desc_Name-Price">
                    <div className="Name_Price">
                      <span> Product Generic</span>
                      <p>Plain Package</p>
                    </div>
                    <span>NGN{products.productPrice}</span>
                  </div>
                  <div className="Desc_ATC">
                    <div className="Stars">
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                    </div>
                    <button
                      className="Product_ATC"
                      style={{display:"flex", justifyContent:"center", alignItems:"center"}}
                      onClick={() => {
                        setLoading(true)
                        axios
                          .post(
                            `https://redex-webapp-v1.onrender.com/api/cart/${products._id}`,
                            null,
                            config
                          )
                          .then((res) => {
                            setLoading(false)
                            console.log(res);
                            setATC(true);
                          })
                          .catch((err) => {
                            setLoading(false)
                            console.log(err);
                            if(err.response.data.message === "jwt expired"){
                                console.log(err)
                                Dispatch(userTokenExp({expToken:true}))
                                nav("/login")
                            }
                            else if(err.response.data.message === "jwt must be provided"){
                              Swal.fire({
                                title: "You are not logged in",
                                text: 'Log in to your account',
                                icon: 'error',
                                confirmButtonText: 'Close'
                              })
                            }
                          });
                      }}
                    >
                     {loading?<ThreeDots 
                    height="60" 
                    width="60" 
                    radius="9"
                    color="#fff" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    />:ATC?"View Cart":"Add To Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="Category_ProductsHMobile">
              <div className="Category_ImgH">
                <img src={Titem1} alt="" />
              </div>
              <div className="Category_DesH">
                <div className="CategoryDes_Details">
                  <h4>Name: </h4>
                  <h4>Price: </h4>
                </div>
                <div className="CategoryDes_Btn">
                  <button className="Cateory_ATCBtn">
                    <HiShoppingCart className="ATC_Icon" />
                    Add To Cart
                  </button>
                  <button className='Cateory_ORNBtn'><HiShoppingCart className='ATC_Icon'/>Add to Cart</button>
                </div>
              </div>
            </div> */}

            {/* <div className="Category_ProductsHMobile">
              <div className="Category_ImgH">
                <img src={Titem1} alt="" />
              </div>
              <div className="Category_DesH">
                <div className="CategoryDes_Details">
                  <h4>Name: </h4>
                  <h4>Price: </h4>
                </div>
                <div className="CategoryDes_Btn">
                  <button className="Cateory_ATCBtn">
                    <HiShoppingCart className="ATC_Icon" />
                    Add To Cart
                  </button>
                  <button className='Cateory_ORNBtn'><HiShoppingCart className='ATC_Icon'/>Add to Cart</button>
                </div>
              </div>
            </div> */}

            {/* <div className="Category_ProductsHMobile">
              <div className="Category_ImgH">
                <img src={Titem1} alt="" />
              </div>
              <div className="Category_DesH">
                <div className="CategoryDes_Details">
                  <h4>Name: </h4>
                  <h4>Price: </h4>
                </div>
                <div className="CategoryDes_Btn">
                  <button className="Cateory_ATCBtn">
                    <HiShoppingCart className="ATC_Icon" />
                    Add To Cart
                  </button>
                  <button className='Cateory_ORNBtn'><HiShoppingCart className='ATC_Icon'/>Add to Cart</button>
                </div>
              </div>
            </div> */}

            {/* <div className="Category_ProductsHMobile">
              <div className="Category_ImgH">
                <img src={Titem1} alt="" />
              </div>
              <div className="Category_DesH">
                <div className="CategoryDes_Details">
                  <h4>Name: </h4>
                  <h4>Price: </h4>
                </div>
                <div className="CategoryDes_Btn">
                  <button className="Cateory_ATCBtn">
                    <HiShoppingCart className="ATC_Icon" />
                    Add To Cart
                  </button>
                  <button className='Cateory_ORNBtn'><HiShoppingCart className='ATC_Icon'/>Add to Cart</button>
                </div>
              </div>
            </div> */}

            {/* <div className="Category_ProductsHMobile">
              <div className="Category_ImgH">
                <img src={Titem1} alt="" />
              </div>
              <div className="Category_DesH">
                <div className="CategoryDes_Details">
                  <h4>Name: </h4>
                  <h4>Price: </h4>
                </div>
                <div className="CategoryDes_Btn">
                  <button className="Cateory_ATCBtn">
                    <HiShoppingCart className="ATC_Icon" />
                    Add To Cart
                  </button>
                  <button className='Cateory_ORNBtn'><HiShoppingCart className='ATC_Icon'/>Add to Cart</button>
                </div>
              </div>
            </div> */}

          </div>
        </section>
      </div>
      {ATC ? (
        <div className="ATC_Noftication">
          <div className="ATCImg_Pop">
            <div className="Pop_Img">
              <img src={Titem1} />
            </div>
          </div>

          <div className="Pop_Details">
            <div className="Pop_Des">
                <span>Plain Package</span>
                <p>NGN20,000</p>
            </div>
            <div className="Pop_Qty">
                <span>-</span>
                <p>5</p>
                <span>+</span>
            </div>
            <div className="Pop_Order">
                <button className="Pop_OrderBtn">Order Now</button>
            </div>
          </div>
          {/* <div>
            <GrStatusGood className="AddMark_Icon" />
            <h5>item has been added to cart </h5>
            <h5 className="View_Cart" style={{}}>
              view cart
            </h5>
          </div> */}
          {/* <h4
            onClick={() => {
              setATC(false);
            }}
          >
            x
          </h4> */}
        </div>
      ) : null}
      {

        search?
        <div className="Search_Wrapper">
          <motion.div
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.3}}
        exit={{opacity:0, transitionDuration: 4 }}
        
        className="Search_Bar">
          <div className="Search_Input">
            <span className="Cancel_Search" style={{cursor:"pointer"}} onClick={()=>{
                setsearch(!search)
              }}>X</span>
            <input type="text" placeholder="Search" />

          </div>
          <div className="Search_ResultDiv">
              <div className="Search_Result">
                <div className="Result_Img">
                  <img src={Titem1} alt="" />
                </div>
                <div className="Result_Des">
                  <div className="Desc_Name">
                  <p>Plain Package Products Choke stuff</p>
                  <h4>Main Generic Category</h4>
                  </div>
                  <div className="Result_Price">
                    <span>NGN6,000</span>
                  </div>
                </div>
              </div>
              <div className="Search_Result">
                <div className="Result_Img">
                  <img src={Titem1} alt="" />
                </div>
                <div className="Result_Des">
                  <div className="Desc_Name">
                  <p>Plain Package Products Choke stuff</p>
                  <h4>Main Generic Category</h4>
                  </div>
                  <div className="Result_Price">
                    <span>NGN6,000</span>
                  </div>
                </div>
              </div>
              <div className="Search_Result">
                <div className="Result_Img">
                  <img src={Titem1} alt="" />
                </div>
                <div className="Result_Des">
                  <div className="Desc_Name">
                  <p>Plain Package Products Choke stuff</p>
                  <h4>Main Generic Category</h4>
                  </div>
                  <div className="Result_Price">
                    <span>NGN6,000</span>
                  </div>
                </div>
              </div>
              {/* <div className="Search_Result">
                <div className="Result_Img">
                  <img src={Titem1} alt="" />
                </div>
                <div className="Result_Des">
                  <div className="Desc_Name">
                  <p>Plain Package Products Choke stuff</p>
                  <h4>Main Generic Category</h4>
                  </div>
                  <div className="Result_Price">
                    <span>NGN6,000</span>
                  </div>
                </div>
              </div> */}

          </div>
          </motion.div>
        </div>:null
      }
    </>
  );
}

export default Category;
