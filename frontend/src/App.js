import Signin from "./component/SignIn";
import Signup from "./component/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserData from "./component/UserData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Signin />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="User" element={<UserData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
