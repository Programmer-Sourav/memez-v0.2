import axios from "axios";
import { AUTH_ACTION_TYPE } from "../auth/ActionType";
import { toast } from "react-hot-toast";
import { ACTION_TYPES } from "../reducer/ActionType";



export const doLoginCall = (userEmail, userPassword, authDispatch) =>{
   
    axios.post('/api/auth/login', {
        username: userEmail,
        password: userPassword
      })
      .then(function (response) {
        const {foundUser, encodedToken} = response.data
       
            localStorage.setItem("encodedToken", encodedToken)
            if(localStorage.getItem("encodedToken")){
                authDispatch({type: AUTH_ACTION_TYPE.ACTION_SIGN_IN, payload: {token: localStorage.getItem("encodedToken"), isLoggedIn: true, authenticatedUser: foundUser}})
                toast.success("Successfully Logged In")
            }
      })
      .catch(function (error) {
        authDispatch({type: AUTH_ACTION_TYPE.FAILED_ATTEMPT, payload: {isLoggedIn: false}})
        toast.error("Error Signing In")
        console.log(error);
      });
    }

  

    export const doSignUpCall = (userEmail, userPassword, userFirstName, userLastName, authDispatch) =>{
      
        axios.post('/api/auth/signup', { 
            username: userEmail,
            password: userPassword,
            firstName: userFirstName,
            lastName: userLastName
          })
          .then(function (response) {
            const {createdUser, encodedToken} = response.data

            localStorage.setItem("encodedToken", encodedToken)
            
            if(localStorage.getItem("encodedToken")){
                authDispatch({type: AUTH_ACTION_TYPE.ACTION_SIGN_UP, payload: {token: localStorage.getItem("encodedToken"), isLoggedIn: true, authenticatedUser: createdUser}})
                toast.success("Successfully Registered.")
            }
          })
          .catch(function (error) {
            authDispatch({type: AUTH_ACTION_TYPE.FAILED_ATTEMPT, payload: {isLoggedIn: false}})
            toast.error("Error during Sign up. Please try again.")
            console.log(error);
          });
        }

           export const doCreateAPost = async (postText, token, homePageDispatch) =>{

            try{
              
                const res = await axios.post("/api/posts",
            
                      
                    { postData: { content: postText } },
                    {headers: {
                      authorization: token,
                    }}
                )
               
                const { posts } = res.data 
                
                homePageDispatch({type: ACTION_TYPES.CREATE_A_POST, payload: posts})
            }
            catch(e){
            console.error(e)
            }
        
        }

      export const doLikeAPost = async (postId, token, homePageDispatch) =>{
       
        try{
          
            const res = await fetch(`/api/posts/like/${postId}`,{
                method: 'POST',
                
                headers: {
                      authorization: token,
                    },
                  
               
            })
            
           
            const { posts } = await res.json();
            
            homePageDispatch({type: ACTION_TYPES.LIKE_A_POST, payload: posts})
           
            
        }
        catch(e){
        toast.error("Oops! Some Error Occured")
        }
    
    }
    export const doDisLikeAPost = async (postId, token, homePageDispatch) =>{
      
       try{
         
           const res = await fetch(`/api/posts/dislike/${postId}`,{
               method: 'POST',
               
               headers: {
                     authorization: token,
                   },
                 
              
           })
           
          
           const { posts } = await res.json();
           
           homePageDispatch({type: ACTION_TYPES.DISLIKE_A_POST, payload: posts})
          
           
       }
       catch(e){
       console.error(e)
       }
   
   }

   export const doSaveBookmark = async (postId, token, homePageDispatch) =>{
      console.log("POST ID ", postId)
    try{
      
        const res = await fetch(`/api/users/bookmark/${postId}`,{
            method: 'POST',
            
            headers: {
                  authorization: token,
                },
              
           
        })
        
       
        const { bookmarks } = await res.json();
        console.log(556, bookmarks)
        homePageDispatch({type: ACTION_TYPES.BOOKMARK, payload: bookmarks})
       
        
    }
    catch(e){
    console.error(e)
    }

}

export const doRemoveBookmark = async (postId, token, homePageDispatch) =>{
  console.log("POST ID ", postId)
try{
  
    const res = await fetch(`/api/users/remove-bookmark/${postId}`,{
        method: 'POST',
        
        headers: {
              authorization: token,
            },
          
       
    })
    
   
    const { bookmarks } = await res.json();
    console.log(556, bookmarks)
    homePageDispatch({type: ACTION_TYPES.REMOVE_BOOKMARK, payload: bookmarks})
   
    
}
catch(e){
console.error(e)
}

}


        