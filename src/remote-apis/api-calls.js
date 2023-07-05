import axios from "axios";
import { AUTH_ACTION_TYPE } from "../auth/ActionType";
import { toast } from "react-hot-toast";
import { ACTION_TYPES } from "../reducer/ActionType";
import { position } from "@chakra-ui/styled-system";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";



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
        
      });
    }

  
    export const doSignUpCall = (userFirstName, userName, userEmail, userPassword,  authDispatch) =>{
      
        axios.post('/api/auth/signup', { 
            username: userName,
            password: userPassword,
            firstName: userFirstName,
            userEmail: userEmail
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
            
          });
        }

           export const doCreateAPost = async (postText, postContent, token,  homePageDispatch) =>{
            // let contentToSend; 
            // if(postTe!==null){
            //    contentToSend = postText + postContent
            // }
            // else{
            //   contentToSend = postText
            // }
          
            let resourceType, status
            
            const isVideo = (postContent) => {
              return (postContent.match(/\.(mpg|mp2|mpeg|mpe|mpv|mp4)$/) != null);
            }

            function isImage(postContent) {
              return (postContent.match(/\.(jpg|jpeg|gif|png)$/) != null);
            }
            
            if(isImage(postContent))
               resourceType = "image"
            if(isVideo(postContent))
               resourceType = "video"   
              
            try{
              
                const res = await axios.post("/api/posts",
            
                      
                    { postData: { content: postText, postContent, resourceType} },
                    {headers: {
                      authorization: token,
                    }}
                )
               
                const { posts } = res.data 
                
                homePageDispatch({type: ACTION_TYPES.CREATE_A_POST, payload: posts.reverse()})
            }
            catch(e){
            console.error(e)
            }
        
        }

        export const doEditAPost  = async (postId, postText, token, homePageDispatch) =>{
        
          try{
            
              const res = await axios.post(`/api/posts/edit/${postId}`,
          
                    
                  { postData: { content: postText } },
                  {headers: {
                    authorization: token,
                  }}
              )
             
              const { posts } = res.data 
              toast.success("Successfully Updated!")
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
    
    try{
      
        const res = await fetch(`/api/users/bookmark/${postId}`,{
            method: 'POST',
            
            headers: {
                  authorization: token,
                },
              
           
        })
        
       
        const { bookmarks } = await res.json();
        
        homePageDispatch({type: ACTION_TYPES.BOOKMARK, payload: bookmarks})
       
        
    }
    catch(e){
    console.error(e)
    }

}

export const doRemoveBookmark = async (postId, token, homePageDispatch) =>{
 
try{
  
    const res = await fetch(`/api/users/remove-bookmark/${postId}`,{
        method: 'POST',
        
        headers: {
              authorization: token,
            },
          
       
    })
    
   
    const { bookmarks } = await res.json();
   
    homePageDispatch({type: ACTION_TYPES.REMOVE_BOOKMARK, payload: bookmarks})
   
    
}
catch(e){
console.error(e)
}

}

export const doDownloadBookMark = async (token, homePageDispatch) =>{
 
  try{
    
      const res = await fetch(`/api/users/bookmark`,{
          method: 'GET',
          
          headers: {
                authorization: token,
              },
            
         
      })
      
     
      const { bookmarks } = await res.json();
      
      homePageDispatch({type: ACTION_TYPES.DOWNLOADED_BOOKMARK, payload: bookmarks})
     
      
  }
  catch(e){
  console.error(e)
  }
  
  }

  export const doDownlodUsers = async (token, homePageDispatch) =>{
 
    try{
      
        const res = await fetch(`/api/users`,{
            method: 'GET',
            
            headers: {
                  authorization: token,
                },
              
           
        })
        
       
        const { users } = await res.json();
        
        homePageDispatch({type: ACTION_TYPES.USERS, payload: users})
       
        
    }
    catch(e){
    console.error(e)
    }
    
    }

    export const doDownlodUserInfo = async (token, userId, homePageDispatch) =>{
   
      try{
        
          const res = await fetch(`/api/users/${userId}`,{
              method: 'GET',
              
              headers: {
                    authorization: token,
                  },
                
             
          })
          
         
          const { user } = await res.json();
          
          homePageDispatch({type: ACTION_TYPES.USER_DETAILS, payload: user})
         
          
      }
      catch(e){
      console.error(e)
      }
      
      }
    
    export const doStartFollowing = async (userId, token, authenticatedUser, users, homePageDispatch) =>{
      try{
        
          const res = await fetch(`/api/users/follow/${userId}`,{
              method: 'POST',
              
              headers: {
                    authorization: token,
                  },      
          })
          const { user } = await res.json();
          authenticatedUser = user
         
         const toFollow = users.filter((userItem)=>(userItem._id!== userId))
         
         homePageDispatch({type: ACTION_TYPES.TO_FOLLOW, payload:  toFollow}) 
         homePageDispatch({type: ACTION_TYPES.FOLLOW_USER, payload: user.following})
         homePageDispatch({type: ACTION_TYPES.UPDATE_AUTHENTICATED_USER, payload: authenticatedUser})
      }
      catch(e){
      console.error(e)
      }
   }

   export const doStartUnFollowing = async (userId, token, homePageDispatch) =>{
    try{
      
        const res = await fetch(`/api/users/unfollow/${userId}`,{
            method: 'POST',
            
            headers: {
                  authorization: token,
                },
              
           
        })
        const { user, followUser } = await res.json();
       
       homePageDispatch({type: ACTION_TYPES.FOLLOW_USER, payload: user.following})
       
        
    }
    catch(e){
    console.error(e)
    }
    
    }

    export const doDeleteThePost = async (postId, token, homePageDispatch) =>{
    
      try{
        
        const res = await fetch(`/api/posts/${postId}`,{
            method: 'DELETE',
            
            headers: {
                  authorization: token,
                },      
        })
        const { posts } = await res.json();
     
    }
    catch(e){
    console.error(e)
    }
  
  }

  export const doDownloadPostDetails = async (postId, token, homePageDispatch) =>{
    
    try{
      
      const res = await fetch(`/api/posts/${postId}`,{
          method: 'GET',
          
          headers: {
                authorization: token,
              },      
      })
      const { post } = await res.json();
      
      homePageDispatch({type: ACTION_TYPES.POST_DETAILS, payload: post})
   
  }
  catch(e){
  console.error(e)
  }
}

  export const doDownlodPostsForUsername = async (username, token, homePageDispatch) =>{
 
    try{
      
        const res = await fetch(`/api/posts/user/${username}`,{
            method: 'GET',
            
            headers: {
                  authorization: token,
                },
              
           
        })
        
       
        const { posts } = await res.json();
        
        homePageDispatch({type: ACTION_TYPES.USERS_POST, payload: posts})
       
        
    }
    catch(e){
    console.error(e)
    }
    
    }


        