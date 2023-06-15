import axios from "axios";
import { AUTH_ACTION_TYPE } from "../auth/ActionType";
import { toast } from "react-hot-toast";
import { ACTION_TYPES } from "../reducer/ActionType";



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



        