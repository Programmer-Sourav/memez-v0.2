
import { useContext } from "react";
import LeftMenu from "./LeftMenu";
import Navigation from "./Navigation";
import PostPage from "./PostPage";
import RightMenu from "./RightMenu";
import { ApplicationContext } from "../context/ApplicationContext";




export default function PostDescription(){

    const { posts } = useContext(ApplicationContext)

    return(
        <div className="container">
        <Navigation/>
        <LeftMenu/>
        <PostPage posts={posts}/>
        <RightMenu/>
        </div>
    )
}