import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import "../stylesheets/base.css"
//import Modal from "../components/Modal";
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
import {  ChakraProvider } from "@chakra-ui/react";
import { doCreateAPost } from "../remote-apis/api-calls";
import { ApplicationContext } from "../context/ApplicationContext";

export default function LeftMenu(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postText, setPostText] = useState("This is just a default text");
  const { token, homePageDispatch, authenticatedUser } = useContext(ApplicationContext)


    return(
        <aside className="p-s pt-xl pl-xxl ml-m sidebar1">
        <div className="flex flex-column flex-space-between sidebar">
          <div>
            <div className="pt-s black-color fw-semibold">
              <Link to="/home">
                <i className="bi bi-house"></i> &nbsp;
                <span className="fw-bold">Home</span>
              </Link>
            </div>
            <div className="pt-s black-color fw-semibold">
              <Link to ="/explore">
                <i className="bi bi-rocket"></i> &nbsp;
                <span>Explore</span>
              </Link>
            </div>
            <div className="pt-s black-color fw-semibold">
              <Link to ="../bookmark">
                <i className="bi bi-bookmark"></i> &nbsp;
                <span>Bookmark</span>
              </Link>
            </div>
            <div className="pt-s black-color fw-semibold">
              <Link to="../myprofile">
                <i className="bi bi-person"></i> &nbsp;
                <span>Profile</span>
              </Link>
            </div>
            <button className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn" onClick={onOpen}>
              Create New Post
            </button>
            </div>
      <ChakraProvider>   
      <Modal isOpen={isOpen} onClose={onClose}>
      {console.log("isOpen", isOpen)}
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              
              <input
                type="text"
                value={postText}
                style={{
                  border: "1px solid black",
                  height: "128px",
                  width: "392px"
                }}
                onChange={(e) => {
                  setPostText(e.target.value);
                }}
              />
              <button
                style={{
                  background: "green",
                  padding: "4px",
                  color: "white",
                  margin: "4px"
                }}
               
                  onClick={()=>{doCreateAPost(postText, token, homePageDispatch, setPostText(""))}}
              
              >
                {" "}
                Post{" "}
              </button>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue"  mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      </ChakraProvider>   
           
           <div className="flex flex-space-between flex-align-center">
            <div className="flex">
              <div className="grey-bg br-full width-xl height-xl">{<img src={authenticatedUser.avatar} alt="" style={{borderRadius:"50%"}}/>}</div>
              <div className="flex flex-column ml-xs">
                <div className="fw-bold">{authenticatedUser.username}</div>
                <div className="fw-light grey-color">@{authenticatedUser.username}</div>
              </div>
            </div>
            <div className="grey-color fw-bold">...</div>
          </div>
        </div>
      </aside>
    )
}