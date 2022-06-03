import React, { useState } from "react";
import "./styles.css";
import Header from "../../common/Header";
import SideBar from "../../common/SideBar";
import {useNavigate} from 'react-router-dom'
// import Nav from "../../common/Nav";

function Basic({user}){

  const [loan, setLoan] = useState("");
  const navigate = useNavigate();
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [property, setProperty] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.elements.loan.value)
    const data = {
      Property:e.target.elements.property.value
      // email:e.target.elements.email.value,
      // password:e.target.elements.password.value, 
    }
    // const JsonResponse = await fetch("http://localhost:5000/property", {
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body:JSON.stringify(data)
    // })
    // const response = await JsonResponse.json();
    // console.log(response);
    // if(response.status === "Sucess"){
    //   navigate("/")
    // }
    // else{
    //   alert(response.message);
    // }
    
  };

  return (
    <div className="basic">
      <SideBar />
      <div className="headform">
        <Header user={user} />
        {/* <Nav /> */}
        <div className="main">
          <form action="" className="form-basic" onSubmit={handleSubmit}>
            <div className="form">
              <div className="form-container">
                <h4>Property type</h4>

                <select className="input" name="cars" value={property} onChange={(e) => setProperty(e.target.value)}>
                  <option value="volvo">Select Property type</option>
                  <option value="saab">Flat</option>
                  <option value="fiat">House</option>
                  <option value="audi">Plot</option>
                </select>
                {/* <input
                  type="text"
                  id="name"
                  placeholder="select propery type"
                  className="input"
                /> */}

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
                value={loan}
                onChange={(e) => setLoan(e.target.value)}
                  type="text"
                  id="name"
                  placeholder="name"
                  className="input"
                />
                {/* <p className="p-data">Property type</p>
                <input type="text" className="name" placeholder="name" />
                <p className="p-data">Price</p>
                <input type="text" className="name" placeholder="name" />
                <p className="p-data">Property age</p>
                <input type="text" className="name" placeholder="name" />
                <p className="p-data">Property Description</p>
                <input type="text" className="name" placeholder="name" /> */}
              </div>
            </div>
            {/* <div className="form-container1">
                <p>Negotiable</p>
                <input type="text" className="name" placeholder="name" />
                <p>Ownership</p>
                <input type="text" className="name" placeholder="name" />
                className="p-data" <p>Property Approved</p>
                <input type="text" className="name" placeholder="name" />
                <p>Bank Loan</p>
                <input type="text" className="name" placeholder="name" />
              </div> */}
            {/* </div> */}
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

export default Basic;