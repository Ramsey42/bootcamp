import React from "react";
//assets
import Vector from '../../assets/images/Vector.png';
import Ellipse from '../../assets/images/Ellipse.png';
import './Genreal.css';

const General = () => {

    return(
        <div>
              <img className="container" alt="" src={Ellipse}></img>
          <img alt='' className="vector" src={Vector}></img>
        
            <h1 className="general-header">პირადი ინფო</h1>
            
            <p className="general-pages">1/3</p>
            

            <hr className="general-hr"></hr>
            
            
<div className="parent-name">
    
            <label className="name-label" for="name">სახელი</label>

           <div className="frame">
           <input className="input-name" type="text" id="name" name="name"/>
           
           </div>
           <p className="validation">მინიმუმ 2 ასო, ქართლი ასოები</p>
           </div>

{/* lastname input  */}
           <div className="parent-lastname">
    
            <label className="lastname-label" for="name">გვარი</label>

           <div className="frame-lastname">
           <input className="input-lastname" type="text" id="name" name="name"/>
           
           </div>
           <p className="validation-lastname">მინიმუმ 2 ასო, ქართლი ასოები</p>
           </div>

           <p className="upload-title">პირადი ფოტოს ატვირთვა</p>
           <button className="upload" type="file" >ატვირთვა</button>

          {/* about */}
           <div className="about-container">
        <p className="about-title">ჩემ შესახებ (არასავალდებულო)</p>
        <textarea className="about-field">

        </textarea>
           </div>

           {/* email */}
           <div className="email-container">
        <p className="email-title">ელ.ფოსტა</p>
        <textarea className="email-field">

        </textarea>
        <p className="email-validation">უნდა მთავრდებოდეს @redberry.ge-ით</p>
           </div>

           {/* mobile */}
           <div className="mobile-container">
        <p className="mobile-title">მობილურის ნომერი</p>
        <textarea className="mobile-field">

        </textarea>
        <p className="mobile-validation">უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
           </div>
        <button className="submit-personal-info"><p className="submit-personal-info-content">შემდეგი</p> </button>
        </div>
    )
}

export default General;