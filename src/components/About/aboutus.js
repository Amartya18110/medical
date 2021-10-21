import React from "react";
import AboutUsCard from "./aboutusCard";
import img1 from "../img/boy.png";
import img2 from "../img/boy.png";
import amartya from "../img/amartya.jpeg"
import kajol from "../img/kg.jpeg"
import rahul from "../img/rahul.jpeg"
import sagnik from "../img/sagnik.jpeg"
import jethimaa from "../img/jethi maa.jpg"
import jethu from "../img/jethu.jpg"
import "./image.css";

const Aboutus = () => {
  
  return (
    <div className="aboutCard">
      <img className="bgimg1" src={img1} alt="img" />
      <div className="aboutCard1">
        <AboutUsCard src={amartya} alt="member"/>
        <AboutUsCard src={kajol} alt="member"/>
      </div>
      <div className="aboutCard2">
        <AboutUsCard  src={rahul} alt="member"/>
        <AboutUsCard  src={sagnik} alt="member"/>
      </div>
      <div className="aboutCard3">
      <AboutUsCard  src={jethimaa} alt="member"/>
        <AboutUsCard  src={jethu} alt="member"/>
      </div>
      <img className="bgimg2" src={img2} alt="img" />
    </div>
  );
};

export default Aboutus;
