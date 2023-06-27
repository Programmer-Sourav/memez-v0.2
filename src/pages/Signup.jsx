import { doSignUpCall } from "../remote-apis/api-calls"
import "../stylesheets/signup.css"
import { AUTH_ACTION_TYPE } from "../auth/ActionType"
import { useContext, useState } from "react"
import { ApplicationContext } from "../context/ApplicationContext"
import { useNavigate } from "react-router"
import { toast } from "react-hot-toast"


export default function Signup(){

    const { token, loginStatus, authDispatch } = useContext(ApplicationContext)

    const navigate = useNavigate()

    if(token.length>0 && loginStatus){
      navigate("/home")
     }
     else{
      console.log("Sign Up Required ", token.length, loginStatus)
     }


    const [ userEmail, setUserEmail ] = useState("")
    const [ userPassword, setUserPassword ] = useState("")
    const [ userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName ] = useState("")

    return(
//         <div> 
//         <div className='bold-line'></div>
//         <div className='container'>
//         <div className='window'>
//         <div className='overlay'></div>
//         <div className='content'>
//         <div className='welcome'>Hello Guest!</div>
//         <div className='subtitle'>Sign up now and start enjoying!</div>
//         <div className='input-fields'>
//         <input type='text' placeholder='First name' className='input-line full-width' onChange={(event)=>{setUserFirstName(event.target.value)}}></input>
//         <input type='text' placeholder='Last name' className='input-line full-width' onChange={(event)=>{setUserLastName(event.target.value)}}></input>
//         <input type='email' placeholder='Username' className='input-line full-width' onChange={(event)=>{setUserEmail(event.target.value)}}></input>
//         <input type='password' placeholder='Password' className='input-line full-width' onChange={(event)=>{setUserPassword(event.target.value)}}></input>

//       </div>
//       {/* <div className='spacing'>or continue with <span className='highlight'>Facebook</span></div> */}
//       <div><button className='ghost-round full-width' onClick={()=>{doSignUpCall(userEmail, userPassword, userFirstName, userLastName , authDispatch)}}>Create Account</button></div>
//     </div>
//   </div>
// </div>
// </div>
  <body>
    <div class="flex flex-column flex-center h-full w-full">
      <h2 class="fw-black  mb-m">
        <span class="primary-color">My</span> Website
      </h2>
      <div class="white-bg br-m p-xxl pt-l pb-l" style={{width: "30rem"}}>
        <h3 class="txt-center mb-s txt-l">Signup</h3>
        <div class="flex flex-column">
          <label for="name" class="txt-s">Full Name</label>
          <input type="text" name="name" class="p-xs txt-s lynx-white-color br-s mb-s " style={{border: "1px solid grey"}} placeholder="Tanay Pratap"/>
        </div>
        <div class="flex flex-column">
          <label for="username">Username</label>
          <input type="text" name="username" class="p-xs txt-s lynx-white-color br-s mb-s " style={{border: "1px solid grey"}} placeholder="tanaypratap"/>
        </div>
        <div class="flex flex-column">
          <label for="email">Email Address</label>
          <input type="text" name="email" class="p-xs txt-s lynx-white-color br-s mb-s " style={{border: "1px solid grey"}} placeholder="tanay@neog.camp"/>
        </div>
        <div class="flex flex-column">
          <label for="password">Password</label>
          <input type="password" name="password" class="p-xs txt-s lynx-white-color br-s flex mb-s items-center " style={{border: "1px solid grey"}} placeholder="************"/>
        </div>
        <div class="flex flex-column">
          <label for="password">Confirm Password</label>
          <input type="password" name="password" class="p-xs txt-s lynx-white-color br-s flex items-center " style={{border: "1px solid grey"}} placeholder="************"/>
        </div>
        <div class="flex flex-align-center flex-space-between mt-m mb-m">
          <div class="txt-s flex flex-align-center">
            <input class="p-s txt-cursor" type="checkbox" name="rmbr-me" id=""/>
            <label class="pl-xs txt-cursor" for="rmbr-me">I accept all Terms &amp; Conditions</label>
          </div>
         
        </div>
        <button class="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s">
          Create New Account
        </button>
        <a href="#" class="txt-center w-full mt-m" style={{display: "block"}}>Already have an account &gt;</a>
      </div>
    </div>
  

</body>
    )
}