import { useContext } from "react"
import { ApplicationContext } from "../../context/ApplicationContext"
import { useState } from "react"
import { users } from "../../backend/db/users"


export default function ExploreView(){

  const { users, authenticatedUser, posts } = useContext(ApplicationContext)
  const [ tabValue, setTabValue ] = useState("")
  const [allUser, setAllUser ] = useState(users)
  const [selectedTab, setSelectedTab] = useState({});


  const handleTabs = (e, value, tabname) =>{
     setTabValue(value)
     setSelectedTab(tabname)
  }
  
  const filteredPost = posts.filter((postItem)=>postItem.username!==authenticatedUser.username)
  let updatedPost = [...filteredPost];

  if(tabValue==="trending")
  updatedPost = [...filteredPost].sort((p1, p2)=>p2.likes.likeCount>p1.likes.likeCount)

  if(tabValue==="technology")
  updatedPost = [...filteredPost].reduce(
    (acc, postItem) => (postItem.category === tabValue ? [...acc, postItem] : acc),
    []
  );

  if(tabValue==="sports")
  updatedPost = [...filteredPost].reduce(
    (acc, postItem) => (postItem.category === tabValue ? [...acc, postItem] : acc),
    []
  );

  if(tabValue==="news")
  updatedPost = [...filteredPost].reduce(
    (acc, postItem) => (postItem.category === tabValue ? [...acc, postItem] : acc),
    []
  );
  

 const userAvatar = (username) =>{
  const user = allUser.find((userItem)=>userItem.username===username)
  let avatarUrl;
  if(user!==undefined)
  avatarUrl = user.avatar
  return avatarUrl
 }
   return(
    <main class="mt-xl" style={{height: "100%"}}>
        <h3 class="pt-s">Explore</h3>
        <div class="flex flex-row nowrap">
          <div class= {selectedTab==="For You" ? "border p-xs mt-xs mb-xs mr-s width-7 txt-center black-semibold" : "border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color" }  onClick={(e)=>{handleTabs(e, "ForYou", "For You")}}>
            For You
          </div>
          <div class= {selectedTab==="Trending" ? "border p-xs mt-xs mb-xs mr-s width-7 txt-center black-semibold" : "border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color" } onClick={(e)=>{handleTabs(e, "trending", "Trending")}}>
            Trending
          </div>
          <div class= {selectedTab==="Technology" ? "border p-xs mt-xs mb-xs mr-s width-7 txt-center black-semibold" : "border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"} onClick={(e)=>handleTabs(e, "technology", "Technology")}>
            Technology
          </div>
          <div class= {selectedTab==="Sports" ? "border p-xs mt-xs mb-xs mr-s width-7 txt-center black-semibold"  :"border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"} onClick={(e)=>handleTabs(e, "sports", "Sports")}>
            Sports
          </div>
          <div class= {selectedTab==="News" ? "border p-xs mt-xs mb-xs mr-s width-7 txt-center black-semibold" : "border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"} onClick={(e)=>handleTabs(e, "news", "News")}>
            News
          </div>
        </div>
        {updatedPost.map((postItem)=>(
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
                {postItem.postContent ? (postItem.resourceType && postItem.resourceType==="image" ? <img src={postItem.postContent} alt="postimage"/> : <video width="750" height="380" controls >
      <source src={postItem.postContent} />
</video>) : ""}
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