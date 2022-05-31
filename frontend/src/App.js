<<<<<<< HEAD
import './App.css';
import SignIn from './component/SignIn';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import SignUp from './component/SignUp';
import UserData from './component/PropertyPage';
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserData from "./component/UserData";
>>>>>>> 4322a7fc0d207129fcd108408b2ffb5ae58850c4

import Signin from "./component/SignIn";
import Signup from "./component/SignUp";

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
