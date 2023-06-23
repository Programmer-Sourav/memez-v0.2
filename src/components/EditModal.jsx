import {React,  useContext,  useState}  from "react";
import styles from "../stylesheets/add_post_modal.css";
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
import { ApplicationContext } from "../context/ApplicationContext";
import { doCreateAPost, doEditAPost } from "../remote-apis/api-calls";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


function EditModal({data}){
  
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {postText, setPostText, token, homePageDispatch, editProfile, setEditProfile, onChnageBio, onChangeUrl} = useContext(ApplicationContext);

  const imagedata = [{id: 1, image: require("../avatars/avatar2.png"), selected: false}, 
                {id: 2, image: require("../avatars/avatar1.png"), selected: false}, 
                {id: 3, image: require("../avatars/avatar3.png"), selected: false},
                {id: 4, image: require("../avatars/avatar4.png"), selected: false},
                {id: 5, image: require("../avatars/avatar5.png"), selected: false},
                {id: 6, image: require("../avatars/avatar6.png"), selected: false}]
   const [images, updateImages ] = useState(imagedata)     
   const findUrl = images.find((imageItem)=>imageItem.id===5)   //default selection
   const [profileImage, setProfileImage] = useState({image:findUrl.image})     
   let checkBoxStatus = false;

  const onChangeHandler = (e, imageId) =>{
   const updatedResult = imagedata.map((imageItem)=>imageItem.id===imageId ? {...imageItem, selected : !imageItem.selected} : imageItem)
   
   if(e.target.checked){
   checkBoxStatus = !checkBoxStatus
   } 
   updateImages(updatedResult)
  }
  console.log(6667, checkBoxStatus)
const saveSelected = () =>{
  const findUrl = images.find((imageItem)=>imageItem.selected===true)
  setProfileImage({...profileImage, image: findUrl.image})
}
 

return(
<>
 
<button onClick={onOpen}><h4>Edit Profile</h4></button>
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Edit Your Profile</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
        <img src={profileImage.image} alt="dummyavatar" style={{
          borderRadius: "50%",
          width: 60,
          height: 60,
          background: "red",
          display: "block"
        }}></img>
       <button onClick={()=>saveSelected()} disabled={checkBoxStatus} style={{background:"orange", color:"white"}}>Change</button> <br/> 
      
       {  images.map((imageItem)=>(
      <ul style={{display:"inline-block",margin: "4px", borderRadius: "50%" }}>
      <li>
      <input type="checkbox" checked= {imageItem.selected} onChange = {(e)=>{onChangeHandler(e, imageItem.id)}}/>
      <img src = {imageItem.image} height="52px" width="52px" alt="download"/>  
      </li>
      </ul>
    ))}
              <p>Username: {data.username}</p>
              <p>Firstname: {data.firstName}</p>
              <p> Bio: <input
                type="text"
                value={editProfile.bio}
                style={{
                  border: "1px solid gray",
                  height: "32px",
                  width: "128px"
                }}
                onChange={(e) => {
                    onChnageBio(e)
                }}
              /></p>
              <p> Website: <input
                type="text"
                value={editProfile.url}
                style={{
                  border: "1px solid gray",
                  height: "32px",
                  width: "128px",
                  margin: "4px"
                }}
                onChange={(e) => {
                    onChangeUrl(e)
                }}
              /></p>
              <button
                style={{
                  background: "green",
                  padding: "4px",
                  color: "white",
                  margin: "4px"
                }} onClick={onClose}>
               Update
               
              </button>
            </ModalBody>

            <ModalFooter>
             
            </ModalFooter>
          </ModalContent>
        {/* </ModalOverlay> */}
      </Modal>
      </>
)
}
export {EditModal}