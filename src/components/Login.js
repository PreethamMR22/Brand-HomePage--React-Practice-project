import React from 'react'
import './Login.css'
function Login() {
  return (
    <>
    <div className="outerCover">

  
    <div className="main">


        <div className="header">
            <div className="headline">
                <h1 >User Login</h1>
            </div>
            <div className="tagLine">
                <pre>Enter your details to get logged into Your Account
                </pre>
                </div>
        </div>
        <div className="inputField">
            <div className="email">
                <input type="email" placeholder="Email address" className="emailInput" />
            </div>
            <div className="password">
                <input type="password" placeholder='password' className="passwordInput" />
            </div>
            <div className="trouble">
                <p>Already have an account? <a href='#'>SignUp</a></p>
            </div>
        </div>
    <div className="loginField">
        <div className="btnClass"> 
    <button className="signin">Sign in</button>
        </div >    
        <div className="orSignIn">
            <p>-Or Sign in with-</p></div>

    </div>

    <div className="outListener">
    <div className="listing">
        <div className="google">
            <div className="googleLogin btnDesign"><i className="fa-brands fa-google"></i>Google</div>
        </div>
        <div className="facebook">
            <div className="facebookLogin btnDesign"><i className="fa-brands fa-facebook"></i>FaceBook</div>
        </div>
        <div className="apple">
            <div className="appleLogin btnDesign"><i className="fa-brands fa-apple"></i>Apple </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login
