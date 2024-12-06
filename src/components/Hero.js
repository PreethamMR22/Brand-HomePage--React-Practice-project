import React from 'react'
import './Hero.css'
import shoe from '../photos/hero-image.png'
import Login from './Login'
import LeftTextHero from './LeftTextHero'
import RightPhotoDivHero from './RightPhotoDivHero'


function Hero(props) {
  return (
  <>
    <div className="mainDiv">
        
        <LeftTextHero/> 
        <Login/>



       <RightPhotoDivHero shoe={shoe}/>
    </div>

  </>
  )
}

export default Hero
