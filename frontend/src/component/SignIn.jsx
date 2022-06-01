import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './CSS-property/SignIn.css';
import eye from '../images/eye.png';

function Signin() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email:e.target.elements.email.value,
      password:e.target.elements.password.value
    }
    const JsonResponse = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(data)
    })
    const response = await JsonResponse.json();
    if(response.status === "Success"){
      navigate("/property")
    }
    else{
      alert(response.status);
    }
    console.log(response);
  };
  return (
    <div className="sign-in-parent">
      <div className="sign-in-form-container">
        <h1 style={{ color: "#4c57b6" }}>Logo</h1>
        <p>Enter your credentials to access your Account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="UserID"
            id="email"
            placeholder="Mail ID"
            name="UserID"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >

            <img src={eye} alt="no data" />
          </span>
            <button type="submit" className="submit-button">
              Sign in
            </button>
        </form>
      </div>
      <div>
        <p className="para">Don't have an account?<Link to='/Signup' style={{fontWeight: 'bold'}}> SignUp</Link></p>
      </div>
      
    </div>
  );
}
export default Signin