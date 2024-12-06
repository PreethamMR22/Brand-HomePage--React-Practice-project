import React from 'react'
import 'D:\\program\\React Js\\learn React\\Mini projects\\myapp\\src\\components\\Header.css'
import logo from '../photos/brand_logo.png'
function Hero(props) {
  const handleLogin=()=> {
      props.setLogin(!props.login);
  }

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
            <a href="#">MENU</a>
            <a href="#">LOCATION</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
            </div>
        </div>
        <div className="signup">
            <button className="Loginbtn" onClick={handleLogin}>Login</button>

        </div>
    </div>
    
    </>
  )
}

export default Hero
