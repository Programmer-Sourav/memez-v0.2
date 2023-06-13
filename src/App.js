import logo from './logo.svg';
import './App.css';

import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import { Toaster } from "react-hot-toast";
import { RequiresAuth } from './auth/RequiresAuth';

function App() {
  return (
    <div className="App">
       {<Toaster position="bottom-right" reverseOrder={true} />}
       <Routes>
          <Route path="/" element= {<Login/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path="/signup" element= {<Signup/>}/>
          <Route path="/home" element={<RequiresAuth><Home/></RequiresAuth>}/>
        </Routes>
    </div>
  );
}

export default App;
