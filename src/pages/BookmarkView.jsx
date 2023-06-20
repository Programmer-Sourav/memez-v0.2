import { useContext, useState } from "react"
import "../stylesheets/style.css"
import { ApplicationContext } from "../context/ApplicationContext"
import { ACCESSOR_TYPES } from "@babel/types"
import { ACTION_TYPES } from "../reducer/ActionType"
import { doCreateAPost, doDisLikeAPost, doLikeAPost } from "../remote-apis/api-calls"
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/menu"
import { useNavigate } from "react-router"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  border
} from "@chakra-ui/react";
import {  ChakraProvider } from "@chakra-ui/react";
import { OpenModal } from "../components/OpenModal"


  export default function BookmarkView({bookmarks}){

    const {  homePageDispatch, token, loginStatus, authenticatedUser, postText, setPostText } = useContext(ApplicationContext)
    console.log("post ", postText)
    // const [ editText, setEditText ] = useState(postText) 
    // const [show, setShow ] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure();

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
        
        {bookmarks && bookmarks.map((bookMark)=>(
        
        <div className="white-bg mr-xxl p-xs mt-s" key={bookMark._id}>
          <div className="flex flex-row nowrap p-xs">
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio : '1'}}></div>
            <div>
              <div className="flex flex-row flex-align-center flex-space-between">
                <div className="flex flex-row">
                  <p className="fw-semibold">{bookMark.username}</p>
                  <p className="grey-color pl-xs">
                    @{bookMark.username} <span className="pl-xs">•</span>
                    <span className="pl-xs">1 min</span>
                  </p>
                </div>
                <Menu>
                <MenuButton border="none" background="white">
                <p>∙∙∙</p>
                </MenuButton>
                <MenuList>
               <ChakraProvider><OpenModal data={bookMark}/></ChakraProvider> 
                <MenuDivider/>
                <MenuItem height="24px" border="none" textStyle="bold" padding="4px">Delete Post</MenuItem>
                </MenuList>
                </Menu>
                
              </div>
              <p className="pr-s pt-xs">
                {bookMark.content}
              </p>
              <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                 {loginStatus && checkIfPostIsLiked(bookMark._id) ?
                 <i className="bi bi-heart-fill" style={{color: "red"}} onClick={()=>disLikeThePost(bookMark._id, token, homePageDispatch)}></i>:
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
  
  
  