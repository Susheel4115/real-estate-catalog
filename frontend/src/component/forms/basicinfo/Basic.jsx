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
          <form action="" className="form-basic">
            <div className="form">
              <div className="form-container">
                <p className="p-data">Property type</p>
                <input type="text" className="name" placeholder="name" />
                <p className="p-data">Price</p>
                <input type="text" className="name" placeholder="name" />
                <p className="p-data">Property age</p>
                <input type="text" className="name" placeholder="name" />
                <p className="p-data">Property Description</p>
                <input type="text" className="name" placeholder="name" />
              </div>
              <div className="form-container1">
                <p>Negotiable</p>
                <input type="text" className="name" placeholder="name" />
                <p>Ownership</p>
                <input type="text" className="name" placeholder="name" />
            className="p-data"     <p>Property Approved</p>
                <input type="text" className="name" placeholder="name" />
                <p>Bank Loan</p>
                <input type="text" className="name" placeholder="name" />
              </div>
            </div>
            <div className="button">
              <button className="btn1 ">Cancel</button>
              <button className="btn2">Save & continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
