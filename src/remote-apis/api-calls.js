import axios from "axios";
import { AUTH_ACTION_TYPE } from "../auth/ActionType";

// export const doLoginCall = (userEmail, userPassword, authDispatch) =>{
//     console.log(userEmail)
//     console.log(userPassword)
  
//     //authDispatch({type: AUTH_ACTION_TYPE.ACTION_SIGN_IN, payload: {email: userEmail, password: userPassword}})
//     axios.post('/api/auth/login', {
//         username: userEmail,
//         password: userPassword
//       })
//       .then(function (response) {
//         console.log(123, response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     }

    export const doLoginCall = async (userEmail, userPassword, authDispatch) =>{

        const item = {username: userEmail,password: userPassword}
        try{
          
            const res = await fetch("/api/auth/login",{
                method: 'POST',  
               // headers: { 'Content-Type': 'application/json' },     
                body: JSON.stringify(item)
            })
            
            const completeRes = res
            console.log(333, completeRes)
            const response = await res.json();
           

            console.log(111, response)
            const encodedToken  = response?.encodedToken
            console.log(1222, encodedToken)
            
        }
        catch(e){
        console.error(e)
        }
    
    }


   /* export const doSignUpCall = (userEmail, userPassword, userFirstName, userLastName, authDispatch) =>{
        console.log(userEmail)
        console.log(userPassword)
      
        axios.post('/api/auth/signup', { 
            firstName: userFirstName,
            lastName: userLastName,
            username: userEmail,
            password: userPassword,
          })
          .then(function (response) {
            console.log(123, response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }*/

        export const doSignUpCall = async (userEmail, userPassword, userFirstName, userLastName, authDispatch) =>{
            console.log(11, userEmail)
            const item = {username: userEmail,password: userPassword,firstName: userFirstName,lastName: userLastName}
            console.log(1567, item)
            try{
              
                const res = await fetch("/api/auth/signup",{
                    method: 'POST',  
                   // headers: { 'Content-Type': 'application/json' },     
                    body: JSON.stringify(item)
                })
                
               
                const completeRes = res
                console.log(333, completeRes)
                const response = await res.json();
               
    
                console.log(111, response)
                
            }
            catch(e){
            console.error(e)
            }
        
        }