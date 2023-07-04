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
  const [postText, setPostText] = useState("");
  const { token, homePageDispatch, authenticatedUser, postContent, setPostContent } = useContext(ApplicationContext)


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
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Create A New Post</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              
              <textarea rows="6" column="50"
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
                  paddingLeft: "32px",
                  paddingRight: "32px",
                  height: "40px",
                  color: "white",
                  margin: "8px",
                  float: "right",
                  borderRadius: "8px"
                }}
               
              onClick={()=>{doCreateAPost(postText, postContent, token,  homePageDispatch, setPostContent(""), setPostText(""), onClose())}}
               >
                {" "}
                Post!{" "}
              </button>
            </ModalBody>
           <ModalFooter>
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