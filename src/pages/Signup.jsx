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
        <div> 
        <div className='bold-line'></div>
        <div className='container'>
        <div className='window'>
        <div className='overlay'></div>
        <div className='content'>
        <div className='welcome'>Hello Guest!</div>
        <div className='subtitle'>Sign up now and start enjoying!</div>
        <div className='input-fields'>
        <input type='text' placeholder='First name' className='input-line full-width' onChange={(event)=>{setUserFirstName(event.target.value)}}></input>
        <input type='text' placeholder='Last name' className='input-line full-width' onChange={(event)=>{setUserLastName(event.target.value)}}></input>
        <input type='email' placeholder='Username' className='input-line full-width' onChange={(event)=>{setUserEmail(event.target.value)}}></input>
        <input type='password' placeholder='Password' className='input-line full-width' onChange={(event)=>{setUserPassword(event.target.value)}}></input>

      </div>
      {/* <div className='spacing'>or continue with <span className='highlight'>Facebook</span></div> */}
      <div><button className='ghost-round full-width' onClick={()=>{doSignUpCall(userEmail, userPassword, userFirstName, userLastName , authDispatch)}}>Create Account</button></div>
    </div>
  </div>
</div>
</div>
    )
}