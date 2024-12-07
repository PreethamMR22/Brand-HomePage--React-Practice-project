import React from 'react'
import 'D:\\program\\React Js\\learn React\\Mini projects\\myapp\\src\\components\\Header.css'
import logo from '../photos/brand_logo.png'
import { Link } from 'react-router-dom';
function Hero(props) {
  const handleLogin=()=> {
      props.setLogin(!props.login);
  }
const handleLoginVisible=()=> {
    props.setLogin(false);
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
            <Link to="/" onClick={handleLoginVisible}>HOME</Link>
            <Link to="#">MENU</Link>
            <Link to="#">LOCATION</Link>
            <Link to="#">CONTACT</Link>
            </div>
        </div>
        <div className="signup">

            <Link to ="/login">
            <button className="Loginbtn" onClick={handleLogin} style={{opacity:props.login?"0":"1"}}>SignIn</button>
            </Link>
        </div>
    </div>
    
    </>
  )
}

export default Hero
