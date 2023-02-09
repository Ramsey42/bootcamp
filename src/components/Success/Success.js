import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Success.css";

//assets

import MobileLogo from "../../assets/images/mobile.png";
import EmailLogo from "../../assets/images/email.png";
import Star from "../../assets/images/star.png";
import VectorLogo from "../../assets/images/Vector.png";
import X from "../../assets/images/x.png";


const Success = () => {
    
    const {
        name,
        last_name,
        photo,
        about_me,
        email,
        mobile_number,
        position,
        the_employer,
        start_date,
        end_date,
        description,
        school,
        degree,
        graduation_year,
        school_description,
    } = useSelector((state) => state.information);
    const clearLocalStorage = () => {
        localStorage.clear();
    };
    const [visibility, setVisibility] = useState(true);
    return (
        <div className="success-wrapper">
<Link to="/">
                <button
                    className="education-return-button"
                    onClick={clearLocalStorage}
                >
                    <img
                        alt=""
                        className="experience-vector"
                        src={VectorLogo}
                    ></img>
                </button>
            </Link>
            <div className="cv-wrapper">
                <div className="cv-name">{name}</div>
                <div className="cv-lastname">{last_name}</div>
                <img alt="" src={EmailLogo} className="cv-emaillogo"></img>
                <div className="cv-email">{email}</div>
                <img alt="" src={MobileLogo} className="cv-mobilelogo"></img>
                <div className="cv-mobile">{mobile_number}</div>

                <img alt="" src={photo} className="cv-image"></img>

                <h1 className="cv-about-title">ჩემ შესახებ</h1>
                <p className="cv-about-discription">{about_me}</p>
                <hr className="cv-hr1"></hr>
                <h1 className="cv-experience-title">გამოცდილება</h1>
                <h1 className="cv-position">{position},</h1>
                <h1 className="cv-company">{the_employer}</h1>
                <h1 className="cv-date">
                    {start_date} - {end_date}
                </h1>
                <p className="cv-experience-discription">{description}</p>
                <hr className="cv-hr2"></hr>
                <h1 className="cv-education-title">განათლება</h1>
                <h1 className="cv-university">{school}</h1>
                <h1 className="cv-education-degree">{degree}</h1>
                <h1 className="cv-education-date">{graduation_year}</h1>
                <p className="cv-education-discription">{school_description}</p>
                <img className="cv-star" alt="" src={Star}></img>
            </div>

            <div className={visibility ? "success-message" : "success-message visibility-hidden"}>
      <h1 className="success-message-content">
        რეზიუმე წარმატებით გაიგზავნა
      </h1>
      <img 
        alt=''
        className="x"
        src={X} 
        onClick={() => setVisibility(false)} 
      />
    </div>
        </div>
    );
};

export default Success;
