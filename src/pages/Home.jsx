import { useContext, useEffect, useState, forwardRef } from "react"
//import "../stylesheets/style.css"
import { ApplicationContext } from "../context/ApplicationContext"
import { ACCESSOR_TYPES } from "@babel/types"
import { ACTION_TYPES } from "../reducer/ActionType"
import { doCreateAPost, doDeleteThePost, doDisLikeAPost, doDownlodUsers, doLikeAPost, doRemoveBookmark, doSaveBookmark, doStartFollowing, doStartUnFollowing } from "../remote-apis/api-calls"
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/menu"
// import Modal from "../components/Modal"
import { Navigate, useNavigate } from "react-router"
import { Link } from "react-router-dom"

import React from "react";
import Uploady, {useItemStartListener, useItemFinishListener, useItemErrorListener} from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import { users } from "../backend/db/users"

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
  border,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  PopoverFooter,
  background
} from "@chakra-ui/react";
import {  ChakraProvider } from "@chakra-ui/react";
import { toast } from "react-hot-toast"
import { asUploadButton } from "@rpldy/upload-button";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { OpenModal } from "../components/OpenModal"


export default function Home(){
    const { posts, homePageDispatch, token, loginStatus, authenticatedUser, bookmarked,  following, postText, setPostText } = useContext(ApplicationContext)
    const [show, setShow ] = useState(false)
    const [searchVal, setSearchVal ] = useState("")
    const [ uploadImage, setUploadImage ] = useState(false)
    const [ postContent, setPostContent] = useState("no-url")
    const [ resourceType, setResourceType ] = useState("")
    const [ sortVal, setSortVal ] = useState("")
    
   
   const { isOpen, onOpen, onClose } = useDisclosure();

    //let updatedProducts = [...posts]
    
    const navigate = useNavigate()

    /**For home page, only posts by users who I am folowing should be visible */
 
    let updatedProducts = [...posts].filter((postItem)=>
    following.find((followingItem)=>
    followingItem.username===postItem.username) || authenticatedUser.username === postItem.username )
    console.log("Posts", updatedProducts)
   
    const [ allUsers, setAllUsers ] = useState(users)
    

   let filteredPostOfUser = updatedProducts.filter((postItem)=>postItem.content.toLowerCase().includes(searchVal.toLowerCase()))
   

   if(sortVal==="latest")
   filteredPostOfUser =  updatedProducts.sort((p1, p2)=>new Date(p2.updatedAt)>new Date(p1.updatedAt))
   if(sortVal==="trending")
   filteredPostOfUser = updatedProducts.sort((p1, p2)=>p2.likes.likeCount>p1.likes.likeCount)

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
      doStartFollowing(followingId, token, authenticatedUser, users, homePageDispatch)
    }

    const startUnFollowing = (followingId, token) =>{
      doStartUnFollowing(followingId, token, homePageDispatch)
    }

    // const DivUploadButton = asUploadButton(forwardRef(
    //   (props, ref) =>
    //       <div {...props} style={{ cursor: "pointer" }}>
    //           <i className="bi bi-card-image" ></i>
    //       </div>
    //  ));

    
    const getMeTheLatest = () =>{
     setSortVal("latest")
    }

    const getMeTheTrending = () =>{
     setSortVal("trending")
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
    // const filterBySize = (file) => {
    //   console.log(3344, postContent)
    //   //filter out images larger than 5MB
    //   //return file.size <= 5242880;
    //   if(file.size <= 5242880){
    //     setPostContent("image")
    //   }
    //   else{
    //     toast.error("Oops! Can't upload images larger than 5 MB")
    //   }
    // };
    

    const uploadAnImage = (value) =>{
      if(value==="upload-image")
      setUploadImage(true)
    }

    const MyUploadButton = () =>{
      /**code provided by uploady.org */
      console.log("Inside MyUpload")
      useItemStartListener(item => {
        console.log("Myupload...")
        
        console.log(`item ${item.id} uploading now. file name=${item.file.name}`)
    });
    
    
      useItemFinishListener(item=>{
        console.log("Inside Finish")
        //setPostContent("")
        console.log(`item ${item.id} finshed uploading. response = `, item.uploadResponse)
        setResourceType(item.uploadResponse.data.resource_type)
        setPostContent(item.uploadResponse.data.secure_url)
        console.log("123URL ", resourceType, item.uploadResponse.data.resource_type, postContent, item.uploadResponse.data.secure_url)
      })
    
      useItemErrorListener(item=>{
        console.log(`item ${item.id} finshed uploading. response = `, item.uploadResponse)
      })
    
    }

    function displayImage() {
      <img src={postContent}  alt="postimage"/>
    }
    
    function displayVideo() {
      <video src={postContent} alt="postImage"/>
    }
    const getExtention = (filename) =>{
      console.log(filename)
    const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length)
    console.log(123456, extension)
    return extension
    }

    const goToProfileTwo = (firstName) =>{
      navigate(`/profileusertwo/${firstName}`)
      console.log("profileTwo")
    }

    const goToProfileOne = (firstName) =>{
      navigate(`/profileuserone/${firstName}`)
    }
   
    
    const currentUserAvatar = () =>{
     const user =  allUsers.find((userItem)=>userItem._id===authenticatedUser._id)
     let url
     if(user){
     url = user.avatar
     }
     else{
       url = `https://ui-avatars.com/api/?name=${authenticatedUser.username}&background=ff6b6b&caps=3&bold=true`
     }
     return url
    }
   
    const userAvatar = (username) =>{
      const user = allUsers.find((userItem)=>userItem.username===username)
      return user.avatar
    }
    const  setEmojiContent = (receivedVal) =>{
     setPostText(postText+receivedVal.native)
    }

    useEffect(()=>{doDownlodUsers(token, homePageDispatch)},[])
    const postRes = resourceType+":"+postContent
    console.log("124URL", postContent-resourceType, postRes)
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
              <Link to="/home">
                <i className="bi bi-house"></i> &nbsp;
                <span className="fw-bold">Home</span>
                </Link>
            </div>
            <div className="pt-s black-color fw-semibold">
            <Link to="/explore">
                <i className="bi bi-rocket"></i> &nbsp;
                <span>Explore</span>
              </Link>
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
              
              <textarea rows="6" column="50"
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
                  paddingLeft: "32px",
                  paddingRight: "32px",
                  height: "40px",
                  color: "white",
                  margin: "8px",
                  float: "right",
                  borderRadius: "8px"
                }}
               
              onClick={()=>{doCreateAPost(postText, postRes, token,  homePageDispatch, setPostText(""))}}
                
              >
                {" "}
                Post!{" "}
              </button>
            </ModalBody>

            <ModalFooter>
          
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      </ChakraProvider>  
          </div>
          
          
          <div className="flex flex-space-between flex-align-center">
            <div className="flex">
              <div className="grey-bg br-full width-xl height-xl">{<img src={currentUserAvatar()} alt="downloads" style={{borderRadius: "50%"}}/> }</div>
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
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio : '1'}}><img src={currentUserAvatar()} alt="avatar" style={{borderRadius: "50%"}}/></div>
            <div className="w-full">
              <textarea name="make_post" id="make_my_post" value={postText} cols="50" rows="6" className="w-full lynx-white-bg p-s outline-transparent border-none"
               style={{resize : 'none'}} placeholder="Write something interesting..." 
               onChange={(e)=>{setPostText(e.target.value)}}></textarea>
               
              <div className="flex flex-space-between pt-s">
                <div className="flex " style={{gap : '1rem'}}>
                  {/* <i className="bi bi-card-image" ></i> */}
                   <Uploady
      destination={{ url: "https://api.cloudinary.com/v1_1/ds0k2xmd6/image/upload",
          params:{upload_preset: "neogprojectpreset"} }}
      // fileFilter={filterBySize}
      accept="image/*"
    >
      <MyUploadButton/>
     <span><UploadButton> <i className="bi bi-card-image" ></i></UploadButton></span>
      
      {/* <DivUploadButton />    */}
      {/* <UploadPreview/> */}
    
    </Uploady>
    <Uploady
      destination={{ url: "https://api.cloudinary.com/v1_1/ds0k2xmd6/video/upload",
          params:{upload_preset: "neogprojectpreset"} }}
      // fileFilter={filterBySize}
      accept="video/*">
      <MyUploadButton/>
      <span><UploadButton> <i className="bi bi-filetype-gif"></i></UploadButton></span>
    </Uploady>

  <Popover>
  <PopoverTrigger>
   <span><Button><i className="bi bi-emoji-smile"></i></Button></span>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader >Select Emoji </PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
      <Picker data={data} onEmojiSelect={(e)=>{setEmojiContent(e)}} ></Picker>
      </PopoverBody>
    </PopoverContent>
  </Portal>
</Popover>
                 
    {/* <i className="bi bi-emoji-smile"><Picker data={data} onEmojiSelect={console.log} ></Picker></i> */}
                </div>
                <button className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent" onClick={()=>{doCreateAPost(postText, postContent,token, homePageDispatch, setPostText(""))}}>Post</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-space-between mr-xxl flex-align-center pt-s">
          <h3 className="">Latest Posts</h3>
          <i className="bi bi-sliders2-vertical"></i>
        </div>
        {filteredPostOfUser && filteredPostOfUser.map(({_id, content, postContent, resourceType, likes, username, createdAt, updatedAt})=>(
       
        <div className="white-bg mr-xxl p-xs mt-s" key={_id}> 
          <div className="flex flex-row nowrap p-xs">
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio : '1'}}><img src={userAvatar(username)} alt="dummy" style={{borderRadius: "90%"}}/></div>
            <div>
              <div className="flex flex-row flex-align-center flex-space-between">
                <div className="flex flex-row">
                  <p className="fw-semibold">{username}</p>
                  <p className="grey-color pl-xs">
                    @{username} <span className="pl-xs">•</span>
                 
                    <span className="pl-xs">{Math.ceil(Math.abs(new Date()-new Date(updatedAt))/(1000 * 60 * 60 * 24))===1? "Today" : Math.ceil(Math.abs(new Date()-new Date(updatedAt))/(1000 * 60 * 60 * 24))+" days ago"} </span>
                  </p>
                </div>
                <Menu>
                <MenuButton border="none" background="white">
                <p>∙∙∙</p>
                </MenuButton>
                <MenuList>
                <ChakraProvider><OpenModal data={{_id, content}}/></ChakraProvider> 
                <MenuDivider/>
                <MenuItem height="24px" border="none" textStyle="bold" padding="4px" onClick={()=>deleteThisPostFromFeed(_id, username)}>Delete Post</MenuItem>
                </MenuList>
                </Menu>
              </div>
              <p className="pr-s pt-xs">
                {content}
                {console.log(777888, resourceType)}
                {postContent ? (resourceType && resourceType==="image" ? <img src={postContent} alt="postimage"/> : <video src={postContent} alt="postVideo"/>) : ""}
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
            <div className="grey-bg br-full width-xl height-xl">{<img src={user.avatar} alt="avatar-downloaded" style={{borderRadius: "50%"}}/>}</div>
            <div className="flex flex-column">
              <Link to={`/profileuserone/${user.firstName}`}>
                <div className="fw-bold">{user.firstName}</div>
                <div className="fw-light grey-color">@{user.username}</div>
                </Link>
            </div>
            <div className="primary-color fw-bold">
             { following.find((userItem)=>userItem._id===user._id) ? <button onClick={()=>{goToProfileTwo(user.firstName)}} style={{color:"white", background: "green", border: "none", padding: "4px"}}>
                Following <i className="bi bi-check-lg"></i>
              </button> : <button onClick={()=>{goToProfileOne(user.firstName)}} style={{color:"white", background: "orange", border: "none", padding: "4px"}}>
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