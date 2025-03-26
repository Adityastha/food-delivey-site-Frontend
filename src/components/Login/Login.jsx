import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
const Login = ({ setShowLogin }) => {
  const [currentState, setcurrentState] = useState("Login");
  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter Your name" required />
          )}

          <input type="email" placeholder="Enter Your email" required />
          <input type="password" placeholder="Enter Your Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By, continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setcurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
