import "../stylesheets/base.css"


export default function LeftMenu(){
    return(
         <div className="container">
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
              <a href="../bookmarks/bookmark.html">
                <i className="bi bi-bookmark"></i> &nbsp;
                <span>Bookmark</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <a href="../profile/profile.html">
                <i className="bi bi-person"></i> &nbsp;
                <span>Profile</span>
              </a>
            </div>
            <button className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn">
              Create New Post
            </button>

           </div>
           <div className="flex flex-space-between flex-align-center">
            <div className="flex">
              <div className="grey-bg br-full width-xl height-xl"></div>
              <div className="flex flex-column ml-xs">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </div>
            </div>
            <div className="grey-color fw-bold">...</div>
          </div>
        </div>
      </aside>
      </div>
    )
}