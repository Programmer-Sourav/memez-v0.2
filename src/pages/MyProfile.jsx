import { useContext } from "react"
import { ApplicationContext } from "../context/ApplicationContext"
import { EditModal } from "../components/EditModal"
import { ChakraProvider } from "@chakra-ui/react"

export default function MyProfile() {
    
    const { posts, homePageDispatch, authenticatedUser, editProfile, updatedUser} = useContext(ApplicationContext)
    
    
    return (
        <div> 
        <main class="p-s">
        <div class="flex flex-column flex-center">
          <div class="lynx-gray-bg width-7 height-7 br-full"></div>
          <h3 class="pt-s">@{authenticatedUser.username}</h3>
          <p class="grey-color txt-s">@{authenticatedUser.firstName}</p>
          <button class="border lynx-white-bg p-xs m-xs fw-semibold width-8">
           <ChakraProvider><EditModal data={authenticatedUser}/></ChakraProvider> 
          </button>
          <p class="m-xs p-xs">
           {editProfile.bio}
          </p>
          <p class="primary-color">{editProfile.url}</p>
          <div class="white-bg p-xs m-xs flex flex-row flex-space-evenly">
            <div class="flex flex-column flex-center m-s ml-m mr-m">
              <p class="fw-black">{updatedUser.following? updatedUser.following.length : 0}</p>
              <p class="fw-semibold">Following</p>
            </div>
            <div class="flex flex-column flex-center m-s ml-m mr-m">
                
              <p class="fw-black">{posts.filter((postItem)=>postItem.username===authenticatedUser.username).length}</p>
              <p class="fw-semibold">Posts</p>
            </div>
            <div class="flex flex-column flex-center m-s ml-m mr-m">
              <p class="fw-black">{updatedUser.followers? updatedUser.followers.length : 0}</p>
              <p class="fw-semibold">Followers</p>
            </div>
          </div>
        </div>
        <h3 class="m-s">Your Posts</h3>
        <div class="white-bg">
            { posts.filter((postItem)=>postItem.username===authenticatedUser.username)
            .map((postItem)=>(
          <div class="flex flex-row nowrap p-xs">
            <div class="grey-bg br-full width-xl height-xl p-xs mr-xs"></div>
            <div>
              <div class="flex flex-row flex-align-center flex-space-between">
                <div class="flex flex-row">
                  <p class="fw-semibold"></p>
                  <p class="grey-color pl-xs">
                    @{postItem.username} <span class="pl-xs">•</span>
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
    </div>
    )
}