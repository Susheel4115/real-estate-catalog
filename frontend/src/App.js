
import { BrowserRouter, Route, Routes } from "react-router-dom";


// import Basic from "./component/forms/basicinfo/Basic";
import Basic from "./component/forms/basicinfo/Basic";
import Property from "./component/PropertyPage";
import Signin from "./component/SignIn";
import Signup from "./component/SignUp";
import Propertypage from "./component/forms/propertydetails/Property";
import Location from "./component/forms/Location_info/Location"
import General from "./component/forms/General_info/General"
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    UserID:"NA",
    UserName:"NA"
  });
  const [data,setData]=useState({
    PPID:0,
    Property:"na",
    Area:"na",
    Contact:"na",
    Views:"na",
    Duration:"na",
    Status:"unsold"
  })
  // const [area,setArea]=useState({
  //   Area:"na"
  // }
   
  // );
  // const [contact,setContact]=useState()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Signin setUser = {setUser} />} />
        {/* login page */}
        <Route path="/SignUp" element={<Signup />} />
        {/* registration page */}
        <Route path="/property" element={<Property user={user}/>} /> 
        {/* property page */}
        <Route path="/Basic" element={<Basic user={user} data={data} setData={setData}/>} />
        <Route path="/PropertyDetails" element={<Propertypage user={user} data={data}setData={setData} />}/>
        <Route path="/General" element={<General user={user} data={data} setData={setData}/>}/>
        <Route path="/location" element={<Location user={user} data={data} />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
