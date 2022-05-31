import React from "react";
import "./styles.css";
export default function Basic() {
  return (
    <div className="main">
      <label for="name">Name</label>
      <input type="text" id="name" />
    </div>
  );
}
