import {React,  useState}  from "react";
import styles from "../stylesheets/add_post_modal.css";

const Modal = ({ show, onClose, children }) => {
  const [myText, setMyText] = useState("")

  if (!show) {
    return null;
  }

  const saveData = () =>{
    console.log(myText)
  }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <input type="text" value = {myText} onChange={(e)=>setMyText(e.target.value)}/>
        <button onClick={onClose} className={`${styles.btnClose} btn-close`} />
        <button onClick={saveData}> Save </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;