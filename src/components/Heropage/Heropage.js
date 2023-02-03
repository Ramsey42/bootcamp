import React from 'react';
import {  Link } from 'react-router-dom';

import "./Heropage.css";

// assets
import Redberry from '../../assets/images/redberry.png';
import Gradients from '../../assets/images/gradient.png';
import logo from '../../assets/images/logo.png';


 const Header = () => {
return(
    <div>
        <img alt="img" draggable={false} src={Gradients} className='background-image' ></img>
        <img draggable={false} alt='' className='logo' src={logo} ></img>

        <img draggable={false} className='heroImage' alt="redberry" src={Redberry}></img>
        <hr className='hero-hr' ></hr>
       <Link to='/info'> 
       <button className='hero-button'>
           <p className='button-content'>რეზიუმეს დამატება</p>
        </button>
        </Link>
        
    </div>
)
 }





 export default Header;