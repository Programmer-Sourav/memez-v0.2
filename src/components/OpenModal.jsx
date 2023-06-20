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
  console.log("INSIDE Open modal")
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {postText, setPostText, token, homePageDispatch} = useContext(ApplicationContext);
  
  console.log(6666, data._id)
  const [ postEdit, setPostEdit ] = useState(data)
return(
<>
<button onClick={onOpen}>Edit Post</button>
<Modal isOpen={isOpen} onClose={onClose}>
      {console.log("isOpen", isOpen)}
        <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Edit your post</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              
              <input
                type="text"
                value={postEdit}
                style={{
                  border: "1px solid black",
                  height: "128px",
                  width: "392px"
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
                  margin: "4px"
                }}
               
              onClick={()=>{doEditAPost(data._id, postEdit, token, homePageDispatch, setPostText(""))}} >
                {" "}
                Update{" "}
              </button>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue"  mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        {/* </ModalOverlay> */}
      </Modal>
      </>
)
}
export {OpenModal}