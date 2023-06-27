import { useParams } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import Navigation from "./Navigation";
import ProfilePageUser from "./ProfilePageUser";
import RightMenu from "./RightMenu";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";


export default function ProfilePageOne(){
   const {id} = useParams()
   const { users } = useContext(ApplicationContext)

   function findTheUserDetailsForThisProfile(){
     const userFound = users.find((userItem)=>userItem._id===id)
     return userFound
   }

   const findUser = findTheUserDetailsForThisProfile()
   
   
    return(
        <div className="container"> 
         <Navigation/>
            <LeftMenu/>
            <ProfilePageUser profileData = {findUser}/>
            <RightMenu/>  
        </div>
    )
}