import { useState } from "react"


import Modal from "../components/Modal"

export default function PostPage(){

    const [show, setShow ] = useState(false)

    return(
       <div className="post text-center">
      <button className="btn-primary" onClick={() => setShow(true)}>
        Modal
      </button>
      <Modal show={show} onClose={() => setShow(false)}>
        
      </Modal>
    </div>
    )
}