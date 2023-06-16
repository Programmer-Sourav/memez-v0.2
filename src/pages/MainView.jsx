import { useContext, useState } from "react"
import "../stylesheets/style.css"
import { ApplicationContext } from "../context/ApplicationContext"
import { ACCESSOR_TYPES } from "@babel/types"
import { ACTION_TYPES } from "../reducer/ActionType"
import { doCreateAPost, doDisLikeAPost, doLikeAPost } from "../remote-apis/api-calls"
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/menu"
import Modal from "../components/Modal"
import { useNavigate } from "react-router"


  export default function MainView(){

    const { posts, homePageDispatch, token, loginStatus, authenticatedUser } = useContext(ApplicationContext)
    const [ postText, setPostText ] = useState("")
    const [show, setShow ] = useState(false)

    
    const likeThePost = (postId, token, homePageDispatch) =>{
        doLikeAPost(postId, token, homePageDispatch )
  }

  const disLikeThePost = (postId, token, homePageDispatch) =>{
    doDisLikeAPost(postId, token, homePageDispatch )
   }

  const checkIfPostIsLiked = (postId) =>{ 
   const particularPost = posts.find((postItem)=>postItem._id===postId) 
   const likedItem = particularPost.likes.likedBy.filter((user) => user._id === authenticatedUser._id).length>0
   return likedItem
  }

    
    return(
        <div> 
        <main className="mt-xl">
        <div className="white-bg mr-xxl p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio : '1'}}></div>
            <div className="w-full">
              <textarea name="make_post" id="make_my_post" value={postText} cols="50" rows="6" className="w-full lynx-white-bg p-s outline-transparent border-none"
               style={{resize : 'none'}} placeholder="Write something interesting..." 
               onChange={(e)=>{setPostText(e.target.value)}}></textarea>
              <div className="flex flex-space-between pt-s">
                <div className="flex " style={{gap : '1rem'}}>
                  <i className="bi bi-card-image"></i>
                  <i className="bi bi-filetype-gif"></i>
                  <i className="bi bi-emoji-smile"></i>
                </div>
                <button className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent" onClick={()=>{doCreateAPost(postText, token, homePageDispatch, setPostText(""))}}>Post</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-space-between mr-xxl flex-align-center pt-s">
          <h3 className="">Latest Posts</h3>
          <i className="bi bi-sliders2-vertical"></i>
        </div>
        
        {posts && posts.map(({_id, content, likes, username, createdAt, updatedAt})=>(

          
        
        <div className="white-bg mr-xxl p-xs mt-s" key={_id}>
          <div className="flex flex-row nowrap p-xs">
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio : '1'}}></div>
            <div>
              <div className="flex flex-row flex-align-center flex-space-between">
                <div className="flex flex-row">
                  <p className="fw-semibold">{username}</p>
                  <p className="grey-color pl-xs">
                    @{username} <span className="pl-xs">•</span>
                    <span className="pl-xs">1 min</span>
                  </p>
                </div>
                <Menu>
                <MenuButton border="none" background="white">
                <p>∙∙∙</p>
                </MenuButton>
                <MenuList>
                <MenuItem height="24px" border="none" textStyle="bold" padding="4px">Edit Post</MenuItem>
                <MenuDivider/>
                <MenuItem height="24px" border="none" textStyle="bold" padding="4px">Delete Post</MenuItem>
                </MenuList>
                </Menu>
                
              </div>
              <p className="pr-s pt-xs">
                {content}
              </p>
              <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                 {loginStatus && checkIfPostIsLiked(_id) ?
                 <i className="bi bi-heart-fill" style={{color: "red"}} onClick={()=>disLikeThePost(_id, token, homePageDispatch)}></i>:
                <i className="bi bi-heart" onClick={()=>likeThePost(_id, token, homePageDispatch)}></i> 
                 }
                <i className="bi bi-chat-left"></i>
                <i className="bi bi-share"></i>
                <i className="bi bi-bookmark-fill"></i>
              </div>
            </div>
          </div>
        </div>
        ))}
      </main>

        </div>
    )
  }
  
  
  