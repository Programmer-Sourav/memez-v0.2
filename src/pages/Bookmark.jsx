import { useContext, useEffect } from "react";
import BookmarkView from "./BookmarkView";
import LeftMenu from "./LeftMenu";
import Navigation from "./Navigation";
import RightMenu from "./RightMenu";
import { ApplicationContext } from "../context/ApplicationContext";
import { doDownloadBookMark } from "../remote-apis/api-calls";




export default function Bookmark(){

    const { bookmarked, bookmarks, token, homePageDispatch } = useContext(ApplicationContext)


    useEffect(()=>{
        doDownloadBookMark(token, homePageDispatch)
    },[])
    
    return(
        <body>
        <div className="container">
            <Navigation/>
            <LeftMenu/>
            
         
                < BookmarkView bookmarks= {bookmarks} />
         
                <RightMenu/>
        
        </div>
        </body>
    )
}