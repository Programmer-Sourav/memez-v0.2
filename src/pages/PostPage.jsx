import { useContext } from "react"
import { ApplicationContext } from "../context/ApplicationContext"
import { useParams } from "react-router-dom"

export default function PostPage({posts}){

    const { authenticatedUser } = useContext(ApplicationContext)
    const { _id } = useParams(ApplicationContext)

    const findThePost =  getThisPost()

    function getThisPost(){
        const result = posts.find((post)=>post._id===_id)
        console.log(1234, result)
        return result
    }

return(
    <div> 
        <main class="mr-l h-full white-bg">
        <h3 class="pt-s ml-s">
          <i class="bi bi-arrow-left-short pr-s"></i>Post
        </h3>
        <div class="white-bg p-xs">
          <div class="flex flex-column nowrap p-xs">
            <div class="flex">
              <div class="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio: "1"}}><img src={authenticatedUser.avatar} alt="profilePic" style={{borderRadius:"50%"}}/></div>
              <div class="flex flex-row flex-align-center flex-space-between w-full">
                <div class="flex flex-column">
                  <p class="fw-semibold">{authenticatedUser.username}</p>
                  <p class="grey-color">@{authenticatedUser.username}</p>
                </div>
                <p class="">∙∙∙</p>
              </div>
            </div>
            <div>
              <p class="pr-s pt-xs txt-m">
                {findThePost.content}
              </p>
              <p class="grey-color mt-s txt-s">
                {findThePost.updatedAt} <span class="pl-xs">•</span>
                <span class="pl-xs">Oct 11, 2021</span>
              </p>
              <div class="w-full mt-s" style={{height: "1px", backgroundColor: "rgb(206, 206, 206)"}}></div>
              <p class="mt-s fw-bold">{findThePost.likes.likeCount} Likes</p>
              <div class="w-full mt-s" style={{height: "1px", backgroundColor: "rgb(206, 206, 206)"}}></div>
              <div class="flex flex-row nowrap flex-space-between pb-xs pt-m pl-s pr-s flex-align-center">
                <i class="bi bi-heart"></i>
                <i class="bi bi-chat-left"></i>
                <i class="bi bi-share"></i>
                <i class="bi bi-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full" style={{height: "1px", backgroundColor: "rgb(206, 206, 206)"}}></div>
        <div class="flex p-s">
          <div class="grey-bg br-full width-xl height-xl p-xs mr-s" style={{aspectRatio: "1"}}></div>
        <input type="text" class="lynx-gray-bg border-none outline-transparent w-full mr-xs p-xs " style={{backgroundColor: "rgb(242, 242, 242)"}} placeholder="Comment your reply"/>
        <button class="primary-bg secondary-color border-none outline-transparent pr-xl pl-xl">Post</button>
        </div>
        <div class="w-full" style={{height: "1px", backgroundColor: "rgb(206, 206, 206)"}}></div>
        <div class="white-bg  p-xs mt-s">
          <div class="flex flex-row nowrap p-xs w-full">
            <div class="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio: "1"}}></div>
            <div>
              <div class="flex flex-row flex-align-center  flex-space-between">
                <div class="flex flex-column">
                  <div class="flex flex-row">
                    <p class="fw-bold">Ashwin Khode</p>
                    <p class="grey-color pl-xs">
                      @ashwin4real <span class="pl-xs">•</span>
                      <span class="pl-xs">1m</span>
                    </p></div>
                  <p></p>
                  <p class="lynx-gray-color">Replying to <span class="primary-color">@tanaypratap</span></p>
                </div>
                <p class="">∙∙∙</p>
              </div>
              <p class="pr-s pt-xs">
                Non programmers on my timeline. Attention. 
              
                After placing 100+ programmers i in top Indian startups, I am
                thinking of coming up with a program for business roles as well.
                
                Interested in helping me build this course? Join the telegram
                group (in next tweet)
              </p>
              <div class="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                <i class="bi bi-heart"></i>
                <i class="bi bi-chat-left"></i>
                <i class="bi bi-share"></i>
                <i class="bi bi-bookmark-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
)
}