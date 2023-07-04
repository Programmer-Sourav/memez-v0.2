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


function OpenModal({data}){
  
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {postText, setPostText, token, homePageDispatch} = useContext(ApplicationContext);
  
  const [ postEdit, setPostEdit ] = useState(data.content)
return(
<>
<button onClick={onOpen}>Edit Post</button>
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Edit your post</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              
              <textarea rows="6" cols="50"
                value={postEdit}
                style={{
                  border: "1px solid black",
                  height: "128px",
                  width: "392px", 
                  alignContent:"top"
                }}
                onChange={(e) => {
                  setPostEdit(e.target.value);
                }}
              />
              <button
                style={{
                  background: "green",
                  padding: "4px",
                  color: "white",
                  margin: "4px",
                  float: "right",
                  borderRadius: "8px"
                }}
               
              onClick={()=>{doEditAPost(data._id, postEdit, token, homePageDispatch, setPostText(""), onClose())}} >
                {" "}
                Update{" "}
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
export {OpenModal}