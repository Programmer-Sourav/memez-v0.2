import { useContext } from "react"
import { ApplicationContext } from "../context/ApplicationContext"
import { doStartFollowing, doStartUnFollowing } from "../remote-apis/api-calls"
import { ACTION_TYPES } from "../reducer/ActionType"
import { useParams } from "react-router-dom"

export default function ProfilePageUser(){

    const {profileImage, posts, following, token, authenticatedUser, homePageDispatch, users} = useContext(ApplicationContext)
    

   
    const {firstName} = useParams()
    console.log(334, users)
    
    function findTheUserDetailsForThisProfile(){
      const userFound = users.find((userItem)=>userItem.firstName===firstName)
      return userFound
    }
 
    const profileData = findTheUserDetailsForThisProfile()
    

    const getThePosts= () =>{
        const postByUser = posts.filter((postItem)=>postItem.username===profileData.username)
        return postByUser
    }
  
    
    const startFollowing = (followingId, token) =>{
     
      doStartFollowing(followingId, token, authenticatedUser, users, homePageDispatch)
    }

    const startUnFollowing = (followingId, token) =>{
      doStartUnFollowing(followingId, token, homePageDispatch)
    }

    const userPosts = getThePosts();
    
    return(
      
        <main class="p-s">
        <div class="flex flex-column flex-center" >
          <div class="lynx-gray-bg width-7 height-7 br-full"><img src={profileData.avatar} alt="dummyavatar" style={{
          borderRadius: "50%",
          
        }}></img></div>
          <h3 class="pt-s">{profileData.firstName}</h3>
          <p class="grey-color txt-s">@{profileData.username}</p>
          { following.find((userItem)=>userItem._id===profileData._id) ?<button class="border-none primary-bg white-color p-xs m-xs fw-semibold width-10" onClick={()=>{startUnFollowing(profileData._id, token)}} style={{color:"white", background: "green", border: "none", padding: "4px"}}>
             Following
          </button> : 
          <button class="border-none primary-bg white-color p-xs m-xs fw-semibold width-10" onClick={()=>{startFollowing(profileData._id, token)}} style={{color:"white", background: "green", border: "none", padding: "4px"}}>
          Follow
       </button>}
          <p class="m-xs p-xs">
            {profileData.bio}
          </p>
          <p class="primary-color">{profileData.website}</p>
          <div class="white-bg p-xs m-xs flex flex-row flex-space-evenly">
            <div class="flex flex-column flex-center m-s ml-m mr-m">
              <p class="fw-black">0</p>
              <p class="fw-semibold">Following</p>
            </div>
            <div class="flex flex-column flex-center m-s ml-m mr-m">
              <p class="fw-black">{userPosts.length}</p>
              <p class="fw-semibold">Posts</p>
            </div>
            <div class="flex flex-column flex-center m-s ml-m mr-m">
              <p class="fw-black">37.3K</p>
              <p class="fw-semibold">Followers</p>
            </div>
          </div>
        </div>
        <h3 class="m-s">Your Posts</h3>
        <div class="white-bg">
        {getThePosts().map((postItem)=>(
          <div class="flex flex-row nowrap p-xs">
            <div class="grey-bg br-full width-xl height-xl p-xs mr-xs"></div>
            <div>
              <div class="flex flex-row flex-align-center flex-space-between">
                <div class="flex flex-row">
                  <p class="fw-semibold"></p>
                  <p class="grey-color pl-xs">
                    @{profileData.username} <span class="pl-xs">•</span>
                    <span class="pl-xs">1 min</span>
                    </p>
                </div>
                <p>∙∙∙</p>
              </div>
              <p class="pr-s">
              {postItem.content}
              </p>
              <div class="flex flex-row nowrap flex-space-between pt-s pr-s flex-align-center">
                <i class="bi bi-heart"></i>
                <i class="bi bi-chat-left"></i>
                <i class="bi bi-share"></i>
                <i class="bi bi-sliders"></i>
              </div>
             
            </div>
          </div>
        ))}
        </div>
       
      </main>
      )

}