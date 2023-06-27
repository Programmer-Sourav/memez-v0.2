import LeftMenu from "../LeftMenu";
import Navigation from "../Navigation";
import RightMenu from "../RightMenu";
import ExploreView from "./Exploreview";



export default function Explore(){

    return(
        <div className="container">
        <Navigation/>
        <LeftMenu/>
        <ExploreView/>
        <RightMenu/>
        </div>
    )
}