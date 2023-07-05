import { useContext, useState } from "react"
import { ApplicationContext } from "../context/ApplicationContext"
import { Link } from "react-router-dom"


export default function RightMenu(){

  const { users , authenticatedUser, following} = useContext(ApplicationContext)
  const [searchVal, setSearchVal ] = useState("")
 
  const organicUsers = () =>{
    //both the following and users are array
    const updated = 
    users.filter((userItem)=>
         !following.find((followingItem)=>
         followingItem._id===userItem._id) && authenticatedUser._id !== userItem._id )
    return updated;
 }

 const onSearchHandler = (e) =>{
  setSearchVal(e.target.value)
 }
 
 const filteredUsers = organicUsers().filter((userItem)=>userItem.username.toLowerCase().includes(searchVal.toLowerCase()))
 
    return(
        <aside className="mt-xl mr-xxl sidebar2">
        <div className="white-bg mb-m pl-s border flex flex-row flex-center nowrap">
          <i className="bi bi-search"></i>
          <input type="search" name="search-bar" className="search-bar border-none outline-transparent p-s width-16" placeholder="Search Posts, People, Anything" onChange = {(e)=>{onSearchHandler(e)}}/>
        </div>
        <div className="white-bg">
          <div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
            <div>Who to Follow?</div>
            <div className="primary-color">Show More</div>
          </div>
          {filteredUsers.map((userItem)=>(
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"><img src={userItem.avatar} alt="dummy" style={{borderRadius: "50%"}}/></div>
            <div className="flex flex-column">
              <Link to={`/users/${userItem._id}`}>
                <div className="fw-bold">{userItem.username}</div>
                <div className="fw-light grey-color">@{userItem.username}</div>
              </Link>
            </div>
            <div className="primary-color fw-bold" style={{color:"white", background: "orange", border: "none", padding: "4px"}}>
              <Link to={`/users/${userItem._id}`}>
                Follow <i className="bi bi-plus-lg"></i>
              </Link>
            </div>
          </div>
          ))}
        </div>
      </aside>
    )
}