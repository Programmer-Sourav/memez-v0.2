import { useContext, useState } from "react"
//import "../stylesheets/style.css"
import { ApplicationContext } from "../context/ApplicationContext"
import { ACCESSOR_TYPES } from "@babel/types"
import { ACTION_TYPES } from "../reducer/ActionType"
import { doCreateAPost, doDisLikeAPost, doLikeAPost, doRemoveBookmark } from "../remote-apis/api-calls"
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/menu"
import { useNavigate } from "react-router"

import {  ChakraProvider } from "@chakra-ui/react";
import { OpenModal } from "../components/OpenModal"
import InfinteScroll from "../components/InfiniteScroll"


  export default function BookmarkView({bookmarks}){

    const {  homePageDispatch, token, loginStatus, authenticatedUser, postText, setPostText } = useContext(ApplicationContext)
  

  const checkIfPostIsBookmarked = (postId) =>{ 
    const isBookMarked = bookmarks.filter((currentPost) => currentPost._id === postId).length>0
    return isBookMarked
   }

   const removeBookMark = (postId, token, homePageDispatch) =>{
    doRemoveBookmark(postId, token, homePageDispatch)
  }

  const deleteThisPostFromFeed = (postId) =>{
    const result = bookmarks.filter((bookmarkItem)=>bookmarkItem._id!==postId)
  
    homePageDispatch({type: ACTION_TYPES.BOOKMARK, payload: result})
  }

 
    
    return(
        <main class="mt-xl">
        {/* <InfinteScroll providedData={bookmarks}/> */}
        <div class="flex flex-space-between mr-xxl flex-align-center pt-s">
          <h4 class="">Your Bookmarks</h4>
          <i class="bi bi-sliders2-vertical"></i>
        </div>
      
        {bookmarks.length>0 && bookmarks.map((bookMark)=>(
        
        <div class="white-bg mr-xxl p-xs mt-s" key={bookMark._id}>
          <div class="flex flex-row nowrap p-xs">
            <div class="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio : '1'}}></div>
            <div>
              <div class="flex flex-row flex-align-center flex-space-between">
                <div class="flex flex-row">
                  <p class="fw-semibold">{bookMark.username}</p>
                  <p class="grey-color pl-xs">
                    @{bookMark.username} <span class="pl-xs">•</span>
                    <span class="pl-xs">1 min</span>
                  </p>
                </div>
                <Menu>
                <MenuButton border="none" background="white">
                <p>∙∙∙</p>
                </MenuButton>
                <MenuList>
               <ChakraProvider><OpenModal data={bookMark}/></ChakraProvider> 
                <MenuDivider/>
                <MenuItem height="24px" border="none" textStyle="bold" padding="4px" onClick={()=>deleteThisPostFromFeed(bookMark._id)}>Delete Post</MenuItem>
                </MenuList>
                </Menu>
                
              </div>
              <p class="pr-s pt-xs">
                {bookMark.content}
              </p>
              <div class="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                 
                <i class="bi bi-chat-left"></i>
                <i class="bi bi-share"></i>
                {loginStatus && checkIfPostIsBookmarked(bookMark._id) ?
                <i class="bi bi-bookmark-fill" style={{color: "orange"}} onClick={()=>removeBookMark(bookMark._id, token, homePageDispatch)}></i>:""
                 }
              </div>
            </div>
          </div>
        </div>
        ))}
      </main>
    )
  }
  
  
  