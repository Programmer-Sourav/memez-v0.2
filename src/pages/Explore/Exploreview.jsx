import { useContext } from "react"
import { ApplicationContext } from "../../context/ApplicationContext"
import { useState } from "react"
import { users } from "../../backend/db/users"

export default function ExploreView(){

  const { users, authenticatedUser, posts } = useContext(ApplicationContext)
  const [ tabValue, setTabValue ] = useState("")
  const [allUser, setAllUser ] = useState(users)


  const handleTabs = (value) =>{
     setTabValue(value)
  }
   
 const userAvatar = (username) =>{
  const user = allUser.find((userItem)=>userItem.username===username)
  let avatarUrl;
  if(user!==undefined)
  avatarUrl = user.avatar
  return avatarUrl
 }
   return(
    <main class="mt-xl">
        <h3 class="pt-s">Explore</h3>
        <div class="flex flex-row nowrap">
          <div class="border p-xs mt-xs mb-xs mr-s width-7 txt-center fw-semibold" onClick={()=>{handleTabs("ForYou")}}>
            For You
          </div>
          <div class="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color" onClick={()=>{handleTabs("trending")}}>
            Trending
          </div>
          <div class="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color">
            Technology
          </div>
          <div class="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color">
            Sports
          </div>
          <div class="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color">
            News
          </div>
        </div>
        {posts.map((postItem)=>(
        <div class="white-bg mr-xxl p-xs mt-s">
          <div class="flex flex-row nowrap p-xs">
            <div class="grey-bg br-full width-xl height-xl p-xs mr-xs"><img src={userAvatar(postItem.username)} alt="" style={{borderRadius: "50%"}}/></div>
            <div>
              <div class="flex flex-row flex-align-center flex-space-between">
                <div class="flex flex-row">
                  <p class="fw-semibold">{postItem.username}</p>
                  <p class="grey-color pl-xs">
                    @{postItem.username} <span class="pl-xs">•</span>
                    <span class="pl-xs">1 min</span>
                  </p>
                </div>
                <p>∙∙∙</p>
              </div>
              <p class="pr-s pt-xs">
                {postItem.content} 
              </p>
              <div class="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                <i class="bi bi-heart"></i>
                <i class="bi bi-chat-left"></i>
                <i class="bi bi-share"></i>
                <i class="bi bi-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
         ))}
      </main>
   )
}