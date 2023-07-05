import { useContext } from "react"
import { ApplicationContext } from "../context/ApplicationContext"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { doDownloadPostDetails } from "../remote-apis/api-calls"

export default function PostPage({posts}){

    const { authenticatedUser, users, postDetails, token, homePageDispatch} = useContext(ApplicationContext)
    const { _id } = useParams(ApplicationContext)
    const [comment, setComment] = useState("")
    const [show, setShow] = useState(false)


    useEffect(()=>{doDownloadPostDetails(_id, token, homePageDispatch)}, [])

    

    function getTheUser(){

        const result = users.find((user)=>user.username===postDetails.username)
        return result
    }
    const findUser = getTheUser()
 

    const addAComment = () =>{
     setShow(true) 
    }

    const onChangeHandler = (e) =>{
      setComment(e.target.value)
      
    }

return(
        <main class="mr-l h-full white-bg">
        <h3 class="pt-s ml-s">
          <i class="bi bi-arrow-left-short pr-s"></i>Post
        </h3>
        <div class="white-bg p-xs">
          <div class="flex flex-column nowrap p-xs">
            <div class="flex">
              <div class="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio: "1"}}><img src={findUser? findUser.avatar: ""} alt="profilePic" style={{borderRadius:"50%"}}/></div>
              <div class="flex flex-row flex-align-center flex-space-between w-full">
                <div class="flex flex-column">
                  <p class="fw-semibold">{findUser? findUser.username : "username"}</p>
                  <p class="grey-color">@{findUser? findUser.username : "username"}</p>
                </div>
                <p class="">∙∙∙</p>
              </div>
            </div>
            <div>
              <p class="pr-s pt-xs txt-m">
                {postDetails.content}
              </p>
              <p class="grey-color mt-s txt-s">
                {postDetails.updatedAt} <span class="pl-xs">•</span>
                <span class="pl-xs">Oct 11, 2021</span>
              </p>
              <div class="w-full mt-s" style={{height: "1px", backgroundColor: "rgb(206, 206, 206)"}}></div>
              <p class="mt-s fw-bold">{postDetails ? postDetails.likes.likeCount : 0} Likes</p>
              <div class="w-full mt-s" style={{height: "1px", backgroundColor: "rgb(206, 206, 206)"}}></div>
              <div class="flex flex-row nowrap flex-space-between pb-xs pt-m pl-s pr-s flex-align-center">
                <i class="bi bi-heart"></i>
                <i class="bi bi-chat-left"></i>
                <i class="bi bi-share"></i>
                <i class="bi bi-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full" style={{height: "1px", backgroundColor: "rgb(206, 206, 206)"}}></div>
        <div class="flex p-s">
          <div class="grey-bg br-full width-xl height-xl p-xs mr-s" style={{aspectRatio: "1"}}>{<img src={authenticatedUser.avatar} alt="profilepic" style={{borderRadius: "50%"}}/>}</div>
        <input type="text" class="lynx-gray-bg border-none outline-transparent w-full mr-xs p-xs " value={comment} style={{backgroundColor: "rgb(242, 242, 242)"}} placeholder="Comment your reply" onChange={(e)=>{onChangeHandler(e)}}/>
        <button class="primary-bg secondary-color border-none outline-transparent pr-xl pl-xl" onClick={()=>{addAComment()}}>Post</button>
        </div>
        <div class="w-full" style={{height: "1px", backgroundColor: "rgb(206, 206, 206)"}}></div>
        
       {comment && show ?( <div class="white-bg  p-xs mt-s">
          <div class="flex flex-row nowrap p-xs w-full">
            <div class="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio: "1"}}>{<img src={authenticatedUser.avatar} alt="profilepic" style={{borderRadius: "50%"}}/>}</div>
            <div>
              <div class="flex flex-row flex-align-center  flex-space-between">
                <div class="flex flex-column">
                  <div class="flex flex-row">
                    <p class="fw-bold">@{authenticatedUser.firstName}</p>
                    <p class="grey-color pl-xs">
                      @{authenticatedUser.username} <span class="pl-xs">•</span>
                      <span class="pl-xs">1m</span>
                    </p></div>
                  <p></p>
                  <p class="lynx-gray-color">Replying to <span class="primary-color">@{findUser ? findUser.username : "username"}</span></p>
                </div>
                <p class="">∙∙∙</p>
              </div>
              <p class="pr-s pt-xs">
                {comment}
              </p>
              <div class="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                <i class="bi bi-heart"></i>
                <i class="bi bi-chat-left"></i>
                <i class="bi bi-share"></i>
                <i class="bi bi-bookmark-fill"></i>
              </div>
            </div>
          </div>
        </div>) : ""}
      </main>
)
}