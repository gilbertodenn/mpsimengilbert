import React, { useState } from "react";
import "./Signup.css";

const Signup = (props) => {
  const { handleSignup, setAccountPage } = props;
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(formData);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button onClick={() => {setAccountPage(false)}}>Back to Login</button>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
