import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Education.css";
import Educationprops from "./Educationprops";
import "../Experience/Experience.css";
//assets
import Vector from "../../assets/images/Vector.png";

import {
    addSchoolInformation,
    setApiData,
} from "../../Redux/features/information/informationSlice";
import { createCV, getDegrees } from "../../services/api";
import {
    base64EncodedString,
    dataUrlToBlob,
    decodeBase64,
} from "../../utils/helper";
import axios from "axios";
import moment from "moment";

const Education = ({ history }) => {
    const allInformation = useSelector((state) => state.information);
    const dispatch = useDispatch();
    const [degreeOptions, setDegreeOptions] = useState([]);
    const navigate = useNavigate();

    const clearLocalStorage = () => {
        localStorage.clear();
    };

    const getDegreeOptions = async () => {
        const degreesApiData = await getDegrees();
        const degreesOptionsData = degreesApiData?.data;
        setDegreeOptions(degreesOptionsData);
    };

    useEffect(() => {
        getDegreeOptions();
        return () => {};
    }, []);

    //validation states
    const [educationError, setEducationError] = useState(null);
    const [degreeError, setDegreeError] = useState(null);
    const [edudiscriptionError, setEdudiscriptionError] = useState(null);
    // const [mobileError, setMobileError] = useState(null);

    // in case of any errors hide a next button
    async function checkErrors() {
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
                // image,
            } = allInformation;

            var formData = new FormData();

            const dataUrl = localStorage.getItem("photoImage");
            const blob = dataUrlToBlob(dataUrl);
            const file = new File([blob], "image", { type: "image/png" });

            const experiences = [
                {
                    position,
                    employer: the_employer,
                    start_date,
                    due_date: end_date,
                    description,
                },
            ];

            const educations = [
                {
                    institute: school,
                    degree_id: degree,
                    due_date: graduation_year,
                    description: school_description,
                },
            ];
            formData.append("name", name);
            formData.append("surname", last_name);
            formData.append("email", email);
            formData.append("phone_number", mobile_number);
            formData.append("about_me", about_me);
            formData.append("image", file);

            // for experience
            for (var i = 0; i < experiences.length; i++) {
                const experienceData = experiences[i];
                formData.append(`experiences[]`, experiences[i]);
                formData.append(
                    `experiences.${i}.position`,
                    experienceData.position
                );
                formData.append(
                    `experiences.${i}.employer`,
                    experienceData.employer
                );
                formData.append(
                    `experiences.${i}.start_date`,
                    experienceData.start_date
                );
                formData.append(
                    `experiences.${i}.due_date`,
                    experienceData.due_date
                );
                formData.append(
                    `experiences.${i}.description`,
                    experienceData.description
                );
            }

            // for educations
            for (var j = 0; j < educations.length; j++) {
                const educationData = educations[j];
                const degreeObject = degreeOptions.find(
                    (item) => item.title === educationData.degree_id
                );
                formData.append(`educations[]`, educationData);
                formData.append(
                    `educations.${j}.institute`,
                    educationData.institute
                );
                formData.append(`educations.${j}.degree_id`, degreeObject.id);
                formData.append(
                    `educations.${j}.due_date`,
                    // new Date().toString("YYYY/MM/dd")
                    moment(educationData.due_date).format("YYYY/MM/DD")
                );
                formData.append(
                    `educations.${j}.description`,
                    educationData.description
                );
            }

            const createdCv = await createCV(formData).catch((err) => {
                console.log("err", err);
                return false;
            });
            if (createdCv.status === 201) {
                dispatch(setApiData(createdCv.data));
                navigate("/success");

                // return (
                //     <Link to="/success">
                //         <button
                //             onClick={handleClick}
                //             type="submit"
                //             className="submit"
                //         >
                //             <p className="submit-content">დასრულება</p>
                //         </button>
                //     </Link>
                // );
            }
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
    }

    const handleClick = (event) => {
        if (
            valueeducation.trim().length > 1 &&
            valuedegree.trim().length > 0 &&
            valueedudiscription.trim().length > 0 &&
            valuegraduate.trim().length > 0
        ) {
            history.push("/success");
        } else {
            event.preventDefault();
        }
    };

    return (
        <div className="education-container">
            <div className="left-div">
                <Link to="/">
                    <button
                        className="education-return-button"
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
                            <div
                                className="validation"
                                style={{ color: "red" }}
                            >
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
                            {degreeOptions.length >= 1 &&
                                degreeOptions.map((item) => (
                                    <option
                                        value={item?.title}
                                        id={item?.id}
                                        key={item?.id}
                                    >
                                        {item?.title}
                                    </option>
                                ))}
                        </select>
                    </div>

                    <div className="graduate-wrapper">
                        <label className="graduate-label">
                            დამთავრების რიცხვი
                        </label>
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
                        <div className="aducation-discription-label">
                            აღწერა
                        </div>
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
                            <div
                                className="validation"
                                style={{ color: "red" }}
                            >
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
                    <button className="submit" onClick={checkErrors}>
                        <p className="submit-content">დასრულება</p>
                    </button>
                    {/* <div>{}</div> */}
                </div>
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
