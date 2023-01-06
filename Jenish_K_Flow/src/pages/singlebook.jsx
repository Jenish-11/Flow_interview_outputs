import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Single_books(){
const[single,setSingle]=useState({})
const[book,setBook]=useState({

})



const summit=async ()=>{
    const {data}=await axios.post(`http://localhost:7000/create`,JSON.stringify(book))
    console.log(data);
}
const update=async()=>{
    const {data}=await axios.post(`http://localhost:7000/update`,JSON.stringify({title:book.title,author:book.author,year:book.year, id:p.id}))
    console.log(data)

}
console.log(book);
const p =useParams()
    useEffect(()=>{
        const getbyid=async()=>{
            const {data}=await axios.post(`http://localhost:7000/get_by_id`,JSON.stringify({id:p.id}))
            console.log("s",data);
            setSingle(data[0])

        }
        getbyid()
     
    },[])
    return(
        <>

            <h1>single book</h1>
            <h5>{single.id}</h5>
            <h5>{single.title}</h5>
            <h5>{single.author}</h5>
            <h5>{single.year}</h5>


            <div>
                <h1 className="mt-5"> create Book</h1>
                <input type="text" placeholder="Title" onChange={(e)=>setBook({...book,title:e.target.value})}/>
                <input type="text" placeholder="Author" onChange={(e)=>setBook({...book,author:e.target.value})}/>
                <input type="number" placeholder="Year" onChange={(e)=>setBook({...book,year:e.target.value})}/>
            </div>
            <button className="mt-3" onClick={()=>summit()}>Summit</button>

            <h1 className="mt-5"> Update Book</h1>
            <input type="text" placeholder="Title" onChange={(e)=>setBook({...book,title:e.target.value})}/>
            <input type="text" placeholder="Author" onChange={(e)=>setBook({...book,author:e.target.value})}/>
            <input type="number" placeholder="Year" onChange={(e)=>setBook({...book,year:e.target.value})}/>
       
                
            <button onClick={()=>{
                update()
            }}>update</button>
        </>
    )
}