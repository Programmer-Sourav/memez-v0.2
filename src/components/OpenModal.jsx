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
  border,
  Circle
} from "@chakra-ui/react";
import { ApplicationContext } from "../context/ApplicationContext";
import { doCreateAPost, doEditAPost } from "../remote-apis/api-calls";
import Uploady, {useItemStartListener, useItemFinishListener, useItemErrorListener, useItemProgressListener} from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import { toast } from "react-hot-toast";


function OpenModal({data}){
  
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {postText, setPostText, token, homePageDispatch, postContent, setPostContent} = useContext(ApplicationContext);
  
  const [ postEdit, setPostEdit ] = useState(data.content)

  const UploadProgress = () => { 
    const [progress, setProgess] = useState(0);
    if(progress===100)
    toast.success("File Uploaded Successfully!")
    const progressData = useItemProgressListener();   if (progressData && progressData.completed > progress) { 
      setProgess(() => progressData.completed);
    }   return progressData && <Circle style={{ height: "60px" }}              
                                   strokeWidth={10}
                                   strokeColor={progress === 100 ? "#00a626" : "#2db7f5"}
                                   percent={progress} />;
                                 };

                                 const MyUploadButton = () =>{
                                  /**code provided by uploady.org */
                               
                                  useItemStartListener(item => {
                                    
                                    console.log(`item ${item.id} uploading now. file name=${item.file.name}`)
                                }); 
                              }                             

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
               <div className="flex flex-space-between pt-s">
                <div className="flex " style={{gap : '1rem'}}>
               <Uploady
      destination={{ url: "https://api.cloudinary.com/v1_1/ds0k2xmd6/image/upload",
          params:{upload_preset: "neogprojectpreset"} }}
      // fileFilter={filterBySize}
      accept="image/*"
    >
      <MyUploadButton/>
     <span><UploadButton> <i className="bi bi-card-image" ></i></UploadButton></span>
      
      {/* <DivUploadButton />    */}
      {/* <UploadPreview/> */}
    <UploadProgress />
    </Uploady>
    <Uploady
      destination={{ url: "https://api.cloudinary.com/v1_1/ds0k2xmd6/video/upload",
          params:{upload_preset: "neogprojectpreset"} }}
      // fileFilter={filterBySize}
      accept="video/*">
      <MyUploadButton/>
      <span><UploadButton> <i className="bi bi-filetype-gif"></i></UploadButton></span>
      <UploadProgress />
    </Uploady>
    </div>
    </div>

              <button
                style={{
                  background: "green",
                  padding: "4px",
                  color: "white",
                  margin: "4px",
                  float: "right",
                  borderRadius: "8px"
                }}
               
              onClick={()=>{doEditAPost(data._id, postEdit, postContent, token, homePageDispatch, setPostText(""), onClose())}} >
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