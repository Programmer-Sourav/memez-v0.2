import LeftMenu from "./LeftMenu";
import Navigation from "./Navigation";
import Post from "./Post";
import RightMenu from "./RightMenu";

export default function PostContainer(){

    return(
        <div className="container"> 
         <Navigation/>
            <LeftMenu/>
            <Post/>
            <RightMenu/>  

        </div>
    )
}