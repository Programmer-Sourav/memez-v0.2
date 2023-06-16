import { useContext, useState } from "react"
import "../stylesheets/style.css"
import { ApplicationContext } from "../context/ApplicationContext"
import { ACCESSOR_TYPES } from "@babel/types"
import { ACTION_TYPES } from "../reducer/ActionType"
import { doCreateAPost, doDisLikeAPost, doLikeAPost } from "../remote-apis/api-calls"
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/menu"
import Modal from "../components/Modal"
import { useNavigate } from "react-router"


  export default function BookmarkView({bookmarks}){

    const {  homePageDispatch, token, loginStatus, authenticatedUser } = useContext(ApplicationContext)
    const [ postText, setPostText ] = useState("")
    const [show, setShow ] = useState(false)

  console.log(4545, bookmarks.length)  

  const disLikeThePost = (postId, token, homePageDispatch) =>{
    doDisLikeAPost(postId, token, homePageDispatch )
   }

  const checkIfPostIsLiked = (postId) =>{ 
   const particularPost = bookmarks.find((postItem)=>postItem._id===postId) 
   const likedItem = particularPost.likes.likedBy.filter((user) => user._id === authenticatedUser._id).length>0
   return likedItem
  }

    
    return(
        <div> 
        <main className="mt-xl">
        <div className="flex flex-space-between mr-xxl flex-align-center pt-s">
          <h4 className="">Your Bookmarks</h4>
          <i className="bi bi-sliders2-vertical"></i>
        </div>
        
        {bookmarks && bookmarks.map(({_id, content, likes, username, createdAt, updatedAt})=>(

          
        
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
                <i className="bi bi-heart" ></i> 
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
  
  
  