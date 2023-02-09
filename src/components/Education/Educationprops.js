import React from "react";
import "./Educationprops.css";
import StarLogo from "../../assets/images/star.png";
import EmailLogo from "../../assets/images/email.png";
import MobileLogo from "../../assets/images/mobile.png";
const Educationprops = (props) => {
    const { name, last_name, photo, about_me, email, mobile_number, position, the_employer, start_date, end_date, description } =
        props.allInformation;
    return (
        <div>
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
            <h1 className="return-position">{position}, {the_employer}</h1>
            <h1 className="return-date">{start_date} - {end_date}</h1>
            <p className="return-description">
                {description}
            </p>
            <hr className="return-hr2"></hr>


{props.valueeducation && (
 <h1 className="return-aducationtitle">განათლება</h1>
)}
           
            <h1 className="return-degreedegree">{props.valueeducation}</h1>
            <h1 className="return-degree">{props.valuedegree}</h1>
            <h1 className="return-graduationdate">{props.valuegraduate}</h1>
            <p className="return-aducation-description">
                {props.valueedudiscription}
            </p>
            <img alt="" className="star-logo" src={StarLogo}></img>

        </div>
    );
};

export default Educationprops;
