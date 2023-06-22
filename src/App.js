import logo from './logo.svg';
import './App.css';

import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import MockMan from "mockman-js"
import { Toaster } from "react-hot-toast";
import { RequiresAuth } from './auth/RequiresAuth';
import PostPage from './pages/PostPage';
import Navigation from './pages/Navigation';
import LeftMenu from './pages/LeftMenu';
import MainView from './pages/MainView';
import RightMenu from './pages/RightMenu';
import Bookmark from './pages/Bookmark';
import {  ChakraProvider } from "@chakra-ui/react";
import MyProfile from './pages/MyProfile';

function App() {
  
  return (
    <div className="App">
       {<Toaster position="bottom-right" reverseOrder={true} />}
       <Routes>
          <Route path="/" element= {<Login/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path="/signup" element= {<Signup/>}/>
          <Route path="/home" element={<RequiresAuth><Home/></RequiresAuth>}/>
          {/* <Route path='/post' element= {<PostPage/>}/> */}
          <Route path='/mockman' element={<MockMan/>}/>
          {/* <Route path='/base' element={<LeftMenu/>}/> */}
          <Route path='/navigation' element={<Navigation/>}/>
          <Route path='/main' element={<MainView/>}/>
          <Route path='/right' element= {<RightMenu/>}/>
          <Route path='/bookmark' element={<Bookmark/>}/>
          <Route path='/myprofile' element={<MyProfile/>}/>
        </Routes>
        {/* <ChakraProvider><LeftMenu/></ChakraProvider> */}
    </div>
  );
}

export default App;
