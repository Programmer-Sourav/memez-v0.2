import { useContext, useState } from "react"
import "../stylesheets/signup.css"
import { ApplicationContext } from "../context/ApplicationContext"
import { AUTH_ACTION_TYPE } from "../auth/ActionType"
import toast, { Toaster } from "react-hot-toast";
import { doLoginCall } from "../remote-apis/api-calls"
import { useNavigate } from "react-router"

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
        <div> 
        <div className='bold-line'></div>
        <div className='container'>
        <div className='window'>
        <div className='overlay'></div>
        <div className='content'>
        <div className='welcome'>Hello Guest!</div>
        <div className='subtitle'>Login now and start enjoying!</div>
        <div className='input-fields'>
        <input type='email' placeholder='Username' className='input-line full-width' onChange={(event)=>setUserEmail(event.target.value)}></input>
        <input type='password' placeholder='Password' className='input-line full-width' onChange={(event)=>setUserPassword(event.target.value)}></input>

      </div>
      {/* <div className='spacing'>or continue with <span className='highlight'>Facebook</span></div> */}
      <div><button className='ghost-round full-width' 
      onClick={()=>{doLoginCall(userEmail, userPassword, authDispatch)}}> Login </button></div>
    </div>
  </div>
</div>
</div>
    )
}