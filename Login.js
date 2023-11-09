import React, { useState } from "react";
import "./App.css";
import Signup from "./Signup";

function Login(props) {
  const { handleSetUsername, setAccountPage } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      if (username && password) {
        setIsLogin(true);
        handleSetUsername(username);
      } else {
        alert("Please enter a username and password.");
      }
    }
  };

  return (
    <div className="login" >
      <h1>Welcome to Our Website</h1>
      <div className="login-container">
        <h1 className="login-header">{isLogin ? "WELCOME!" : "LOGIN"}</h1>
        <div className="form-group">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br></br>
        <button className="comic-button" onClick={handleLogin}>
          {isLogin ? "LOGOUT" : "LOGIN"}
        </button>
        <div className="form-group">
          <button onClick={() => {setAccountPage(true)}} className="signup-button">
            Sign Up
          </button>

          <button className="forgot-password-button">Forgot Password</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
