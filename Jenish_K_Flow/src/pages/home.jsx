import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
export default function Home(){
const[list, setlist]=useState([])



const delee=async(i)=>{
    const {data} =await axios.post(`http://localhost:7000/delete`,JSON.stringify({id:i}))
    console.log(data);


}
useEffect(()=>{

    const get_books=async()=>{

        const {data} =await axios.get(`http://localhost:7000/get_books`)
        console.log(data);
        setlist(data)
        
    }
    get_books()
},[])

    return(
        <>
            <div className="container">
                <h1>List of Books</h1>
                {list&&list.map((to)=>{

                    return(
                        <>
                      <Link className="" to={`/single_books/${to.id}`}> <li className="d-inline">{to.title}</li></Link>
                       <div className=""> <button onClick={()=>{
                                delee(to.id)
                        }} className="bg-danger float-right">Delete</button><br /> <br />
        
                        </div></>
                    )

                })}
            </div>
<h1>AUthors</h1>
            <div className="col-12">
                {
                    list&& list.map((to)=>{

                        return(
                            <>
                <Link to={`/${to.author}`}>{to.author}</Link><br /><br />

                            </>

                        )
                    })
                }

            </div>
        </>
    )
}