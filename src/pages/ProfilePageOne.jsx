import { useParams } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import Navigation from "./Navigation";
import ProfilePageUser from "./ProfilePageUser";
import RightMenu from "./RightMenu";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";


export default function ProfilePageOne(){
 
   
   
    return(
        <div className="container"> 
         <Navigation/>
            <LeftMenu/>
            <ProfilePageUser/>
            <RightMenu/>  
        </div>
    )
}