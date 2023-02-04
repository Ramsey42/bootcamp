import React, {useState} from "react";
//assets
import Vector from '../../assets/images/Vector.png';
import Ellipse from '../../assets/images/Ellipse.png';
import Example from '../../assets/images/example.jpg'
import EmailLogo from '../../assets/images/email.png';
import MobileLogo from '../../assets/images/mobile.png';
import './Genreal.css';

const General = () => {

    //  STATES
    const [inputName, setInputName] = useState("");
    const [inputLastname, setInputLastname] = useState("");
    const [inputAbout, setInputAbout] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputMobile, setInputMobile] = useState("");
    
    // handlechangers
    function handleChangeName(event) {
    setInputName(event.target.value);
    }
    function handleChangeLastname(event) {
        setInputLastname(event.target.value);
    }
    function handleChangeAbout(event) {
        setInputAbout(event.target.value);
    }
    function handleChangeEmail(event) {
        setInputEmail(event.target.value);
    }
    function handleChangeMobile(e) {
        setInputMobile(e.target.value);
    }
 


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
           <input className="input-name" onChange={handleChangeName} type="text" id="name" name="name"/>
           
           </div>
           <p className="validation">მინიმუმ 2 ასო, ქართლი ასოები</p>
           </div>

{/* lastname input  */}
           <div className="parent-lastname">
    
            <label className="lastname-label" for="name">გვარი</label>

           <div className="frame-lastname">
           <input className="input-lastname" onChange={handleChangeLastname}  type="text" id="name" name="name"/>
           
           </div>
           <p className="validation-lastname">მინიმუმ 2 ასო, ქართლი ასოები</p>
           </div>

           <p className="upload-title">პირადი ფოტოს ატვირთვა</p>
           <button className="upload" type="file" >ატვირთვა</button>

          {/* about */}
           <div className="about-container">
        <p className="about-title">ჩემ შესახებ (არასავალდებულო)</p>
        <textarea onChange={handleChangeAbout} className="about-field">

        </textarea>
           </div>

           {/* email */}
           <div className="email-container">
        <p className="email-title">ელ.ფოსტა</p>
        <textarea onChange={handleChangeEmail} className="email-field">

        </textarea>
        <p className="email-validation">უნდა მთავრდებოდეს @redberry.ge-ით</p>
           </div>

           {/* mobile */}
           <div className="mobile-container">
        <p className="mobile-title">მობილურის ნომერი</p>
        <textarea onChange={handleChangeMobile} className="mobile-field">

        </textarea>
        <p className="mobile-validation">უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
           </div>
        <button className="submit-personal-info"><p className="submit-personal-info-content">შემდეგი</p> </button>
        </div>


        <div className="right-div">
<h1 className="output-name">{inputName}</h1>
<h1 className="output-lastname">{inputLastname}</h1>
<img alt="" className="output-image" src={Example}></img>
<p className="output-email"><img style={{position:"absolute", marginLeft:"-20px"}}  alt="" src={EmailLogo}/>{inputEmail}</p>
<p className="output-mobile"><img style={{position:"absolute", marginLeft:"-20px"}}  alt="" src={MobileLogo}/>{inputMobile}</p>
<h1 className="about-output-title">ჩემს შესახებ</h1>
<p className="about-output">{inputAbout}</p>

        </div>
        </div>
    )
}

export default General;