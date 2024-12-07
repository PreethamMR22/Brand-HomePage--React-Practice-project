import React from 'react';
import './Hero.css';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import from react-router-dom
import shoe from '../photos/hero-image.png';
import Login from './Login';
import LeftTextHero from './LeftTextHero';
import RightPhotoDivHero from './RightPhotoDivHero';
import AnimatedComponents from './AnimatedComponents';


function Hero() {
  const location=useLocation();
  return (
    <>
      <div className="mainDiv">
        
        <AnimatedComponents/>

     
        <RightPhotoDivHero shoe={shoe} />
      </div>
    </>
  );
}

export default Hero;
