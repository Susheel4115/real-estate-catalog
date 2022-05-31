import './App.css';
import SignIn from './component/SignIn';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import SignUp from './component/SignUp';
import UserData from './component/PropertyPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<SignIn/>}/>
      <Route path='/SignUP' element={<SignUp/>}/>
      <Route path='User' element={<UserData/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
