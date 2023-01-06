import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Author(){
const[aulist,setaulist]=useState([])
    const p =useParams()

    useEffect(()=>{
        const aauthor =async()=>{
            const {data}=await axios.post(`http://localhost:7000/list_by_author`,JSON.stringify({author:p.author}))
            console.log(data);
            setaulist(data)
       }
       aauthor()

    },[])
  
    return(
        <>
            <h1>great  {p.author}</h1>

        {aulist&& aulist.map((to)=>{
            return(
                <>
            <h5>{to.title}</h5>

                
                </>
            )
        })}
        </>
    )
}