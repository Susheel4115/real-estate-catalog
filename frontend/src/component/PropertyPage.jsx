import React, { useState } from "react";
import SearchBAr from "./SearchBAr";
import SideBar from "./common/SideBar";
import Header from "./common/Header";
import DataTable from "./DataTable";
import "./CSS-property/userData.css";

const Property = ({user}) => {
  const [searchkey, setSearchKey] = useState("");
  return (
    <div className="userData-container">
      <SideBar />
      <div className="right-side">
        <Header user={user} />
        <div className="rectangle"></div>
        <SearchBAr searchkey = {searchkey} setSearchKey={setSearchKey}/>
        <DataTable searchkey = {searchkey}/>
      </div>
    </div>
  );
};

export default Property;
