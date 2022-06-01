import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './CSS-property/SignIn.css';

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <img src="" alt="no data" />
          </span>
          <Link to='/property'>
            <button type="submit" className="submit-button">
              Sign in
            </button>
          </Link>
        </form>
      </div>
      <div>
        <p className="para">Don't have an account?<Link to='/Signup' style={{fontWeight: 'bold'}}> SignUp</Link></p>
      </div>
      
    </div>
  );
}
export default Signin