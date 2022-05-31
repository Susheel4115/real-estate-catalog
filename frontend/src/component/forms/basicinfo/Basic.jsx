import React from "react";
import "./styles.css";
export default function Basic() {
  return (
    <div className="main">
      <div className="form-container">
        <h2>Name</h2>
        <input type="text" id="name" placeholder="name" />
        <input type="text" id="name" placeholder="name" />
        <input type="text" id="name" placeholder="name" />
        <input type="text" id="name" placeholder="name" />
      </div>
      <div className="form-container">
        <input type="text" id="name" placeholder="name" />
        <input type="text" id="name" placeholder="name" />
        <input type="text" id="name" placeholder="name" />
        <input type="text" id="name" placeholder="name" />
      </div>
      <button className="btn">button1</button>
      <button className="btn">button2</button>
    </div>
  );
}
