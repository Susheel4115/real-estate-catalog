import React from "react";
import SearchBAr from "./SearchBAr";
import SideBar from "./common/SideBar";
import Header from "./common/Header";
import DataTable from "./DataTable";
import "./CSS-property/userData.css";

const UserData = () => {
  return (
    <div className="userData-container">
      <SideBar />
      <div className="right-side">
        <Header />
        <div className="rectangle"></div>
        <SearchBAr />
        <DataTable />
      </div>
    </div>
  );
};

export default UserData;
