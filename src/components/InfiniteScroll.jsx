import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

export default function InfinteScroll({providedData}){
    console.log("Data ", providedData)
    const { bookmarks } = useContext(ApplicationContext)

    const { items, setItems, setData } = useContext(ApplicationContext)

    const [ hasMore, setHasMore ] = useState(false)
    const [ page, setPage ] = useState(1)

    useEffect(() => {
      fetchData();
    }, []);

   
    const fetchData = () => {
      if(page===100){
        setHasMore(false)
      }
  //   setItems([...items, ...newItems])
  console.log("Fetch", providedData, page)
  setItems([...items, ...bookmarks])
    };
    console.log(121212, items)


//   console.log("Fetch", providedData, page)
//   setData([...providedData])

    const onScroll = () =>{

        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.schollHeight
        const clientHeight = document.documentElement.clientHeight

        if(scrollTop + clientHeight >= scrollHeight){
            setPage(page + 1)
        }

    }

    useEffect(()=>{window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
       }, [items])

      //  return (
      //   <div>
      //     {items.map((item, index) => (
      //       <div key={index}>
      //         {item}
            
      //       </div>
      //     ))}
        
      //   </div>
      // )
}