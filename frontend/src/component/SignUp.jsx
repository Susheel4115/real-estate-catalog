import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sign-up-parent">
      <div className="sign-up-form-container">
        <h1 style={{ color: "#4c57b6" }}>Logo</h1>
        <p>Create New Account</p>
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
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="confirm-password"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Link to='/AllProperties'>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
          </Link>
          
        </form>
      </div>
      {/* <Link to="/signin">
        <h3>Sign In</h3>
      </Link> */}
    </div>
  );
}
export default Signup;