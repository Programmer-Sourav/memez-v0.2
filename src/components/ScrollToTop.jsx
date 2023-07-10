import { useEffect, useState } from "react"

export default function ScrollToTop(){


    const [showButton, setShowButton] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            window.scrollY>512 ? setShowButton(true) : setShowButton(false)
        })
    }, [])

    const handleScrollToTop = () =>{
        window.scrollTo({top: 0, behaviour: 'smooth'})
      }

      return(
        <div>
         {console.log(555, showButton)}  
        {showButton && <button onClick={handleScrollToTop} style={{background:"red", color: "white"}}>Scroll To Top</button>
        }
        </div>
      )

}