import React, { useState } from "react";
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
    const { apiData } = useSelector((state) => state.information);
    const clearLocalStorage = () => {
        localStorage.clear();
    };

    console.log("apiData", apiData);
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
                <div className="cv-name">{apiData.name}</div>
                <div className="cv-lastname">{apiData.surname}</div>
                <img alt="" src={EmailLogo} className="cv-emaillogo"></img>
                <div className="cv-email">{apiData.email}</div>
                <img alt="" src={MobileLogo} className="cv-mobilelogo"></img>
                <div className="cv-mobile">{apiData.phone_number}</div>

                <img
                    alt=""
                    src={`https://resume.redberryinternship.ge${apiData.image}`}
                    className="cv-image"
                ></img>

                <h1 className="cv-about-title">ჩემ შესახებ</h1>
                <p className="cv-about-discription">{apiData.about_me}</p>
                <hr className="cv-hr1"></hr>
                <h1 className="cv-experience-title">გამოცდილება</h1>
                {apiData?.experiences && apiData?.experiences?.length >= 1
                    ? apiData.experiences.map((experienceItem) => (
                          <>
                              <h1 className="cv-position">
                                  {experienceItem.position},
                              </h1>
                              <h1 className="cv-company">
                                  {experienceItem.the_employer}
                              </h1>
                              <h1 className="cv-date">
                                  {experienceItem.start_date} -{" "}
                                  {experienceItem.due_date}
                              </h1>
                              <p className="cv-experience-discription">
                                  {experienceItem.description}
                              </p>
                          </>
                      ))
                    : null}
                <hr className="cv-hr2"></hr>
                <h1 className="cv-education-title">განათლება</h1>
                {apiData?.educations && apiData?.educations?.length >= 1
                    ? apiData.educations.map((educationItem) => (
                          <>
                              <h1 className="cv-university">
                                  {educationItem.institute}
                              </h1>
                              <h1 className="cv-education-degree">
                                  {educationItem.degree}
                              </h1>
                              <h1 className="cv-education-date">
                                  {educationItem.due_date}
                              </h1>
                              <p className="cv-education-discription">
                                  {educationItem.description}
                              </p>
                          </>
                      ))
                    : null}
                <img className="cv-star" alt="" src={Star}></img>
            </div>

            <div
                className={
                    visibility
                        ? "success-message"
                        : "success-message visibility-hidden"
                }
            >
                <h1 className="success-message-content">
                    რეზიუმე წარმატებით გაიგზავნა
                </h1>
                <img
                    alt=""
                    className="x"
                    src={X}
                    onClick={() => setVisibility(false)}
                />
            </div>
        </div>
    );
};

export default Success;
