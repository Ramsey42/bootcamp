import React, {useState, useEffect} from "react";
//assets
import Vector from '../../assets/images/Vector.png';
import Ellipse from '../../assets/images/Ellipse.png';
import EmailLogo from '../../assets/images/email.png';
import MobileLogo from '../../assets/images/mobile.png';
import './Genreal.css';

const General = () => {

    //  STATES
    // const [inputName, setInputName] = useState("");
    // const [inputLastname, setInputLastname] = useState("");
    // const [inputAbout, setInputAbout] = useState("");
    // const [inputEmail, setInputEmail] = useState("");
    // const [inputMobile, setInputMobile] = useState("");



    
    // handlechangers
    // function handleChangeName(event) {
    // setInputName(event.target.value);
    // }
    // function handleChangeLastname(event) {
    //     setInputLastname(event.target.value);
    // }
    // function handleChangeAbout(event) {
    //     setInputAbout(event.target.value);
    // }
    // function handleChangeEmail(event) {
    //     setInputEmail(event.target.value);
    // }
    // function handleChangeMobile(e) {
    //     setInputMobile(e.target.value);
    // }

    


      // localstorage
      //name
      const [valuename, setValuename] = useState(
        localStorage.getItem("inputFieldNameValue") || ""
      );
    
      useEffect(() => {
        localStorage.setItem("inputFieldNameValue", valuename);
      }, [valuename]);
 
      function handleChangeName(event) {
        setValuename(event.target.value);
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
      };




    return(
        <div style={{width:"100%", height:"100%"}}>
        <div className="left-div" >
              <img className="container" alt="" src={Ellipse}></img>
          <img alt='' className="vector" src={Vector}></img>
        
            <h1 className="general-header">პირადი ინფო</h1>
            
            <p className="general-pages">1/3</p>
            

            <hr className="general-hr"></hr>
            
            
<div className="parent-name">
    
            <label className="name-label" for="name">სახელი</label>

           <div className="frame">
           <input className="input-name" value={valuename}   onChange={(event) => {
        handleChangeName(event);
      }} type="text" id="name" name="name"/>
           
           </div>
           <p className="validation">მინიმუმ 2 ასო, ქართლი ასოები</p>
           </div>

{/* lastname input  */}
           <div className="parent-lastname">
    
            <label className="lastname-label" for="name">გვარი</label>

           <div className="frame-lastname">
           <input className="input-lastname" value={valuelastname} onChange={(event) => {
        handleChangeLastname(event);
            }} type="text" id="name" name="name"/>
           
           </div>
           <p className="validation-lastname">მინიმუმ 2 ასო, ქართლი ასოები</p>
           </div>

           <p className="upload-title">პირადი ფოტოს ატვირთვა</p>
         <div className="upload">
           <input   type="file" id="file-input" onChange={handleChangeUploader} />
           <label htmlFor="file-input">ატვირთვა</label>
           
           </div>
          {/* about */}
           <div className="about-container">
        <p className="about-title">ჩემ შესახებ (არასავალდებულო)</p>
        <textarea  value={valueabout} onChange={(event) => {
        handleChangeAbout(event);
            }} className="about-field">

        </textarea>
           </div>

           {/* email */}
           <div className="email-container">
        <p className="email-title">ელ.ფოსტა</p>
        <textarea value={valueemail}  onChange={(event) => {
        handleChangeEmail(event);
            }} className="email-field">

        </textarea>
        <p className="email-validation">უნდა მთავრდებოდეს @redberry.ge-ით</p>
           </div>

           {/* mobile */}
           <div className="mobile-container">
        <p className="mobile-title">მობილურის ნომერი</p>
        <textarea value={valuemobile} onChange={(event) => {
        handleChangeMobile(event);
            }} className="mobile-field">

        </textarea>
        <p className="mobile-validation">უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
           </div>
        <button className="submit-personal-info"><p className="submit-personal-info-content">შემდეგი</p> </button>
        </div>


        <div className="right-div">
<h1 className="output-name" >{valuename}</h1>
<h1 className="output-lastname">{valuelastname}</h1>
{image && <img className="output-image" src={image} alt="Uploaded" />}

<p className="output-email"><img style={{position:"absolute", marginLeft:"-20px"}}  alt="" src={EmailLogo}/>{valueemail}</p>
<p className="output-mobile"><img style={{position:"absolute", marginLeft:"-20px"}}  alt="" src={MobileLogo}/>{valuemobile}</p>
<h1 className="about-output-title">ჩემს შესახებ</h1>
<p className="about-output">{valueabout}</p>

        </div>
        </div>
    )
}

export default General;