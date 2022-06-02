import React from "react";
import "./styles.css";
import Header from "../../common/Header";
import SideBar from "../../common/SideBar";
import Nav from "../../common/Nav";

export default function Basic() {
  return (
    <div className="basic">
      <SideBar />
      <div className="headform">
        <Header />
        {/* <Nav /> */}
        <div className="main">
          <form action="">
            <div className="form">
              <div className="form-container">
                <p>Property type</p>
                <input type="text" id="name" placeholder="name" />
                <p>Price</p>
                <input type="text" id="name" placeholder="name" />
                <p>Property age</p>
                <input type="text" id="name" placeholder="name" />
                <p>Property Description</p>
                <input type="text" id="name" placeholder="name" />
              </div>
              <div className="form-container1">
                <p>Negotiable</p>
                <input type="text" id="name" placeholder="name" />
                <p>Ownership</p>
                <input type="text" id="name" placeholder="name" />
                <p>Property Approved</p>
                <input type="text" id="name" placeholder="name" />
                <p>Bank Loan</p>
                <input type="text" id="name" placeholder="name" />
              </div>
            </div>
            <div className="button">
              <button className="btn1">Cancel</button>
              <button className="btn2">Save & continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
