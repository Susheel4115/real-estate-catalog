import React from "react";
import "./styles.css";
export default function Property() {
  return (
    <div className="main">
      <div className="form-container">
        <p>Length</p>
        <input type="text" id="name" placeholder="name" />
        <p>Total Area</p>
        <input type="text" id="name" placeholder="name" />
        <p>No of BHK</p>
        <input type="text" id="name" placeholder="name" />
        <p>Attached</p>
        <input type="text" id="name" placeholder="name" />
        <p>Furnished</p>
        <input type="text" id="name" placeholder="name" />
        <p>Lift</p>
        <input type="text" id="name" placeholder="name" />
        <p>Facing</p>
        <input type="text" id="name" placeholder="name" />
      </div>
      <div className="form-container">
        <p>Breadth</p>
        <input type="text" id="name" placeholder="name" />
        <p>Area unit</p>
        <input type="text" id="name" placeholder="name" />
        <p>No of floors</p>
        <input type="text" id="name" placeholder="name" />
        <p>western toilet</p>
        <input type="text" id="name" placeholder="name" />
        <p>Car parking</p>
        <input type="text" id="name" placeholder="name" />
        <p>Electricity</p>
        <input type="text" id="name" placeholder="name" />
      </div>
      <div className="button">
        <button className="btn">button1</button>
        <button className="btn">button2</button>
      </div>
    </div>
  );
}
