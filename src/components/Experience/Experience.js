import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

// assets
import VectorLogo from '../../assets/images/Vector.png';
import EllipseLogo from '../../assets/images/Ellipse.png';
import EmailLogo from '../../assets/images/email.png';
import Star from '../../assets/images/star.png';
import MobileLogo from '../../assets/images/mobile.png';

import './Experience.css';
import Experienceprops from "./Experienceprops";
import General from "../General/General";

import { useSelector } from "react-redux";

const Experience = ({}) => {

  const valuename = useSelector((state) => state.valuename);

  // const { valuename } = useParams();
  return(
    <div className="experience-container">
      <div className="first">
        <img alt="" className="experience-ellipse" src={EllipseLogo}></img>
        <img alt="" className="experience-vector" src={VectorLogo}></img>
        

        <h1 className="experience-header">გამოცდილება</h1>
        <h2 className="experience-page">2/3</h2>
        <hr className="experience-hr"></hr>

        <div className="position-wrapper">
          <label className="position-label">თანამდებობა</label>
          <input className="position-input" />   
          <p className="position-hint">მინიმუმ 2 სიმბოლო</p>
        </div>

        <div className="employer-wrapper">
          <label className="employer-label">დამსაქმებელი</label>
          <input className="employer-input" />   
          <p className="employer-hint">მინიმუმ 2 სიმბოლო</p>
        </div>

        <div className="starting-date-wrapper">
          <label className="starting-date-label">დაწყების რიცხვი</label>
          <input type='date' className="starting-date-input" />   
          <p className="starting-date-hint">დინამიური კონტენტი</p>
        </div>

        <div className="ending-date-wrapper">
          <label className="ending-date-label">დამთავრების რიცხვი</label>
          <input type='date' className="ending-date-input" />   
          <p className="ending-date-hint">დინამიური კონტენტი</p>
        </div>

        <div className="discription-wrapper">
          <label className="discription-label">აღწერა</label>
          <textarea  className="discription-input" />   
          <p className="discription-hint">დინამიური კონტენტი</p>
        </div>
<hr className="experience-hr2"></hr>

<button className="add-experience"><p className="add-experience-content">მეტი გამოცდილების დამატება</p></button>

<button className="previous-page"><p className="previous-page-content">უკან</p></button>

<button className="submit-experience"><p className="submit-experience-content">შემდეგი</p></button>

      </div>

{/* <Experienceprops
valuename="asdf"
valuelastname={<General(valuename)/>}

/> */}
  <div className="second">
        <h1 className="return-name">{valuename}</h1>
        <h1 className="return-lastname">ჯჰბ</h1>
        <img alt='' className="return-image" src={Star}></img>
        <img alt='' className="emailimage" src={EmailLogo} ></img>
        <p className="return-email">anzor666@redberry.ge</p>
        <img alt="" className="mobileimage" src={MobileLogo} ></img>
        <p className="return-mobile"> +995 555 555 555</p>

        <h1 className="return-abouttitle">ჩემ შესახებ</h1>
        <p className="return-about">
          ძალიან მიყვარს დიზაინის კეთებ. დილით ადრე რომ ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
        </p>
        <hr className="return-hr"></hr>
        <h1 className="return-experiencetitle">გამოცდილება</h1>
        <h1 className="return-position">React Native Developer,</h1>
        <h1 className="return-date">2020-09-23 - 2020-09-23</h1>
        <p className="return-description">
          Experienced Javascript Native Developer With 5 Years in The industry. Proficient Withreact.
          Used Problem-Solving Aptitude To Enchange Application Performance By 14%. Created Data 
          Cisualisation Tools And Integrated Designs.
        </p>
        <hr className="return-hr2"></hr>
      </div>






      
    </div>
  )
}

export default Experience;