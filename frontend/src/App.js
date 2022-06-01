import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserData from "./component/PropertyPage";

import Signin from "./component/SignIn";
import Signup from "./component/SignUp";

import Basic from "./component/forms/basicinfo/Basic";
import Header from "./component/common/Header";
import SideBar from "./component/common/SideBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Signin />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="User" element={<UserData />} />
        <Route path="/basic" element={<Basic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
