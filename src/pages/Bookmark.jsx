import { useContext } from "react";
import BookmarkView from "./BookmarkView";
import LeftMenu from "./LeftMenu";
import Navigation from "./Navigation";
import RightMenu from "./RightMenu";
import { ApplicationContext } from "../context/ApplicationContext";


export default function Bookmark(){

    const { bookmarked } = useContext(ApplicationContext)
    console.log(4545, bookmarked)
    return(
        <div className="container">
            <div className="left-side">
            <LeftMenu/>
            </div>
            <div className="main">
                < BookmarkView bookmarks= {bookmarked} />
            </div>
            <div className="right-side">
                <RightMenu/>
            </div>
        </div>
    )
}