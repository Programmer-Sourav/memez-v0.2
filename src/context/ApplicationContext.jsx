import { useReducer, useEffect } from "react";
import { createContext } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { initialState } from "../reducer/InitialState";
import { ACTION_TYPES } from "../reducer/ActionType";
import axios from "axios";
import { AuthReducer } from "../auth/AuthReducer";
import { authInitialState } from "../auth/InitialState";

export const ApplicationContext = createContext()


export function ApplicationProvider({children}){

    //piping 
    const [state, homePageDispatch ] = useReducer(DataReducer, initialState)
    const [ authState, authDispatch ] = useReducer(AuthReducer, authInitialState)
   
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
   
    useEffect(()=>{setTimeout(() => {getPosts()}, 1000)},[])

    return(
        <ApplicationContext.Provider value ={{posts: state.currentPosts, homePageDispatch, token: authState.token, loginStatus: authState.isLoggedIn, authDispatch, authenticatedUser: authState.authenticatedUser, liked: state.liked}} > {children}</ApplicationContext.Provider>
    )

}