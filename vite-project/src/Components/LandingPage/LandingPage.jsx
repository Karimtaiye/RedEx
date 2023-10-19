import React, { useEffect, useState, useRef } from "react";
import "./LandingPage.css";
import "./LandingPageRes.css";

import image from "../LandingPage/assets/DesImg.png";
import Titem1 from "../LandingPage/assets/Titem1.png";
import item2 from "../LandingPage/assets/item2.png";
import item3 from "../LandingPage/assets/item3.png";
import item4 from "../LandingPage/assets/item4.png";
import item5 from "../LandingPage/assets/item5.png";
import Service6 from "../LandingPage/assets/Service6.png";
import Service5 from "../LandingPage/assets/Service5.png";
import Service4 from "../LandingPage/assets/Service4.png";
import Service3 from "../LandingPage/assets/Service3.png";
import Service2 from "../LandingPage/assets/Service2.png";
import Service1 from "../LandingPage/assets/Service1.png";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function LandingPage() {
  const userRes = useSelector((state) => state.redexstore.userRes);
  const user = useSelector((state) => state.redexstore.user);
  const [allProducts, setAllProducts] = useState([]);
  const [nextPro, setNextPro] = useState(0);
  const [lefty, setlefty] = useState(0);
  const [left, setleft] = useState(0);
  const [execute, setexecute] = useState(true);
  const [ans, setAns] = useState({ type: "first", drop: false });
  const nav = useNavigate();
  const homepage = "red";
  const homeheader = "rgb(4, 4, 42)";
  const homecolor = "white";
  const hometext = "black";

  const token = user.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // const categoryArray = [Titem1, item2]
  const categoryArray = [Titem1, item2, item3, item4, item5, item2];

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
  }, []);

  console.log(allProducts);
  const getCategory = allProducts.filter((products) => products.productType[0]);

  useEffect(() => {
    carousel();
    setexecute(false);
  }, []);
  console.log(user);
  console.log(userRes);

  let carCards = [item2,item4,item2,item4,item3,item3,item4,item4]
  let card = useRef()

  // let left = 0
  let cartSize = 25.5
  let Container = carCards.length * cartSize - cartSize * 4
  return (
    <>
      <Header home={homepage} homeHeader={homeheader} homeColor={homecolor} hometext={hometext}/>
      <motion.div
        initial={{ animation: "slideInLeft", animationDuration: "1s" }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transitionDuration: 4 }}
        className="Landing_page"
      >
        <div className="LandingPage_Wrapper">
          <section className="RedExDisplay_Details">
            <div className="RedExDisplay_Carousel">
              <div className="RedExDisplay_Image">
                <img src={image} alt="" />
              </div>
              <div className="RedExDisplay_Desc">
                <div className="RedExDisplay_DescWrapper">
                  <div className="RedExDes_Text">
                    <h1>
                      Packaging Crafted From Ecosystem Responsible Materials
                    </h1>
                    <span>
                      Packaging Crafted From Ecosystem Responsible Materials
                    </span>
                  </div>
                  <button
                    className="RedExShopNow_Btn"
                    onClick={() => {
                      nav("/allproducts");
                    }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="RedEx_AddressDiv">
              <div className="RedEx_Address">
                <div className="RedExAddress_Location">
                  <h4>Location</h4>
                  <div>
                    <span>2B, Rumens Road, Ikoyi,</span>
                    <span> Lagos, Nigeria</span>
                  </div>
                </div>
                <div className="Contact_Line"></div>
                <div className="RedExAddress_Contact">
                  <h4>Contact</h4>
                  <div>
                    <span>P: +2349075809289</span>
                    <span>E: +Info@redexe.com</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <div className="Category_ProductsDiv">
            {categoryArray.map((pro) => (
              <>
                <div  className="Category_ProductsH ">
                  <div className="Category_ImgH">
                    <img src={Titem1} alt="" />
                  </div>
                  <div className="Category_DesH">
                    <div className="CategoryDes_Details">
                      <div className="Detail_Name">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h4>Plain package</h4>
                          <h4>NGN5,000</h4>
                        </div>
                        <span>For Pizza</span>
                      </div>
                      <div className="Detail_Size">
                        <h4>Sizes</h4>
                        <div>
                          <span style={{ background: "white", color: "black" }}>
                            XL
                          </span>
                          <span>L</span>
                          <span>M</span>
                          <span>S</span>
                        </div>
                      </div>
                    </div>
                    <div className="CategoryDes_Btn">
                      <button className="Cateory_ATCBtn">
                        <HiShoppingCart className="ATC_Icon" />
                        Order now
                      </button>
                      <button className="Cateory_ORNBtn">
                        <HiShoppingCart className="ATC_Icon" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="Category_ProductsHMobile">
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
                        Order now
                      </button>
                      <button className="Cateory_ORNBtn">
                        <HiShoppingCart className="ATC_Icon" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div> */}

          <section className="RedExFeatured_Categories">
            <div  className="Category_TextHeader">
              <h1>Featured </h1>
              <h1 style={{ color: "red" }}>Category</h1>
            </div>
            <div className="RedExCategories_Products">
              <div className="Categoriy_Products">
                <div style={{background:"red"}} className="Category_ProductImg">
                  <div className="Carousel_Cat">
                    <div></div>
                    <div></div>
                    <div style={{color:"white", width:"12px", height:"12px", background:"white"}}></div>
                    <div></div>
                  </div>
                  <motion.img
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  exit={{opacity:0}}
                    src={categoryArray[nextPro % categoryArray.length]}
                    alt=""
                  />
                </div>
                <div className="Category_ProductDesc">
                  <div className="Category_TopDesc">
                    <span>
                      Get Quote for Customised Packaging with your logo
                    </span>
                  </div>
                  <div className="Category_BotDesc">
                    <button
                      className="Get_ShoppingBtn"
                      onClick={() => {
                        nav("/category");
                      }}
                    >
                      Get Shopping
                    </button>
                  </div>
                </div>
              </div>
              <div className="Categoriy_Products">
                <div style={{background:"red"}} className="Category_ProductImg">
                  <div className="Carousel_Cat">
                    <div></div>
                    <div></div>
                    <div style={{color:"white", width:"12px", height:"12px", background:"white"}}></div>
                    <div></div>
                  </div>
                  <img
                    src={categoryArray[nextPro % categoryArray.length]}
                    alt=""
                  />
                </div>
                <div className="Category_ProductDesc">
                  <div className="Category_TopDesc">
                    <span>
                      Get Quote for Customised Packaging with your logo
                    </span>
                  </div>
                  <div className="Category_BotDesc">
                    <button
                      className="Get_ShoppingBtn"
                      onClick={() => {
                        nav("/category");
                      }}
                    >
                      Get Shopping
                    </button>
                  </div>
                </div>
              </div>
              <div className="Categoriy_Products">
                <div style={{background:"red"}} className="Category_ProductImg">
                  <div className="Carousel_Cat">
                    <div></div>
                    <div></div>
                    <div style={{color:"white", width:"12px", height:"12px", background:"white"}}></div>
                    <div></div>
                  </div>
                  <img
                    src={categoryArray[nextPro % categoryArray.length]}
                    alt=""
                  />
                </div>
                <div className="Category_ProductDesc">
                  <div className="Category_TopDesc">
                    <span>
                      Get Quote for Customised Packaging with your logo
                    </span>
                  </div>
                  <div className="Category_BotDesc">
                    <button
                      className="Get_ShoppingBtn"
                      onClick={() => {
                        nav("/category");
                      }}
                    >
                      Get Shopping
                    </button>
                  </div>
                </div>
              </div>
              <div className="Categoriy_Products">
                <div style={{background:"red"}} className="Category_ProductImg">
                  <div className="Carousel_Cat">
                    <div></div>
                    <div></div>
                    <div style={{color:"white", width:"12px", height:"12px", background:"white"}}></div>
                    <div></div>
                  </div>
                  <img
                    src={categoryArray[nextPro % categoryArray.length]}
                    alt=""
                  />
                </div>
                <div className="Category_ProductDesc">
                  <div className="Category_TopDesc">
                    <span>
                      Get Quote for Customised Packaging with your logo
                    </span>
                  </div>
                  <div className="Category_BotDesc">
                    <button
                      className="Get_ShoppingBtn"
                      onClick={() => {
                        nav("/category");
                      }}
                    >
                      Get Shopping
                    </button>
                  </div>
                </div>
              </div>
              <div className="Categoriy_Products">
                <div style={{background:"white"}} className="Category_ProductImg">
                  <div className="Carousel_Cat">
                    <div></div>
                    <div></div>
                    <div style={{color:"white", width:"12px", height:"12px", background:"red"}}></div>
                    <div></div>
                  </div>
                  <img
                    src={categoryArray[nextPro % categoryArray.length]}
                    alt=""
                  />
                </div>
                <div className="Category_ProductDesc">
                  <div className="Category_TopDesc">
                    <span>
                      Get Quote for Customised Packaging with your logo
                    </span>
                  </div>
                  <div className="Category_BotDesc">
                    <button
                      className="Get_ShoppingBtn"
                      onClick={() => {
                        nav("/category");
                      }}
                    >
                      Get Shopping
                    </button>
                  </div>
                </div>
              </div>
              {getCategory.length === 0 ? (
                <div className="Categoriy_Products">
                  <div className="Category_ProductImg">
                  <div className="Carousel_Cat">
                    <div></div>
                    <div></div>
                    <div style={{color:"white", width:"12px", height:"12px", background:"red"}}></div>
                    <div></div>
                  </div>
                    <img
                      src={categoryArray[nextPro % categoryArray.length]}
                      alt=""
                    />
                  </div>
                  <div className="Category_ProductDesc">
                    <div className="Category_TopDesc">
                      <span>
                        Get Quote for Customised Packaging with your logo
                      </span>
                    </div>
                    <div className="Category_BotDesc">
                      <button
                        className="Get_ShoppingBtn"
                        onClick={() => {
                          nav("/category");
                        }}
                      >
                        Get Shopping
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                getCategory.map((category) => (
                  <div className="Categoriy_Products">
                    <div className="Category_ProductImg">
                      <img
                        src={
                          category.productImages[
                            nextPro % category.productImages.length
                          ]
                        }
                        alt=""
                      />
                    </div>
                    <div className="Category_ProductDesc">
                      <div className="Category_TopDesc">
                        <span>{category.productType}</span>
                      </div>
                      <div className="Category_BotDesc">
                        <button
                          className="Get_ShoppingBtn"
                          onClick={() => {
                            nav("/category");
                          }}
                        >
                          Get Shopping
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
              

              {getCategory.map((category) => (
                <div className="Categoriy_Products">
                  <div className="Category_ProductImg">
                    <img src={Titem1} alt="" />
                  </div>
                  <div className="Category_ProductDesc">
                    <div className="Category_TopDesc">
                      <span>{category.productType}</span>
                    </div>
                    <div className="Category_BotDesc">
                      <button
                        className="Get_ShoppingBtn"
                        onClick={() => {
                          nav("/category");
                        }}
                      >
                        Get Shopping
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="RedExTop_Demanding">
            <div className="Demanding_TextHeader">
              <h1>Top </h1>
              <h1 style={{ color: "red" }}>Demanding</h1>
            </div>
            <div className="RedExDemanding_Products">
            <button className='Next' onClick={()=>{
                  setleft(prev => prev -= cartSize)
                  console.log(left)
                  left === 0?
                  setlefty(0):
                  setlefty(left +"%")

                }} >Next</button>
              {carCards.map((products) => (
                <div ref={card} style={{left:lefty}}
                  className="Demanding_Products"
                  onClick={() => {
                    nav(`/api/product/${products._id}`);
                  }}
                 >
                  <img src={products} alt="" />
                  <span>Customized Takeout Full Package</span>
                </div>
              ))}
              {/* <div className="Demanding_Products">
                <img src={item2} alt="" />
                <span>Overchoke carton stuff chsi</span>
              </div>
              <div className="Demanding_Products">
                <img src={item3} alt="" />
                <span>Choke multi-package stuffs</span>
                </div>
                <div className="Demanding_Products">
                <img src={item4} alt="" />
                <span>Customized Takeout Full Package</span>
              </div>
              <div className="Demanding_Products">
                <img src={item5} alt="" />
                <span>Choke Bag-package stuffs</span>
              </div>
              <div className="Demanding_Products">
                <img src={Titem1} alt="" />
                <span>Customized Takeout Full Package</span>
              </div>
              <div className="Demanding_Products">
                <img src={Titem1} alt="" />
                <span>Customized Takeout Full Package</span>
                </div>
              <div className="Demanding_Products">
                <img src={Titem1} alt="" />
                <span>Customized Takeout Full Package</span>
              </div> */}
                <button onClick={()=>{
                  setleft(prev => prev += cartSize)
                  console.log(left)
                  setlefty(left +"%")
  
                }} className='Prev'>prev</button>
            </div>
          </section>

          <section className="RedEx_Service">
            <div className="Service_TextHeader">
              <div>
                <h1>Explore </h1>
                <h1 style={{ color: "red" }}>Our</h1>
                <h1>Service</h1>
              </div>
              <h3>Unleash a world of responsible materials</h3>
            </div>

            <div className="RedExService_Template">
              <div className="RedExService_Info">
                <img src={Service6} alt="" />
                <span>Quality Assurance</span>
              </div>
              <div className="RedExService_Info">
                <img src={Service5} alt="" />
                <span>Quality Assurance</span>
              </div>
              <div className="RedExService_Info">
                <img src={Service4} alt="" />
                <span>Quality Assurance</span>
              </div>
              <div className="RedExService_Info">
                <img src={Service3} alt="" />
                <span>Quality Assurance</span>
              </div>
              <div className="RedExService_Info">
                <img src={Service2} alt="" />
                <span>Quality Assurance</span>
              </div>
              <div className="RedExService_Info">
                <img src={Service1} alt="" />
                <span>Quality Assurance</span>
              </div>
            </div>
          </section>

          <section className="RedExCase_Studies">
            <div className="CaseStudies_TextHeader">
              <h1>Case </h1>
              <h1 style={{ color: "red" }}>Studies</h1>
            </div>
            <div className="Case_StudiesDiv"></div>
          </section>

          <section className="RedEx_FAQ">
            <div className="FAQ_TextHeader">
              <h1>Frequently </h1>
              <h1 style={{ color: "red" }}>Asked</h1>
              <h1>Questions</h1>
            </div>
            <div className="RedExFAQ_AnsDiv">
              <div className="FAQ_AnsWrapper">
                <div className="FAQ_Que">
                  <span>What can i do on redex?</span>
                  <img
                    src="https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg"
                    onClick={() => {
                      setAns({ type: "first", drop: true });
                    }}
                    className={ans.type === "first" && ans.drop ? "rot" : null}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                {ans.type === "first" && ans.drop ? (
                  <span className="FAQ_Ans">You can do some shii</span>
                ) : null}
              </div>
              <div className="FAQ_AnsWrapper">
                <div className="FAQ_Que">
                  <span>What can i do on redex?</span>
                  <img
                    src="https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg"
                    onClick={() => {
                      setAns({ type: "second", drop: true });
                    }}
                    className={ans.type === "second" && ans.drop ? "rot" : null}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                {ans.type === "second" && ans.drop ? (
                  <span className="FAQ_Ans">You can do some shii</span>
                ) : null}
              </div>
              <div className="FAQ_AnsWrapper">
                <div className="FAQ_Que">
                  <span>What can i do on redex?</span>
                  <img
                    src="https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg"
                    onClick={() => {
                      setAns({ type: "third", drop: true });
                    }}
                    className={ans.type === "third" && ans.drop ? "rot" : null}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                {ans.type === "third" && ans.drop ? (
                  <span className="FAQ_Ans">You can do some shii</span>
                ) : null}
              </div>
              <div className="FAQ_AnsWrapper">
                <div className="FAQ_Que">
                  <span>What can i do on redex?</span>
                  <img
                    src="https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg"
                    onClick={() => {
                      setAns({ type: "fourth", drop: true });
                    }}
                    className={ans.type === "fourth" && ans.drop ? "rot" : null}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                {ans.type === "fourth" && ans.drop ? (
                  <span className="FAQ_Ans">You can do some shii</span>
                ) : null}
              </div>
              <div className="FAQ_AnsWrapper">
                <div className="FAQ_Que">
                  <span>What can i do on redex?</span>
                  <img
                    src="https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg"
                    onClick={() => {
                      setAns({ type: "fifth", drop: true });
                    }}
                    className={ans.type === "fifth" && ans.drop ? "rot" : null}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                {ans.type === "fifth" && ans.drop ? (
                  <span className="FAQ_Ans">You can do some shii</span>
                ) : null}
              </div>
            </div>
          </section>
        </div>
      </motion.div>
      {/* <Footer />   */}
    </>
  );
}

export default LandingPage;
