import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserData from "./component/PropertyPage";
import Basic from "./component/forms/basicinfo/Basic";
import Property from "./component/forms/propertydetails/Property";

import Signin from "./component/SignIn";
import Signup from "./component/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/property" element={<UserData />} />
        <Route path="/BasicInfo" element={<Basic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
