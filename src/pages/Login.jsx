import { useContext, useState } from "react"
import "../stylesheets/signup.css"
import { ApplicationContext } from "../context/ApplicationContext"
import { AUTH_ACTION_TYPE } from "../auth/ActionType"
import toast, { Toaster } from "react-hot-toast";
import { doLoginCall } from "../remote-apis/api-calls"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom";

export default function Login(){
    
    const { token, loginStatus, authDispatch } = useContext(ApplicationContext)

    const [userEmail, setUserEmail ] = useState("")
    const [userPassword, setUserPassword ] = useState("")

    const navigate = useNavigate()

    if(token.length>0 && loginStatus){
      navigate("/home")
     }
     else{
      console.log("Login Required ", token.length, loginStatus)
     }


return(
<body>
    <div class="flex flex-column flex-center h-full w-full">
      <h2 class="fw-black txt-xl mb-m">
        <span class="primary-color">Tweet</span>Social!
      </h2>
      <div class="white-bg br-m p-xxl pt-xl pb-xl" style={{width: "30rem"}}>
        <h3 class="txt-center mb-m txt-l">Login</h3>
        <div class="flex flex-column">
          <label for="email">Email Address</label>
          <input type="text" name="email" class="p-xs txt-s lynx-white-color br-s mb-s " style={{border: "1px solid grey", color:"#000000"}} placeholder="tanay@neog.camp" onChange={(event)=>setUserEmail(event.target.value)}/>
        </div>
        <div class="flex flex-column">
          <label for="password">Password</label>
          <input type="password" name="password" class="p-xs txt-s lynx-white-color br-s flex items-center " style={{border: "1px solid grey", color:"#000000" }} placeholder="************" onChange={(event)=>setUserPassword(event.target.value)}/>
        </div>
        <div class="flex flex-align-center flex-space-between mt-m mb-m">
          <div class="txt-s flex flex-align-center">
            <input class="p-s txt-cursor" type="checkbox" name="rmbr-me" id=""/>
            <label class="pl-xs txt-cursor" for="rmbr-me">Remember Me</label>
          </div>
          <a href="#" class="action-color">Forgot your password?</a>
        </div>
        <button class="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s" onClick={()=>{doLoginCall(userEmail, userPassword, authDispatch)}}>
          Login
        </button>
        <Link to="/signup" class="txt-center w-full mt-m" style={{display: "block"}}>Create New Account &gt;</Link>
      </div>
    </div>
  

</body>
    )
}