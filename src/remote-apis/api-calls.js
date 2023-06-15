import axios from "axios";
import { AUTH_ACTION_TYPE } from "../auth/ActionType";
import { toast } from "react-hot-toast";



export const doLoginCall = (userEmail, userPassword, authDispatch) =>{
    console.log(userEmail)
    console.log(userPassword)

    axios.post('/api/auth/login', {
        username: userEmail,
        password: userPassword
      })
      .then(function (response) {
        const { encodedToken} = response.data
            localStorage.setItem("encodedToken", encodedToken)
            if(localStorage.getItem("encodedToken")){
                authDispatch({type: AUTH_ACTION_TYPE.ACTION_SIGN_IN, payload: {token: localStorage.getItem("encodedToken"), isLoggedIn: true}})
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
        console.log(userEmail)
        console.log(userPassword)
        
        axios.post('/api/auth/signup', { 
            firstName: userFirstName,
            lastName: userLastName,
            username: userEmail,
            password: userPassword,
          })
          .then(function (response) {
            const { encodedToken} = response.data
            localStorage.setItem("encodedToken", encodedToken)

            if(localStorage.getItem("encodedToken")){
                authDispatch({type: AUTH_ACTION_TYPE.ACTION_SIGN_UP, payload: {token: localStorage.getItem("encodedToken"), isLoggedIn: true}})
                toast.success("Successfully Registered.")
            }
          })
          .catch(function (error) {
            authDispatch({type: AUTH_ACTION_TYPE.FAILED_ATTEMPT, payload: {isLoggedIn: false}})
            toast.error("Error during Sign up. Please try again.")
            console.log(error);
          });
        }

      //homePageDispatch
      /*export const doCreateAPost = (postText, token) =>{
             console.log(1333, token)
             console.log(1444, postText)
            axios.post(
              "/api/posts",
              { postData: { content: postText } },
              {
                headers: { authorization: token },
              })
            .then(function (response) {
               const { posts } = response.data
               console.log(446, posts)
             })
             .catch(function (error) {
            
               console.log(error);
             });
           }*/

           export const doCreateAPost = async (postText, token) =>{

            try{
              
                const res = await axios.post("/api/posts",
            
                      
                    { postData: { content: postText } },
                    {headers: {
                      authorization: token,
                    }}
                )
                console.log(1234, res)     
            }
            catch(e){
            console.error(e)
            }
        
        }



        