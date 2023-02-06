import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

// assets
import VectorLogo from '../../assets/images/Vector.png';
import EllipseLogo from '../../assets/images/Ellipse.png';
import './Experience.css';

const Experience = () => {
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








      <div className="second"></div>
    </div>
  )
}

export default Experience;