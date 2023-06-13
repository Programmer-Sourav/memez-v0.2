import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { ApplicationContext } from "../context/ApplicationContext"

export function RequiresAuth({children}){
 let location =  useLocation()

 const { loginStatus } = useContext(ApplicationContext)

 return loginStatus ? (children) : (<Navigate to = "/login " state={{ from : location}}/>)

}