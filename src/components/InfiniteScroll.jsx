import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

export default function InfinteScroll({providedData}){
    console.log("Data ", providedData)
    const { items, setItems, setData } = useContext(ApplicationContext)

    const [ hasMore, setHasMore ] = useState(false)
    const [ page, setPage ] = useState(1)

    useEffect(()=>{fetchData(page)}, [page])

    const fetchData = (page) =>{
        
        const newItems = []; 

        for(let i = 0; i<providedData.length; i++) {
            newItems.push(providedData[i])
            console.log(4455, newItems)
        }

        if(page===100){
          setHasMore(false)
        }
    //   setItems([...items, ...newItems])
    setData(newItems)
    }

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

       return (
        <div>
          {items.map((item, index) => (
            <div key={index}>
              {item}
            
            </div>
          ))}
        
        </div>
      )
}