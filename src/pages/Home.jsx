import { useContext, useEffect, useState } from "react"
//import "../stylesheets/style.css"
import { ApplicationContext } from "../context/ApplicationContext"
import { ACCESSOR_TYPES } from "@babel/types"
import { ACTION_TYPES } from "../reducer/ActionType"
import { doCreateAPost, doDeleteThePost, doDisLikeAPost, doDownlodUsers, doLikeAPost, doRemoveBookmark, doSaveBookmark, doStartFollowing, doStartUnFollowing } from "../remote-apis/api-calls"
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/menu"
// import Modal from "../components/Modal"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
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
import { toast } from "react-hot-toast"

export default function Home(){
    const { posts, homePageDispatch, token, loginStatus, authenticatedUser, bookmarked, users, following, postText, setPostText } = useContext(ApplicationContext)
    const [show, setShow ] = useState(false)
    const [searchVal, setSearchVal ] = useState("")
    
   
   const { isOpen, onOpen, onClose } = useDisclosure();

   
    let updatedProducts = [...posts]
    
   const filteredPostOfUser = updatedProducts.filter((postItem)=>postItem.content.toLowerCase().includes(searchVal.toLowerCase()))

   const organicUsers = () =>{
    const updated = users.filter((user)=>user._id!==authenticatedUser._id)
    return updated;
 }

   const filteredUsers = organicUsers().filter((userItem)=>userItem.username.toLowerCase().includes(searchVal.toLowerCase()))
   

    const onSearchHandler = (e) =>{
     setSearchVal(e.target.value)
    }

    
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

    const checkIfPostIsBookmarked = (postId) =>{ 
      const isBookMarked = bookmarked.filter((currentPost) => currentPost._id === postId).length>0
      return isBookMarked
     }

    const saveBookMark = (postId, token, homePageDispatch) =>{
       doSaveBookmark(postId, token, homePageDispatch)
    }

    const removeBookMark = (postId, token, homePageDispatch) =>{
      doRemoveBookmark(postId, token, homePageDispatch)
    }

    const startFollowing = (followingId, token) =>{
      doStartFollowing(followingId, token, authenticatedUser, homePageDispatch)
    }

    const startUnFollowing = (followingId, token) =>{
      doStartUnFollowing(followingId, token, homePageDispatch)
    }

    const getMeTheLatest = () =>{
     const updated = updatedProducts.sort((p1, p2)=>new Date(p1.updatedAt).toDateString()>new Date(p2.updatedAt).toDateString())
     homePageDispatch(
      {type: ACTION_TYPES.INITIALIZE,
       payload: updated
      }
      )
    }

    const getMeTheTrending = () =>{
     const updated = updatedProducts.sort((p1, p2)=>p2.likes.likeCount>p1.likes.likeCount)
     homePageDispatch(
      {type: ACTION_TYPES.INITIALIZE,
       payload: updated
      }
      )
    }

    const deleteThisPostFromFeed = (postId, username) =>{
      if(username!== authenticatedUser.username){
       toast.error("Oops! You are not authenticated to perform this action!")
      }
      else{
      doDeleteThePost(postId, token, homePageDispatch)
      const result = posts.filter((postItem)=>postItem._id!==postId)
      homePageDispatch({type: ACTION_TYPES.INITIALIZE, payload: result})
      } 
    }

    useEffect(()=>{doDownlodUsers(token, homePageDispatch)},[])

    return(
        <div className="container">
            <nav className="white-bg">
        <div className="p-s pl-xxl txt-m ml-m">
          <a href="../../index.html">
            <span className="primary-color">My</span>Website
          </a>
        </div>
      </nav>
        <aside className="p-s pt-xl pl-xxl ml-m sidebar1">
        <div className="flex flex-column flex-space-between sidebar">
          <div>
            <div className="pt-s black-color fw-semibold">
              <a href="">
                <i className="bi bi-house"></i> &nbsp;
                <span className="fw-bold">Home</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <a href="../explore/explore.html">
                <i className="bi bi-rocket"></i> &nbsp;
                <span>Explore</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <Link to="/bookmark">
                <i className="bi bi-bookmark"></i> &nbsp;
                <span>Bookmark</span>
              </Link>
            </div>
            <div className="pt-s black-color fw-semibold">
            <Link to="/myprofile">
                <i className="bi bi-person"></i> &nbsp;
                <span>Profile</span>
              </Link>
            </div>
            <button className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn" onClick={onOpen}>
              Create New Post
            </button>
             <ChakraProvider>   
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              
              <input
                type="text"
                value={postText}
                style={{
                  border: "1px solid black",
                  height: "128px",
                  width: "392px"
                }}
                onChange={(e) => {
                  setPostText(e.target.value);
                }}
              />
              <button
                style={{
                  background: "green",
                  padding: "4px",
                  color: "white",
                  margin: "4px"
                }}
               
              onClick={()=>{doCreateAPost(postText, token, homePageDispatch, setPostText(""))}}
                
              >
                {" "}
                Post{" "}
              </button>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue"  mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      </ChakraProvider>  
          </div>
          
          
          <div className="flex flex-space-between flex-align-center">
            <div className="flex">
              <div className="grey-bg br-full width-xl height-xl"></div>
              <div className="flex flex-column ml-xs">
                <div className="fw-bold">{authenticatedUser.username}</div>
                <div className="fw-light grey-color">@{authenticatedUser.username}</div>
              </div>
            </div>
            <div className="grey-color fw-bold">...</div>
          </div>
        </div>
      </aside>
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
        
        {filteredPostOfUser && filteredPostOfUser.map(({_id, content, likes, username, createdAt, updatedAt})=>(

          
        
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
                <MenuItem height="24px" border="none" textStyle="bold" padding="4px" onClick={()=>deleteThisPostFromFeed(_id, username)}>Delete Post</MenuItem>
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
                 }{likes.likeCount}
                <i className="bi bi-chat-left"></i>
                <i className="bi bi-share"></i>
                {/* <i className="bi bi-bookmark-fill" onClick={()=>saveBookMark(_id, token, homePageDispatch)}></i> */}
                {loginStatus && checkIfPostIsBookmarked(_id) ?
                <i className="bi bi-bookmark-fill" style={{color: "orange"}} onClick={()=>removeBookMark(_id, token, homePageDispatch)}></i>:
                <i className="bi bi-bookmark" onClick={()=>saveBookMark(_id, token, homePageDispatch)}></i> 
                 }
              </div>
            </div>
          </div>
        </div>
        ))}
      </main>
      <aside className="mt-xl mr-xxl sidebar2">
      <button onClick={()=>{getMeTheLatest()}} style={{background: "green", height:"40px", width:"128px", color: "white", margin:"8px"}}>Latest</button>
          <button onClick={()=>{getMeTheTrending()}} style={{background: "orange", height:"40px", width:"128px", color: "white", margin:"8px"}}>Trending</button>
        <div className="white-bg mb-m pl-s border flex flex-row flex-center nowrap">
          <i className="bi bi-search"></i>
          <input type="search" name="search-bar" className="search-bar border-none outline-transparent p-s width-16" placeholder="Search Posts, People, Anything" onChange = {(e)=>{onSearchHandler(e)}}/>
        </div>
        <div className="white-bg">
          <div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
            <div>Who to Follow?</div>
            <div className="primary-color">Show More</div>
          </div>
          {filteredUsers.map((user)=>(
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">{user.firstName}</div>
                <div className="fw-light grey-color">@{user.username}</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
             { following.find((userItem)=>userItem._id===user._id) ? <button onClick={()=>{startUnFollowing(user._id, token)}} style={{color:"white", background: "green", border: "none", padding: "4px"}}>
                Following <i className="bi bi-check-lg"></i>
              </button> : <button onClick={()=>{startFollowing(user._id, token)}} style={{color:"white", background: "orange", border: "none", padding: "4px"}}>
                Follow <i className="bi bi-plus-lg"></i>
              </button>}
            </div>
          </div>
          ))}
        </div>
      </aside>
        </div>
    )
}