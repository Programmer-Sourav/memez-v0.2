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

    return(
        <ApplicationContext.Provider value ={{posts: state.currentPosts, homePageDispatch, token: authState.token,
             loginStatus: authState.isLoggedIn, authDispatch, authenticatedUser: authState.authenticatedUser, 
             liked: state.liked, bookmarked: state.bookmarked, bookmarks: state.bookmarks, users: state.users, 
            following: state.following, postText, setPostText, editProfile, setEditProfile, onChnageBio, onChangeUrl, updatedUser: state.updatedUser,
            selectedProfilePic, setSelectedProfilePic}} > {children}</ApplicationContext.Provider>
    )

}