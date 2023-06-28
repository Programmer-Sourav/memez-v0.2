import { useParams } from "react-router-dom"
import LeftMenu from "./LeftMenu"
import Navigation from "./Navigation"
import { useContext } from "react"
import { ApplicationContext } from "../context/ApplicationContext"
import ProfilePageUser from "./ProfilePageUser"
import RightMenu from "./RightMenu"

export default function ProfilePageTwo(){

   const {firstName} = useParams()
   const { users } = useContext(ApplicationContext)

   function findTheUserDetailsForThisProfile(){
     const userFound = users.find((userItem)=>userItem._id===firstName)
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
    