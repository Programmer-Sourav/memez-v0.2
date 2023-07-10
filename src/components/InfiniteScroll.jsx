import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
import Bookmark from "../pages/Bookmark";
import { doDownloadBookMark } from "../remote-apis/api-calls";

export default function InfinteScroll(){
  
    const { items, setItems, setData, bookmarks, token, homePageDispatch } = useContext(ApplicationContext)
    const [loading, setLoading ] = useState(true)
    const [ hasMore, setHasMore ] = useState(false)
    const [showButton, setShowButton] = useState(false)

    const [ page, setPage ] = useState(1)
   
     useEffect(()=>{
        doDownloadBookMark(token, homePageDispatch)
    },[])
   console.log(123, bookmarks)

    useEffect(() => {
      fetchData(page, bookmarks);
    }, [bookmarks, page]);

   
    const fetchData = (page, providedData) => {
      if(page===10){
        setHasMore(false)
      }
  setLoading(true)
  setItems((items)=>[...items, ...providedData])
  setLoading(false)
 
 if(!hasMore){
  setLoading(false)
 }
  };
   
    const onScroll = () =>{

        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        if(scrollTop + clientHeight >= scrollHeight){
          setLoading(true);
          setPage((prev) => prev + 1);
        }

    }

  

    useEffect(()=>{
        //Button is displayed after scrolling 1024 pixels
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
       }, [])

       return(
        <div>
          <Bookmark bookmarks={items}/>
          {loading && <div className="loader"/>}
        </div>
       )

}