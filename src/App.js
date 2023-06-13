import logo from './logo.svg';
import './App.css';

import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"


function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element= {<Login/>}/>
          <Route path="/signup" element= {<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          {/* <Route path="/mockman" element={<MockMan/>}/> */}
        </Routes>
    </div>
  );
}

export default App;
