export default function ProfilePageUser(){


    return(
      
        <main class="p-s">
        <div class="flex flex-column flex-center">
          <div class="lynx-gray-bg width-7 height-7 br-full"></div>
          <h3 class="pt-s">Tanay Pratap</h3>
          <p class="grey-color txt-s">@tanaypratap</p>
          <button class="border-none primary-bg white-color p-xs m-xs fw-semibold width-10">
            <a href="./profile2.html"> Follow </a>
          </button>
          <p class="m-xs p-xs">
            Senior Software Engineer @Microsoft | Creator of India’s biggest
            programming community | Tweets about JavaScript, ReactJS, Career and
            Startups
          </p>
          <p class="primary-color">tanaypratap.com</p>
          <div class="white-bg p-xs m-xs flex flex-row flex-space-evenly">
            <div class="flex flex-column flex-center m-s ml-m mr-m">
              <p class="fw-black">0</p>
              <p class="fw-semibold">Following</p>
            </div>
            <div class="flex flex-column flex-center m-s ml-m mr-m">
              <p class="fw-black">2K</p>
              <p class="fw-semibold">Posts</p>
            </div>
            <div class="flex flex-column flex-center m-s ml-m mr-m">
              <p class="fw-black">37.3K</p>
              <p class="fw-semibold">Followers</p>
            </div>
          </div>
        </div>
        <h3 class="m-s">Your Posts</h3>
        <div class="white-bg">
          <div class="flex flex-row nowrap p-xs">
            <div class="grey-bg br-full width-xl height-xl p-xs mr-xs"></div>
            <div>
              <div class="flex flex-row flex-align-center flex-space-between">
                <div class="flex flex-row">
                  <p class="fw-semibold">Tanay Pratap</p>
                  <p class="grey-color pl-xs">
                    @tanaypratap <span class="pl-xs">•</span>
                    <span class="pl-xs">1 min</span>
                  </p>
                </div>
                <p>∙∙∙</p>
              </div>
              <p class="pr-s">
               
              </p>
              <div class="flex flex-row nowrap flex-space-between pt-s pr-s flex-align-center">
                <i class="bi bi-heart"></i>
                <i class="bi bi-chat-left"></i>
                <i class="bi bi-share"></i>
                <i class="bi bi-sliders"></i>
              </div>
            </div>
          </div>
        </div>
      </main>
    )

}