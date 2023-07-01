import { useState } from "react"

export default function UploadImage(){
  
    const [imageToBeUploaded, setUploadedImage] = useState("")

    return(
        <div>

            
            <input type="file" name="imageforUpload" onChange={(event)=>{setUploadedImage(event.target.files[0])}}/>

        </div>
    )
}