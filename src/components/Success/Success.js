import React from "react";
import './Success.css';

//assets

import MobileLogo from '../../assets/images/mobile.png'
import EmailLogo from '../../assets/images/email.png';
import Star from '../../assets/images/star.png';
import Rect from '../../assets/images/Rect.png';

const Success = () => {
    return (
        <div className="success-wrapper">
        <div className="cv-wrapper">
            <div className="cv-name">ანზორ</div>
            <div className="cv-lastname">მუმლაძე</div>
            <img alt='' src={EmailLogo} className='cv-emaillogo'></img>
            <div className="cv-email">anzorr666@redberry.ge</div>
            <img alt='' src={MobileLogo} className='cv-mobilelogo'></img>
            <div className="cv-mobile">+99511111111</div>

            <img alt='' src={Rect} className='cv-image'></img>

            <h1 className="cv-about-title">ჩემ შესახებ</h1>
            <p className="cv-about-discription">ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები 
            გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.</p>
            <hr className="cv-hr1"></hr>
            <h1 className="cv-experience-title">გამოცდილება</h1>
            <h1 className="cv-position">React Native Developer,</h1>
            <h1  className="cv-company">Microsoft</h1>
            <h1 className="cv-date">2020=09-23 - 2020-09-23</h1>
            <p className="cv-experience-discription">Experienced Javascript Native Developer with 5 years in the industry.
                 proficient withreact. Used problem-solving aptitude to
                 encahge application performance by 14%.created data visualisation tools and integrated designs</p>
                 <hr className="cv-hr2"></hr>
            <h1 className="cv-education-title">განათლება</h1>
            <h1 className="cv-university">წმ. სასწავლებელი</h1>
            <h1 className="cv-education-degree">სტუდენტი</h1>
            <h1 className="cv-education-date">2020-02-02</h1>
            <p className="cv-education-discription"> ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები.    
         რაც შემეძლო — ვქენი. კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. მეუნებოდნენ — დაჯექი, წაიკითხე რამე,
             რას აკაკუნებ, დრო მოვა და ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?</p>
       <img className="cv-star" alt='' src={Star}></img>
        </div>

        <div className="success-message">
            <h1 className="success-message-content">რეზიუმე წარმატებით გაიგზავნა</h1>
        </div>
        </div>
    )
}

export default Success;