import React from "react";
import './Educationprops.css';
import Star from '../../assets/images/star.png';
import EmailLogo from '../../assets/images/email.png';
import MobileLogo from '../../assets/images/mobile.png';
const Educationprops = () => {
    return(
<div>
<h1 className="return-name">ანზორ</h1>
        <h1 className="return-lastname">ანზორაშვილი</h1>
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
        <hr className="return-hr2"></hr>



        <h1 className="return-aducationtitle">განათლება</h1>
        <h1 className="return-degreedegree">წმ. ანდრიას საპატრიარქოს სასწავლებელი,</h1>
        <h1 className="return-degree">სტუდენტი</h1>
        <h1 className="return-graduationdate">2020-02-02</h1>
        <p className="return-aducation-description">
        ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი. კომპიუტერები 
        მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. მეუნებოდნენ —
         დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და ჩაგიკაკუნებსო. აჰა,
          მოვიდა დრო და ვერა ვარ დეველოპერი?
        </p>
</div>
    )
} 

export default Educationprops;