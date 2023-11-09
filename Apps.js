import React, { useState } from "react";
import "./App.css";
import Login from './login';
import Signup from "./Signup";
import backgroundImage from "./bg.jpeg"
import Madrid from './card'
import NavScrollExample from './nav';


function Apps() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [accountPage, setAccountPage] = useState(false);
  const isLoggedin = (App) => {
    setIsLogin(!isLogin);
  };

  const handleSetUsername = (username) => {
    setLoggedInUser(username);
  };

  const handleSignup = (formData) => {
    console.log("Registered User:", formData);
    alert("User registered successfully!");
  };

  const handleLogout = () => {
    setLoggedInUser("");
  };

  return (
    <div className="Apps" style={{background: `url(${backgroundImage})`, width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style = {{backgroundColor : "white", padding:"15px"}}> 
      <div>
       {" "}
        {loggedInUser === "" ? "" : <h2>Hello, {loggedInUser}!</h2>}{" "}
        {loggedInUser === "" ? (
          <div >
            {!accountPage ? (
              <div>
                <Login
                  setAccountPage={setAccountPage}
                  handleSetUsername={handleSetUsername}
                />{" "}
                {/* <button onClick={isLoggedin}>Sign Up</button> */}
              </div>
            ) : (
              <Signup
                handleSignup={handleSignup}
                setAccountPage={setAccountPage}
              />
            )}
          </div>
        ) : (
          ""
        )}
        <button onClick={handleLogout}>Logout</button>
    
      </div>
      </div>
    </div>

  );
}

export default Apps