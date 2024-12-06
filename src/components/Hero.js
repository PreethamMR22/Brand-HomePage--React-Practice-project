import React from 'react'
import 'D:\\program\\React Js\\learn React\\Mini projects\\myapp\\src\\components\\Hero.css'
import logo from '../photos/brand_logo.png'
function Hero() {
  return (
    <>
    <div className="MainDiv">
        <div className= "logo">
            <div className="logoArea">
            <img src={logo} alt="" />
            </div>

        </div>
        <div className="navbar">
            <div className="navin">
            <a href="#">Menu</a>
            <a href="#">Location</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            </div>
        </div>
        <div className="signup">
            <button calssName="Loginbtn">Login</button>

        </div>
    </div>
    
    </>
  )
}

export default Hero
