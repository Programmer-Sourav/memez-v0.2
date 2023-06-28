import { useContext } from "react"
import { ApplicationContext } from "../context/ApplicationContext"
import { Link } from "react-router-dom"


export default function RightMenu(){

  const { users , authenticatedUser, following, toFollow} = useContext(ApplicationContext)
  //const [ allUsers, setAllUsers ] = useState(users)

  const organicUsers = () =>{
    //console.log(user._id!==authenticatedUser._id)
    const updated =  toFollow.length>0 ? toFollow.filter((userItem)=>userItem._id!==authenticatedUser._id) : users.filter((userItem)=>userItem._id!==authenticatedUser._id)
    console.log(3456, updated)
    return updated;
 }
 
    return(
        <aside className="mt-xl mr-xxl sidebar2">
        <div className="white-bg mb-m pl-s border flex flex-row flex-center nowrap">
          {console.log("RightMenu")}
          <i className="bi bi-search"></i>
          <input type="search" name="search-bar" className="search-bar border-none outline-transparent p-s width-16" placeholder="Search Posts, People, Anything"/>
        </div>
        <div className="white-bg">
          <div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
            <div>Who to Follow?</div>
            <div className="primary-color">Show More</div>
          </div>
          {organicUsers().map((userItem)=>(
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
            
              <Link to={`/profileuserone/${userItem.firstName}`}>
                <div className="fw-bold">{userItem.username}</div>
                <div className="fw-light grey-color">@{userItem.username}</div>
              </Link>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
          ))}
        </div>
      </aside>
    )
}