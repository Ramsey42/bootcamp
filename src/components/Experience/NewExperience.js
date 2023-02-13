import React from 'react';

import './NewExperience.css';
const NewExperience = () => {
    return(
        <div className='newExperience-container'>
    <div className="position-wrapper">
                    <label className="position-label">თანამდებობა</label>
                    <input
                        className="position-input"
                        // value={valueposition}
                        // onChange={(event) => {
                        //     handleChangePosition(event);
                        // }}
                        type="text"
                        id="position"
                        name="position"
                    />
                    {/* {positionError ? (
                        <div className="validation" style={{ color: "red" }}>
                            {positionError}
                        </div>
                    ) : (
                        <p className="position-hint">
                            მინიმუმ 2 ასო, ქართლი ასოები
                        </p>
                    )} */}
                </div>


                <div className="employer-wrapper">
                    <label className="employer-label">დამსაქმებელი</label>
                    <input
                        className="employer-input"
                        // value={valueemployee}
                        // onChange={(event) => {
                        //     handleChangeEmployee(event);
                        // }}
                        type="text"
                        id="employee"
                        name="employee"
                    />
                    {/* {employeeError ? (
                        <div className="validation" style={{ color: "red" }}>
                            {employeeError}
                        </div>
                    ) : (
                        <p className="employer-hint">მინიმუმ 2 ასო</p>
                    )} */}
                </div>

                <div className="starting-date-wrapper">
                    <label className="starting-date-label">
                        დაწყების რიცხვი
                    </label>
                    <input
                        type="date"
                        className="starting-date-input"
                        // value={valuestartdate}
                        // onChange={(event) => {
                        //     handleChangeStartdate(event);
                        // }}
                        id="startdate"
                        name="startdate"
                    />
                    {/* {startdateError ? (
                        <div className="validation" style={{ color: "red" }}>
                            {startdateError}
                        </div>
                    ) : (
                        <p className="starting-date-hint"></p>
                    )} */}
                </div>



                <div className="ending-date-wrapper">
                    <label className="ending-date-label">
                        დამთავრების რიცხვი
                    </label>
                    <input
                        type="date"
                        className="ending-date-input"
                        // value={valueenddate}
                        // onChange={(event) => {
                        //     handleChangeEnddate(event);
                        // }}
                        id="enddate"
                        name="enddate"
                    />
                    {/* {enddateError ? (
                        <div className="validation" style={{ color: "red" }}>
                            {enddateError}
                        </div>
                    ) : (
                        <p className="ending-date-hint"></p>
                    )} */}
                </div>



                <div className="discription-wrapper">
                    <label className="discription-label">აღწერა</label>
                    <textarea
                        className="discription-input"
                        // value={valuediscription}
                        // onChange={(event) => {
                        //     handleChangeDiscription(event);
                        // }}
                        id="discription"
                        name="discription"
                    />

                    {/* {discriptionError ? (
                        <div className="validation" style={{ color: "red" }}>
                            {discriptionError}
                        </div>
                    ) : (
                        <p className="discription-hint">
                            მინიმუმ 2 ასო, ქართლი ასოები
                        </p>
                    )} */}
                </div>

                <hr className="experience-hr2"></hr>



        </div>
    )
}

export default NewExperience;