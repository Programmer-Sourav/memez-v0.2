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
import { toast } from "react-hot-toast";


function EditModal({data}){
  
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { editProfile, profileImage, setProfileImage, images, updateImages, onChnageBio, onChangeUrl, imagedata} = useContext(ApplicationContext);

  
     
      
   const [checkBoxStatus, updateCheckBoxStatus] = useState(false)

  const onChangeHandler = (e, imageId) =>{
   const updatedResult = imagedata.map((imageItem)=>imageItem.id===imageId ? {...imageItem, selected : !imageItem.selected} : imageItem)
   
   if(e.target.checked){
   updateCheckBoxStatus(true)
   } 
   updateImages(updatedResult)
  }
 
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
       <button onClick={()=>saveSelected()} disabled={!checkBoxStatus} style={{background:"orange", color:"white"}}>Change</button> <br/> 
      
       {  images.map((imageItem)=>(
      <ul style={{display:"inline-block",margin: "4px", borderRadius: "50%" }}>
      <li>
      <input type="checkbox" checked= {imageItem.selected} onChange = {(e)=>{onChangeHandler(e, imageItem.id)}}/>
      <img src = {imageItem.image} style={{height:"52px", width:"52px", borderRadius:"50%", display:"block"}} alt="download"/>  
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