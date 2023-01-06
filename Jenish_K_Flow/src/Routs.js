import Home from "./pages/home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useNavigate
}from 'react-router-dom'
import Single_books from "./pages/singlebook";
import Author from "./pages/author";
export default function Roots(){


    return(
        <>
            {/* <States.Provider value={{carts,setcart}}> */}
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/single_books/:id" element={<Single_books/>}/>
                <Route path="/:author" element={<Author/>}/>

            </Routes>
        </Router>   
        {/* </States.Provider>  */}
        
        </>
    )
}