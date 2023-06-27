import LeftMenu from "./LeftMenu";
import Navigation from "./Navigation";
import ProfilePageUser from "./ProfilePageUser";
import RightMenu from "./RightMenu";


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