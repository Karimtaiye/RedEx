import React from "react";
import "./About.css";
import "./AboutRes.css";
import about1 from "../About/assets/about1.png";
import about2 from "../About/assets/about2.png";
import about3 from "../About/assets/about3.png";
import about5 from "../About/assets/about5.png";
import { motion } from "framer-motion";
import Header from "../Header/Header";

function About() {
  const aboutpage = "red";
  return (
    <>
      <Header about={aboutpage} />
      <div className="About_page">
        <div className="About_Wrapper">
          <motion.section 
          initial={{opacity:0, scale:0}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.6}}

          className="About_FirstPart">
            <div className="About_FirstPartLeft">
              <div className="LeftPart_Header">
                <h2>About Us</h2>
                <h4>Our Company</h4>
              </div>
              <span>
                Welcome to RedexPack, your trusted partner in sustainable paper
                packaging solutions.We take pride in sustainable practices. All
                our packaging materials are sourced fromresponsibly managed
                forests.Our packaging don’t only lookgood but leaves a
                smalllerecological foot print.
              </span>
              <button className="ReadMore_Btn">Read More</button>
            </div>
            <div className="About_FirstPartRight">
              <div className="Right_PartImg1">
                <img src={about1} alt="" />
              </div>
              <div className="Right_PartImg2">
                <img src={about2} alt="" />
              </div>
            </div>
          </motion.section>

          <motion.section
          
          initial={{opacity:0, scale:0}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.6}}
          
          className="About_SecPart">
            <div className="About_SecPartLeft">
              <div className="SecPart_Left">
                <img src={about3} alt="" />
              </div>
            </div>
            <div className="SecPart_Right">
              <div className="SecLeftPart_Header">
                <h2>Our</h2>
                <h4>Mission</h4>
              </div>
              <span>
                At RedexPack, we are driven by a simple yet powerful mission: to
                provide sustainable packaging solutions that protect your
                products and the planet. Our commitment to quality and
                environmental responsibility 
              </span>
              <span className="Mobil">
                At RedexPack, we are driven by a simple yet powerful mission: to
                provide sustainable packaging solutions that protect your
                products and the planet. Our commitment to quality and
                environmental responsibility 
              </span>
              <button className="ReadMore_Btn">Read More</button>
            </div>
          </motion.section>

          <motion.section
          initial={{opacity:0, scale:0}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.6}}
          className="Great_Product">
            <h1>Great Products are found here!</h1>
          </motion.section>

          <motion.section
          initial={{opacity:0, scale:0}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.6}}
          className="Choice_Part">
            <div className="Choice_Text">
              <span>Pick Your</span> <h4>Choice</h4>
              <span>That stands </span>
              <span>Out of the</span>
              <h4>Crowd</h4>
            </div>
            <img src={about5} alt="" />
          </motion.section>
        </div>
      </div>
    </>
  );
}

export default About;
