import SignIn from "./component/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/SignUp";
import UserData from "./component/UserData";
import Basic from "./component/forms/basicinfo/Basic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SignIn />} />
        <Route path="/SignUP" element={<SignUp />} />
        <Route path="/User" element={<UserData />} />
        <Route path="/property" element={<Basic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
