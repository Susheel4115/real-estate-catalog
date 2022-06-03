import React from "react";
import "./styles.css";
import SideBar from "../../common/SideBar";
import Header from "../../common/Header";
export default function Property() {
  return (
    <div className="basic">
      <SideBar />
      <div className="headform">
        <Header />

        <div className="main">
          <form action="">
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
                <p className="p-data">Negotiable</p>
                <input type="text" className="name" placeholder="name" />
                <p className="p-data">Ownership</p>
                <input type="text" className="name" placeholder="name" />
                <p className="p-data">Property Approved</p>
                <input type="text" className="name"  placeholder="name" />
                <p className="p-data">Bank Loan</p>
                <input type="text" className="name" placeholder="name" />
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
