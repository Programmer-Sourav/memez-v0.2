import { useContext } from "react"
import { ApplicationContext } from "../context/ApplicationContext"
import { EditModal } from "../components/EditModal"
import { ChakraProvider } from "@chakra-ui/react"
import { useEffect } from "react"
import { AUTH_ACTION_TYPE } from "../auth/ActionType"
import { useNavigate } from "react-router"

export default function MyProfile() {
    
    const { posts, homePageDispatch, authenticatedUser, editProfile, updatedUser, profileImage, setProfileImage, images, updateImages, onChnageBio, onChangeUrl, imagedata, users, authDispatch, following} = useContext(ApplicationContext)

    const navigate = useNavigate()

    const getData = () =>{
      const findUrl = images.find((imageItem)=>imageItem.id===5) 
      setProfileImage({...profileImage, image: findUrl.image})
    }
    const userAvatar = (username) =>{
      const user = users.find((user)=>user.username===username)
      return user.avatar
    }
    
    const onCallingLogout= () =>{
      authDispatch({type: AUTH_ACTION_TYPE.ACTION_LOG_OUT, payload: {isLoggedIn: false, authenticatedUser: null}})
      navigate("/")
    }
    useEffect(()=>{getData()},[])
    
    return (
        <main class="p-s">
        <div class="flex flex-column flex-center">
          <div class="lynx-gray-bg width-7 height-7 br-full"><img src={profileImage.image} alt="dummyavatar" style={{borderRadius: "50%"}}></img></div>
          <h3 class="pt-s">@{authenticatedUser.username}</h3>
          <p class="grey-color txt-s">@{authenticatedUser.firstName}</p> 
          <button style={{padding: "8px", margin: "8px", background: "red", borderRadius: "8px", color:"white"}} onClick={onCallingLogout}  >Logout</button>
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
          <div class="flex flex-row nowrap p-xs" key={postItem._id}>
            <div class="grey-bg br-full width-xl height-xl p-xs mr-xs">{<img src={userAvatar(authenticatedUser.username)}  alt="dummy" style={{borderRadius: "90%"}}/>}</div>
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
                {postItem.postContent ? (postItem.resourceType && postItem.resourceType==="image" ? <img src={postItem.postContent} alt="postimage"/> : <video width="750" height="380" controls >
      <source src={postItem.postContent} />
</video>) : ""}
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