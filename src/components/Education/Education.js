import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Education.css";
import Educationprops from "./Educationprops";
import "../Experience/Experience.css";
//assets
import Vector from "../../assets/images/Vector.png";
import Ellipse from "../../assets/images/Ellipse.png";
import { addSchoolInformation } from "../../Redux/features/information/informationSlice";

const Education = () => {
    const allInformation = useSelector((state) => state.information);
    const dispatch = useDispatch();

    const clearLocalStorage = () => {
        localStorage.clear();
    };

    //validation states
    const [educationError, setEducationError] = useState(null);
    const [degreeError, setDegreeError] = useState(null);
    const [edudiscriptionError, setEdudiscriptionError] = useState(null);
    // const [mobileError, setMobileError] = useState(null);

    // in case of any errors hide a next button
    function checkErrors() {
        if (
            !educationError &&
            !degreeError &&
            !educationError &&
            !edudiscriptionError
        ) {
            // here to put redux
            const payload = {
                school: valueeducation,
                degree: valuedegree,
                graduation_year: valuegraduate,
                school_description: valueedudiscription,
            };
            dispatch(addSchoolInformation(payload));
            return (
                <Link to="/success">
                    <button className="submit">
                        <p className="submit-content">დასრულება</p>
                    </button>
                </Link>
            );
        }
    }

    //education
    const [valueeducation, setValueeducation] = useState(
        localStorage.getItem("inputFieldEducationValue") || ""
    );

    useEffect(() => {
        localStorage.setItem("inputFieldEducationValue", valueeducation);
        // history.push(`/experience/${valuename}`);
    }, [valueeducation]);

    function handleChangeEducation(event) {
        setValueeducation(event.target.value);
        dispatch({
            type: "UPDATE_INPUT_VALUE",
            valueeducation: event.target.value,
        });

        if (!event.target.value) {
            setEducationError("ველის შევსება სავალდებულოა");
        } else if (event.target.value.length < 2) {
            setEducationError("გთხოვთ შეიყვანოთ მინიმუმ 2 სიმბოლო");
        } else {
            setEducationError(null);
        }
    }

    //degree
    const [valuedegree, setValuedegree] = useState(
        localStorage.getItem("inputFieldDegreeValue") || ""
    );

    useEffect(() => {
        localStorage.setItem("inputFieldDegreeValue", valuedegree);
        // history.push(`/experience/${valuename}`);
    }, [valuedegree]);

    function handleChangeDegree(event) {
        setValuedegree(event.target.value);
        dispatch({
            type: "UPDATE_INPUT_VALUE",
            valuedegree: event.target.value,
        });

        if (!event.target.value) {
            setDegreeError("ველის შევსება სავალდებულოა");
        } else {
            setDegreeError(null);
        }
    }

    //edudiscription
    const [valueedudiscription, setValueedudiscription] = useState(
        localStorage.getItem("inputFieldEdudiscription") || ""
    );

    useEffect(() => {
        localStorage.setItem("inputFieldEdudiscription", valueedudiscription);
        // history.push(`/experience/${valuename}`);
    }, [valueedudiscription]);

    function handleChangeEdudiscription(event) {
        setValueedudiscription(event.target.value);
        dispatch({
            type: "UPDATE_INPUT_VALUE",
            valueedudiscription: event.target.value,
        });

        if (!event.target.value) {
            setEdudiscriptionError("ველის შევსება სავალდებულოა");
        } else {
            setEdudiscriptionError(null);
        }
    }

    //graduate
    const [valuegraduate, setValuegraduate] = useState(
        localStorage.getItem("inputFieldGraduateValue") || ""
    );

    useEffect(() => {
        localStorage.setItem("inputFieldGraduateValue", valuegraduate);
        // history.push(`/experience/${valuename}`);
    }, [valuegraduate]);

    function handleChangeGraduate(event) {
        setValuegraduate(event.target.value);
        dispatch({
            type: "UPDATE_INPUT_VALUE",
            valuegraduate: event.target.value,
        });

        // if (!event.target.value) {
        //    setValueeducation('ველის შევსება სავალდებულოა');
        // } else if (event.target.value.length < 2) {
        //    setValueeducation('გთხოვთ შეიყვანოთ მინიმუმ 2 სიმბოლო');
        // } else if (!/^[ა-ჰ]+$/.test(event.target.value)) {
        //    setValueeducation('შეიყვანეთ მხოლოდ ქართული სიმბოლოები');
        // } else {
        //    setValueeducation(null);

        // }
    }

    return (
        <div className="education-container">
            <img alt="" className="experience-ellipse" src={Ellipse}></img>

            <Link to="/">
                <button
                    className="experience-return-button"
                    onClick={clearLocalStorage}
                >
                    <img
                        alt=""
                        className="experience-vector"
                        src={Vector}
                    ></img>
                </button>
            </Link>

            <div className="education-left">
                <h1 className="education-header">განათლება</h1>
                <h1 className="education-page">3/3</h1>
                <hr className="education-hr"></hr>

                <div className="education-wrapper">
                    <label className="education-label">სასწავლებელი</label>
                    <input
                        className="education-input"
                        value={valueeducation}
                        onChange={(event) => {
                            handleChangeEducation(event);
                        }}
                        type="text"
                        id="education"
                        name="education"
                    />

                    {educationError ? (
                        <div className="validation" style={{ color: "red" }}>
                            {educationError}
                        </div>
                    ) : (
                        <p className="education-hint">
                            მინიმუმ 2 ასო, ქართლი ასოები
                        </p>
                    )}
                </div>

                <div className="degree-wrapper">
                    <label className="degree-label">ხარისხი</label>
                    <select
                        className="degree-input"
                        value={valuedegree}
                        onChange={(event) => {
                            handleChangeDegree(event);
                        }}
                        id="degree"
                        name="degree"
                    >
                        <option value="option1">საშუალო სკოლის დიპლომი</option>
                        <option value="option2">
                            ზოგადსაგანათლებლო დიპლომი
                        </option>
                        <option value="option3">ბაკალავრი</option>
                        <option value="option3">მაგისტრი</option>
                        <option value="option3">დოქტორი</option>
                        <option value="option3">ასოცირებული ხარისხი</option>
                        <option value="option3">სტუდენტი</option>
                        <option value="option3">კოლეჯი(ხარისხის გარეშე)</option>
                        <option value="option3">სხვა</option>
                    </select>
                </div>

                <div className="graduate-wrapper">
                    <label className="graduate-label">დამთავრების რიცხვი</label>
                    <input
                        type="date"
                        className="graduate-input"
                        value={valuegraduate}
                        onChange={(event) => {
                            handleChangeGraduate(event);
                        }}
                        id="graduate"
                        name="graduate"
                    />
                </div>

                <div className="aducation-discription-wrapper">
                    <div className="aducation-discription-label">აღწერა</div>
                    <textarea
                        className="aducation-description-input"
                        value={valueedudiscription}
                        onChange={(event) => {
                            handleChangeEdudiscription(event);
                        }}
                        type="text"
                        id="edudiscription"
                        name="edudiscription"
                    ></textarea>
                    {edudiscriptionError ? (
                        <div className="validation" style={{ color: "red" }}>
                            {edudiscriptionError}
                        </div>
                    ) : (
                        <p className="edudiscription-hint"></p>
                    )}
                </div>

                <button className="add-aducation">
                    {" "}
                    <p className="add-aducation-content">
                        {" "}
                        სხვა სასწავლებლის დამატება
                    </p>
                </button>
                <Link to="/experience">
                    <button className="previous-page2">
                        {" "}
                        <p className="previous-page2-content">უკან</p>
                    </button>
                </Link>
                {/* <button  className='submit'><p className='submit-content'>დასრულება</p></button> */}
                <div>{checkErrors()}</div>
            </div>

            <div className="education-right">
                <Educationprops
                    allInformation={allInformation}
                    valueeducation={valueeducation}
                    valuedegree={valuedegree}
                    valueedudiscription={valueedudiscription}
                    valuegraduate={valuegraduate}
                />
            </div>
        </div>
    );
};

export default Education;
