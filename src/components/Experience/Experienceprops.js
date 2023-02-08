import React from "react";
import "./Experience.css";

//assets
import EmailLogo from "../../assets/images/email.png";
import Star from "../../assets/images/star.png";
import MobileLogo from "../../assets/images/mobile.png";

const Experienceprops = (props) => {
    const { name, last_name, photo, about_me, email, mobile_number } =
        props.allInformation;
    return (
        <div className="second">
            <h1 className="return-name">{name}</h1>
            <h1 className="return-lastname">{last_name}</h1>
            <img alt="" className="return-image" src={photo}></img>
            <img alt="" className="emailimage" src={EmailLogo}></img>
            <p className="return-email">{email}</p>
            <img alt="" className="mobileimage" src={MobileLogo}></img>
            <p className="return-mobile">{mobile_number}</p>

            <h1 className="return-abouttitle">ჩემ შესახებ</h1>
            <p className="return-about">
                {about_me}
            </p>
            <hr className="return-hr"></hr>
            <h1 className="return-experiencetitle">გამოცდილება</h1>
            <h1 className="return-position">
                {props.valueposition}, {props.valueemployee}
            </h1>
            {/* <h1 className="return-employee">{props.valueemployee}</h1> */}
            <h1 className="return-date">
                {props.valuestartdate} - {props.valueenddate}
            </h1>
            <p className="return-description">{props.valuediscription}</p>
            <hr className="return-hr2"></hr>
        </div>
    );
};
export default Experienceprops;
