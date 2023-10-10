import React from "react";
import "./Blog.css";
import Header from "../Header/Header";
import Main from "../Blog/assets/Main.png";
import sub1 from "../Blog/assets/sub1.png";
import sub2 from "../Blog/assets/sub2.png";
import sub3 from "../Blog/assets/sub3.png";
import truck from "../Blog/assets/truck.png";
import money from "../Blog/assets/money.png";
import support from "../Blog/assets/support.png";
import gift from "../Blog/assets/gift.png";

function Blog() {
  const blogpage = "red";
  return (
    <>
      <Header blog={blogpage} />
      <div className="Blog_page">
        <div className="Blog_Wrapper">
          <div className="Blog_Header">
            <h1>Read The Blog</h1>
          </div>
          <div className="Blog_content">
            <div className="Main_Blog">
              <div className="Main_BlogImg">
                <img src={Main} alt="" />
              </div>
              <div className="Main_BlogDes">
                <span>COLLABORATION</span>
                <h3>YOUR JOURNEY TO EXPERIENCE PERFECTION</h3>
                <p>
                  We collaborate with the best to give you all your demands at
                  your closest location to elevateyour success We collaborate
                  with the best to give you all your demands at your closest
                  location to elevateyour success We collaborate with the best
                  to give you all your demands at your closest location to
                  elevateyour success
                </p>
              </div>
            </div>

            <div className="Sub_Blog">
              <div className="BlogSub_Img">
                <div className="SubImg_Img">
                  <img src={sub1} alt="" />
                </div>
                <div className="SubImg_Des">
                  <span>NEW</span>
                  <h3>THE FUTURE OF PAPERMAUFACTURING</h3>
                  <p>
                    The use of recycled materials in paper production has
                    contributed to a greener, more environmentally responsible
                    future.
                  </p>
                </div>
              </div>
              <div className="BlogSub_Img">
                <div className="SubImg_Img">
                  <img src={sub2} alt="" />
                </div>
                <div className="SubImg_Des">
                  <span>NEW</span>
                  <h3>THE EVOLUTION OF PAPER TYPES: FROM START</h3>
                  <p>
                    You're uncertain about which paper type suits your project
                    specialists get recommendations based on your specific
                    needs.
                  </p>
                </div>
              </div>
              <div className="BlogSub_Img">
                <div className="SubImg_Img">
                  <img src={sub3} alt="" />
                </div>
                <div className="SubImg_Des">
                  <span>NEW</span>
                  <h3>THE ROLE OF TECHNOLOGY IN PAPER PRODUCTION</h3>
                  <p>
                    The integration of advanced machinery and automation
                    enhances productivity of paper mills but also environmental
                    impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Blog_Sere">
            <div className="Blog_SereContent">
              <div className="Blog_SereIcon">
                <img src={truck} alt="" />
              </div>
              <h4>Free Shipping</h4>
            </div>
            <div className="Blog_SereContent">
              <div className="Blog_SereIcon">
                <img src={gift} alt="" />
              </div>
              <h4>Special Gift</h4>
            </div>
            <div className="Blog_SereContent">
              <div className="Blog_SereIcon">
                <img src={money} alt="" />
              </div>
              <h4>Refund</h4>
            </div>
            <div className="Blog_SereContent">
              <div className="Blog_SereIcon">
                <img src={support} alt="" />
              </div>
              <h4>Support 24/7</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
