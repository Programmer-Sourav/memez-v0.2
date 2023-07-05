import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

export default function InfinteScroll({providedData}){
  
    const { items, setItems, setData, bookmarks } = useContext(ApplicationContext)
    const [loading, setLoading ] = useState(false)
    const [ hasMore, setHasMore ] = useState(false)
    const [ page, setPage ] = useState(1)
   
   

    useEffect(() => {
      fetchData(page, providedData);
    }, [providedData, page]);

   
    const fetchData = (page, providedData) => {
      if(page===100){
        setHasMore(false)
      }
  
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

    useEffect(()=>{window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
       }, [])

}