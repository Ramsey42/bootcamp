import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import { connect } from "react-redux";
// import { useDispatch } from "react-redux";

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

//cleas localstorage
const clearLocalStorage = () => {
  localStorage.clear();
};


// validation state 
const [positionError, setPositionError] = useState(null);
const [employeeError, setEmployeeError] = useState(null);
const [startdateError, setstartdateError] = useState(null);
const [enddateError, setEnddateError] = useState(null);
const [discriptionError, setDiscriptionError] = useState(null);



function checkErrors() {
  if (!positionError && !employeeError && !startdateError && !enddateError && !discriptionError) {
    return <Link to="/education"><button className="submit-personal-info"><p className="submit-personal-info-content">შემდეგი</p></button></Link>;
  }
}



  // const dispatch = useDispatch();
      // localstorage
      //position
      const [valueposition, setValueposition] = useState(
        localStorage.getItem("inputFieldPositionValue") || ""
      );
    
      useEffect(() => {
        localStorage.setItem("inputFieldPositionValue", valueposition);
        // history.push(`/experience/${valuename}`);

      }, [valueposition]);
 


      function handleChangePosition(event) {
        setValueposition(event.target.value);
        // dispatch({ type: 'UPDATE_INPUT_VALUE', valuename: event.target.value });

        if (!event.target.value) {
          setPositionError('ველის შევსება სავალდებულოა');
        } else if (event.target.value.length < 2) {
          setPositionError('გთხოვთ შეიყვანოთ მინიმუმ 2 სიმბოლო');
        }  else {
          setPositionError(null);
          
        }
        
      }



      //employee
      const [valueemployee, setValueemployee] = useState(
        localStorage.getItem("inputFieldEmployeeValue") || ""
      );
    
      useEffect(() => {
        localStorage.setItem("inputFieldEmployeeValue", valueemployee);
        // history.push(`/experience/${valuename}`);

      }, [valueemployee]);
 


      function handleChangeEmployee(event) {
        setValueemployee(event.target.value);
        // dispatch({ type: 'UPDATE_INPUT_VALUE', valuename: event.target.value });

        if (!event.target.value) {
          setEmployeeError('ველის შევსება სავალდებულოა');
        } else if (event.target.value.length < 2) {
          setEmployeeError('გთხოვთ შეიყვანოთ მინიმუმ 2 სიმბოლო');
        }  else {
          setEmployeeError(null);
          
        }
        
      }

      //startdate
      const [valuestartdate, setValuestartdate] = useState(
        localStorage.getItem("inputFieldStartdateValue") || ""
      );
    
      useEffect(() => {
        localStorage.setItem("inputFieldStartdateValue", valuestartdate);
        // history.push(`/experience/${valuename}`);

      }, [valuestartdate]);
 


      function handleChangeStartdate(event) {
        setValuestartdate(event.target.value);
        // dispatch({ type: 'UPDATE_INPUT_VALUE', valuename: event.target.value });

        if (!event.target.value) {
          setstartdateError('ველის შევსება სავალდებულოა');
        } else {
          setstartdateError(null);
          
        }
        
      }

      //enddate
      const [valueenddate, setValueenddate] = useState(
        localStorage.getItem("inputFieldEnddateValue") || ""
      );
    
      useEffect(() => {
        localStorage.setItem("inputFieldEnddateValue", valueenddate);
        // history.push(`/experience/${valuename}`);

      }, [valueenddate]);
 


      function handleChangeEnddate(event) {
        setValueenddate(event.target.value);
        // dispatch({ type: 'UPDATE_INPUT_VALUE', valuename: event.target.value });

        if (!event.target.value) {
          setEnddateError('ველის შევსება სავალდებულოა');
        } else {
          setEnddateError(null);
          
        }
        
      }



  //discription
  const [valuediscription, setValuediscription] = useState(
    localStorage.getItem("inputFieldDiscriptionValue") || ""
  );

  useEffect(() => {
    localStorage.setItem("inputFieldDiscriptionValue", valuediscription);
    // history.push(`/experience/${valuename}`);

  }, [valuediscription]);



  function handleChangeDiscription(event) {
    setValuediscription(event.target.value);
    // dispatch({ type: 'UPDATE_INPUT_VALUE', valuename: event.target.value });

    if (!event.target.value) {
      setDiscriptionError('ველის შევსება სავალდებულოა');
    } else if (event.target.value.length < 2) {
      setDiscriptionError('გთხოვთ შეიყვანოთ მინიმუმ 2 სიმბოლო');
    } else if (!/^[ა-ჰ]+$/.test(event.target.value)) {
      setDiscriptionError('შეიყვანეთ მხოლოდ ქართული სიმბოლოები');
    } else {
      setDiscriptionError(null);
      
    }
    
  }



  // const valuename = useSelector((state) => state.valuename);
  // const valuelastname = useSelector((state) => state.valuelastname);



 
  return(
    <div className="experience-container">
      <div className="first">
        <img alt="" className="experience-ellipse" src={EllipseLogo}></img>

        <Link to="/">
             <button className="experience-return-button"   onClick={clearLocalStorage}>
          <img   alt=''  className="experience-vector" src={VectorLogo}></img>
          </button> 
          </Link>        

        <h1 className="experience-header">გამოცდილება</h1>
        <h2 className="experience-page">2/3</h2>
        <hr className="experience-hr"></hr>

        <div className="position-wrapper">
          <label className="position-label">თანამდებობა</label>
          <input className="position-input"
          value={valueposition} 
           onChange={(event) => {
        handleChangePosition(event);
      }} type="text" id="position" name="position" />   
          {positionError ? <div className="validation" style={{ color: 'red' }}>{positionError}</div> : <p className="position-hint">მინიმუმ 2 ასო, ქართლი ასოები</p>}
        </div>

        <div className="employer-wrapper">
          <label className="employer-label">დამსაქმებელი</label>
          <input className="employer-input"  
          value={valueemployee} 
           onChange={(event) => {
        handleChangeEmployee(event);
      }} type="text" id="employee" name="employee"/>   
        {employeeError ? <div className="validation" style={{ color: 'red' }}>{employeeError}</div> : <p className="employer-hint">მინიმუმ 2 ასო</p>}
        </div>

        <div className="starting-date-wrapper">
          <label className="starting-date-label">დაწყების რიცხვი</label>
          <input type='date' className="starting-date-input"
            value={valuestartdate} 
            onChange={(event) => {
         handleChangeStartdate(event);
       }}  id="startdate" name="startdate" />   
          {startdateError ? <div className="validation" style={{ color: 'red' }}>{startdateError}</div> : <p className="starting-date-hint"></p>}
              
        </div>

        <div className="ending-date-wrapper">
          <label className="ending-date-label">დამთავრების რიცხვი</label>
          <input type='date' className="ending-date-input"
           value={valueenddate} 
           onChange={(event) => {
        handleChangeEnddate(event);
      }}  id="enddate" name="enddate"
          />   
                   {enddateError ? <div className="validation" style={{ color: 'red' }}>{enddateError}</div> : <p className="ending-date-hint"></p>}

        </div>

        <div className="discription-wrapper">
          <label className="discription-label">აღწერა</label>
          <textarea  className="discription-input"
           value={valuediscription} 
           onChange={(event) => {
        handleChangeDiscription(event);
      }}  id="discription" name="discription" /> 
           
           {discriptionError ? <div className="validation" style={{ color: 'red' }}>{discriptionError}</div> : <p className="discription-hint">მინიმუმ 2 ასო, ქართლი ასოები</p>}

        </div>
<hr className="experience-hr2"></hr>

<button className="add-experience"><p className="add-experience-content">მეტი გამოცდილების დამატება</p></button>
<Link to='/info'>
<button className="previous-page"><p className="previous-page-content">უკან</p></button>
</Link>

<div>
           {checkErrors()}
        </div>


      </div>


  <div className="second">
        {/* <h1 className="return-name">{valuename}</h1>
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
        <hr className="return-hr2"></hr> */}
               <Experienceprops
// valuename={valuename}
// valuelastname={valuelastname}
valueposition={valueposition}
valueemployee={valueemployee}
valuestartdate={valuestartdate}
valueenddate={valueenddate}
valuediscription={valuediscription}
 />
      </div>
 





      
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  mapStateToProps: (valuename, valuelastname) => dispatch(mapStateToProps(valuename, valuelastname)),
});
const mapStateToProps = state => ({
  valuename: state.valuename,
  valuelastname: state.valuelastname,
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);