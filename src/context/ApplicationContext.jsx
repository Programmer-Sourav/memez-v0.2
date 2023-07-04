import { useReducer, useEffect } from "react";
import { createContext } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { initialState } from "../reducer/InitialState";
import { ACTION_TYPES } from "../reducer/ActionType";
import axios from "axios";
import { AuthReducer } from "../auth/AuthReducer";
import { authInitialState } from "../auth/InitialState";
import { useState } from "react";

export const ApplicationContext = createContext()


export function ApplicationProvider({children}){

    //piping 
    const [state, homePageDispatch ] = useReducer(DataReducer, initialState)
    const [ authState, authDispatch ] = useReducer(AuthReducer, authInitialState)
    const [ postText, setPostText ] = useState("")
    const [ editProfile, setEditProfile ] = useState({bio:'Your bio', url: 'website url here'})
    const [selectedProfilePic, setSelectedProfilePic] = useState({image: ""})

    const [ items, setItems ] =  useState([])
    const [ postContent, setPostContent] = useState("")
   


    const imagedata = [{id: 1, image: require("../avatars/avatar2.png"), selected: false}, 
    {id: 2, image: require("../avatars/avatar1.png"), selected: false}, 
    {id: 3, image: require("../avatars/avatar3.png"), selected: false},
    {id: 4, image: require("../avatars/avatar4.png"), selected: false},
    {id: 5, image: require("../avatars/avatar5.png"), selected: false},
    {id: 6, image: require("../avatars/avatar6.png"), selected: false}]
    const [images, updateImages ] = useState(imagedata)   
    const findUrl = images.find((imageItem)=>imageItem.id===5)   //default selection
   const [profileImage, setProfileImage] = useState({image:findUrl.image})  
   
    const getPosts = () =>{
    axios({
        method: 'get',
        url: '/api/posts'
      })
        .then(function (response) {
         const { posts } = response.data;
         

        homePageDispatch(
            {type: ACTION_TYPES.INITIALIZE,
             payload: posts
            }
        )
        });
    }

    const onChnageBio = (e) =>{
       //console.log(4545, {...editProfile, bio: e.target.value})
       setEditProfile({...editProfile, bio: e.target.value})
    }
    const onChangeUrl = (e) =>{
        setEditProfile({...editProfile, url: e.target.value})
     }
   
    useEffect(()=>{setTimeout(() => {getPosts()}, 1000)},[])

    const setData = (newItems) =>{
        console.log("SET ", newItems, newItems.length)
        console.log("Before setItems")
       setItems([...newItems])
       console.log("Below setItems", setItems.length)
    }
    

    return(
        <ApplicationContext.Provider value ={{posts: state.currentPosts, homePageDispatch, token: authState.token,
             loginStatus: authState.isLoggedIn, authDispatch, authenticatedUser: authState.authenticatedUser, 
             liked: state.liked, bookmarked: state.bookmarked, bookmarks: state.bookmarks, users: state.users, 
            following: state.following, postText, setPostText, editProfile, setEditProfile, onChnageBio, onChangeUrl, updatedUser: state.updatedUser,
            selectedProfilePic, setSelectedProfilePic, updateImages, profileImage, setProfileImage, images, imagedata, toFollow: state.toFollow, items, setItems, setData, postContent, setPostContent}} > {children}</ApplicationContext.Provider>
    )

}