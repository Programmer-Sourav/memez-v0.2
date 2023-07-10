import logo from './logo.svg';
import './App.css';

import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import MockMan from "mockman-js"
import { Toaster } from "react-hot-toast";
import { RequiresAuth } from './auth/RequiresAuth';
import Navigation from './pages/Navigation';
import LeftMenu from './pages/LeftMenu';
import MainView from './pages/MainView';
import RightMenu from './pages/RightMenu';
import Bookmark from './pages/Bookmark';
import {  ChakraProvider } from "@chakra-ui/react";
import MyProfile from './pages/MyProfile';
import ProfilePage from './pages/PoriflePage';
import ProfilePageOne from './pages/ProfilePageOne';
import Post from './pages/Post';
import PostContainer from './pages/PostContainer';
import Landing from './pages/Landing';
import Explore from './pages/Explore/Explore';
import ProfilePageTwo from './pages/ProfilePageTwo';
import PostDescription from './pages/PostDescription';
import InfinteScroll from './components/InfiniteScroll';

function App() {
  
  return (
    <div className="App">
       {<Toaster position="bottom-right" reverseOrder={true} />}
       <Routes>
          <Route path="/" element= {<Landing/>}/>
          <Route path='/landing' element= {<Landing/>}/>
          <Route path='/login'   element= {<Login/>}/>
          <Route path="/signup" element= {<Signup/>}/>
          <Route path="/home" element={<RequiresAuth><Home/></RequiresAuth>}/>
          {/* <Route path='/post' element= {<PostPage/>}/> */}
          <Route path='/mockman' element={<MockMan/>}/>
          {/* <Route path='/base' element={<LeftMenu/>}/> */}
          <Route path='/navigation' element={<Navigation/>}/>
          <Route path='/main' element={<MainView/>}/>
          <Route path='/right' element= {<RightMenu/>}/>
          <Route path='/bookmark' element={<RequiresAuth><InfinteScroll/></RequiresAuth>}/>
          <Route path='/myprofile' element={<RequiresAuth><ProfilePage/></RequiresAuth>}/>
          <Route path='/users/:_id' element={<RequiresAuth><ProfilePageOne/></RequiresAuth>}/>
          <Route path='/users/:_id' element={<RequiresAuth><ProfilePageTwo/></RequiresAuth>}/>
          <Route path='/post' element={<PostContainer/>}/>
          <Route path='/landing' element={<Landing/>}/>
          <Route path='/explore' element={<RequiresAuth><Explore/></RequiresAuth>}/>
          <Route path='/post/:_id' element={<PostDescription/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
