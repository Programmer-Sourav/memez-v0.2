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


function EditModal({data}){
  
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {postText, setPostText, token, homePageDispatch, editProfile, setEditProfile, onChnageBio, onChangeUrl} = useContext(ApplicationContext);

return(
<>
<button onClick={onOpen}><h4>Edit Profile</h4></button>
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Edit Your Profile</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <p>Username: {data.username}</p>
              <p>Firstname: {data.firstName}</p>
              {console.log(778, editProfile.bio)}
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