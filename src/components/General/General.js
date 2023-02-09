import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useHistory } from 'react';
//assets
import VectorLogo from "../../assets/images/Vector.png";
import EllipseLogo from "../../assets/images/Ellipse.png";
import EmailLogo from "../../assets/images/email.png";
import MobileLogo from "../../assets/images/mobile.png";
import StarLogo from "../../assets/images/star.png";

import Experience from "../Experience/Experience";
import "./Genreal.css";
import { addBasicInfo } from "../../Redux/features/information/informationSlice";

const General = ({history}) => {

  const dispatch = useDispatch()
    // const history = useHistory();
    //cleas localstorage
    const clearLocalStorage = () => {
        localStorage.clear();
    };

    // validation states
    //name
    const [error, setError] = useState(null);
    const [lastnameError, setLastnameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [mobileError, setMobileError] = useState(null);



    // in case of any errors hide a next button
    function checkErrors() {
      if (!error && !lastnameError && !emailError && !mobileError) {
        // item to be added to redux
            const payload = {
              name : valuename,
              last_name: valuelastname,
              photo: image, 
              about_me: valueabout, 
              email: valueemail, 
              mobile_number: valuemobile
            }
            console.log("payload",payload)
            dispatch(addBasicInfo(payload))
            return (
                <Link to="/experience">
                    <button onClick={handleClick} className="submit-personal-info">
                        <p className="submit-personal-info-content">შემდეგი</p>
                    </button>
                </Link>
            );
        }
    }
    // localstorage
    //name
    const [valuename, setValuename] = useState(
        localStorage.getItem("inputFieldNameValue") || ""
    );

    useEffect(() => {
        localStorage.setItem("inputFieldNameValue", valuename);
        // history.push(`/experience/${valuename}`);
    }, [valuename]);




    function handleChangeName(event) {
        setValuename(event.target.value);
        dispatch({ type: "UPDATE_INPUT_VALUE", valuename: event.target.value });

        if (!event.target.value) {
            setError("ველის შევსება სავალდებულოა");
        } else if (event.target.value.length < 2) {
            setError("გთხოვთ შეიყვანოთ მინიმუმ 2 სიმბოლო");
        } else if (!/^[ა-ჰ]+$/.test(event.target.value)) {
            setError("შეიყვანეთ მხოლოდ ქართული სიმბოლოები");
        } else {
            setError(null);
        }
    }

    // lastname
    const [valuelastname, setValuelastname] = useState(
        localStorage.getItem("inputFieldLastnameValue") || ""
    );

    useEffect(() => {
        localStorage.setItem("inputFieldLastnameValue", valuelastname);
    }, [valuelastname]);

    function handleChangeLastname(event) {
        setValuelastname(event.target.value);
        dispatch({
            type: "UPDATE_INPUT_VALUE",
            valuelastname: event.target.value,
        });

        if (!event.target.value) {
            setLastnameError("ველის შევსება სავალდებულოა");
        } else if (event.target.value.length < 2) {
            setLastnameError("გთხოვთ შეიყვანოთ მინიმუმ 2 სიმბოლო");
        } else if (!/^[ა-ჰ]+$/.test(event.target.value)) {
            setLastnameError("შეიყვანეთ მხოლოდ ქართული სიმბოლოები");
        } else {
            setLastnameError(null);
        }
    }

    //about
    const [valueabout, setValueabout] = useState(
        localStorage.getItem("inputFieldAboutValue") || ""
    );

    useEffect(() => {
        localStorage.setItem("inputFieldAboutValue", valueabout);
    }, [valueabout]);

    function handleChangeAbout(event) {
        setValueabout(event.target.value);
    }

    //email

    const [valueemail, setValueemail] = useState(
        localStorage.getItem("inputFieldEmailValue") || ""
    );

    useEffect(() => {
        localStorage.setItem("inputFieldEmailValue", valueemail);
    }, [valueemail]);

    function handleChangeEmail(event) {
        setValueemail(event.target.value);

        // Validation logic

        if (!event.target.value) {
            setEmailError("ველის შევსება სავალდებულოა");
        } else if (!event.target.value.endsWith("@redberry.ge")) {
            setEmailError("ელ.ფოსტა უნდა მთავრდებოდეს @redberry.ge -თი");
        } else {
            setEmailError(null);
        }
    }

    //mobile

    const [valuemobile, setValuemobile] = useState(
        localStorage.getItem("inputFieldMobileValue") || ""
    );

    useEffect(() => {
        localStorage.setItem("inputFieldMobileValue", valuemobile);
    }, [valuemobile]);

    function handleChangeMobile(event) {
        setValuemobile(event.target.value);

        // Validation logic for Georgian mobile number
        const mobileNumberRegex = /^(\+?995|0)?(5[0123456789]\d{7})$/;
        if (!event.target.value) {
            setMobileError("ველის შევსება სავალდებულოა");
        } else if (!mobileNumberRegex.test(event.target.value)) {
            setMobileError(
                "მაგ.: +995 5xx xxx xxx ნუ გამოიყენებთ WhiteSpace-ს"
            );
        } else {
            setMobileError(null);
        }
    }

    //fileUploader
    const [image, setImage] = useState(
        localStorage.getItem("uploadedImage") || null
    );
    useEffect(() => {
        localStorage.setItem("uploadedImage", image);
    }, [image]);
    function handleChangeUploader(event) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    }
        //useHistory, check if inputs are not empty
        const handleClick = (event) => {
        
            if (valuename.trim().length > 1 && valuelastname.trim().length > 1 && valueemail.endsWith("@redberry.ge")
            && /^(\+9955[0-9]{8})$/.test(valuemobile) && image != null
            ) {
              history.push("/experience");
            } else {
                event.preventDefault();
              
            }
          };

    return (
        <div className="general-container">
            <div className="left-div">
           

                <Link to="/">
                    <button
                        className="general-return-button"
                        onClick={clearLocalStorage}
                    >
                        <img
                            alt=""
                            className="experience-vector"
                            src={VectorLogo}
                        ></img>
                    </button>
                </Link>
                <h1 className="general-header">პირადი ინფო</h1>

                <p className="general-pages">1/3</p>

                <hr className="general-hr"></hr>

                <div className="parent-name">
                    <label className="name-label" for="name">
                        სახელი
                    </label>

                    <div className="frame">
                        <input
                            className="input-name"
                            value={valuename}
                            onChange={(event) => {
                                handleChangeName(event);
                            }}
                            type="text"
                            id="name"
                            name="name"
                        />
                    </div>
                    {error ? (
                        <div className="validation" style={{ color: "red" }}>
                            {error}
                        </div>
                    ) : (
                        <p className="validation">
                            მინიმუმ 2 ასო, ქართლი ასოები
                        </p>
                    )}
                </div>

                {/* lastname input  */}
                <div className="parent-lastname">
                    <label className="lastname-label" for="name">
                        გვარი
                    </label>

                    <div className="frame-lastname">
                        <input
                            className="input-lastname"
                            value={valuelastname}
                          
                            onChange={(event) => {
                                handleChangeLastname(event);
                            }}
                            type="text"
                            id="name"
                            name="name"
                        />
                    </div>
                    {lastnameError ? (
                        <div className="validation" style={{ color: "red" }}>
                            {lastnameError}
                        </div>
                    ) : (
                        <p className="validation-lastname">
                            მინიმუმ 2 ასო, ქართლი ასოები
                        </p>
                    )}
                </div>

                <p className="upload-title">პირადი ფოტოს ატვირთვა</p>
                <div className="upload">
                    <input
                        
                        type="file"
                        id="file-input"
                        onChange={handleChangeUploader}
                    />
                    <label htmlFor="file-input">ატვირთვა</label>
                </div>
                {/* about */}
                <div className="about-container">
                    <p className="about-title">ჩემ შესახებ (არასავალდებულო)</p>
                    <textarea
                        value={valueabout}
                        onChange={(event) => {
                            handleChangeAbout(event);
                        }}
                        className="about-field"
                    ></textarea>
                </div>

                {/* email */}
                <div className="email-container">
                    <p className="email-title">ელ.ფოსტა</p>
                    <textarea
                        value={valueemail}
                        required
                        pattern=".+@redberry.ge$"
                        title="Email must end with @redberry.ge"
                        onChange={(event) => {
                            handleChangeEmail(event);
                        }}
                        className="email-field"
                    ></textarea>
                    {emailError ? (
                        <div className="validation" style={{ color: "red" }}>
                            {emailError}
                        </div>
                    ) : (
                        <p className="email-validation">
                            უნდა მთავრდებოდეს @redberry.ge-ით
                        </p>
                    )}
                </div>

                {/* mobile */}
                <div className="mobile-container">
                    <p className="mobile-title">მობილურის ნომერი</p>
                    <input
                        value={valuemobile}
                      
                        onChange={(event) => {
                            handleChangeMobile(event);
                        }}
                        className="mobile-field"
                    ></input>
                    {mobileError ? (
                        <div className="validation" style={{ color: "red" }}>
                            {mobileError}
                        </div>
                    ) : (
                        <p className="mobile-validation">
                            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                        </p>
                    )}
                </div>
                {checkErrors()}
            </div>

            <div className="right-div">
                <h1 className="output-name">{valuename}</h1>

                <h1 className="output-lastname">{valuelastname}</h1>
                {image && (
                    <img className="return-image" src={image} alt="" />
                )}

                <p className="output-email">
                {valueemail && (
        <img
          style={{ position: "absolute", marginLeft: "-20px" }}
          alt=""
          src={EmailLogo}
        />
      )}
                    {valueemail}
                </p>
                <p className="output-mobile">
                {valuemobile && (
        <img
          style={{ position: "absolute", marginLeft: "-20px" }}
          alt=""
          src={MobileLogo}
        />
      )}
                    {valuemobile}
                </p>
             {valueabout && (<h1 className="about-output-title">ჩემ შესახებ</h1>)}   
                <p className="about-output">{valueabout}</p>
            </div>
            <img alt="" className="star-logo" src={StarLogo}></img>
        </div>
    );
};

export default General;
