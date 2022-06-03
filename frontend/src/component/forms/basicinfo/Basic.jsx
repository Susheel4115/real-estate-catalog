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
                <h4>Property type</h4>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="input"
                />
                <h4>Price</h4>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="input"
                />
                <h4>Property age</h4>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="input"
                />
                <h4>Property Description</h4>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="input"
                />
              </div>
              <div className="form-container1">
                <h4>Negotiable</h4>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="input"
                />
                <h4>Ownership</h4>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="input"
                />
                <h4>Property Approved</h4>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="input"
                />
                <h4>Bank Loan</h4>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="input"
                />
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
