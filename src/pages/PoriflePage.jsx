import LeftMenu from "./LeftMenu";
import MyProfile from "./MyProfile";
import Navigation from "./Navigation";
import RightMenu from "./RightMenu";

export default function ProfilePage(){

    return(
        <div className="container">
            <Navigation/>
            <LeftMenu/>
            <MyProfile/>
            <RightMenu/>  
         </div>
    )
}