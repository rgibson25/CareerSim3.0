/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from "react"
import Books from "./Books"
import { useParams } from "react-router-dom"
function SingleBook(){
    const[singleBook, setSingleBook] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        async function getSingleBook(){
            const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
            const result = await response.json()
            setSingleBook(result)
        }
        getSingleBook()
    },[])
    return(
        <>
        {
            singleBook && 
                <div>
                    <h2>{singleBook.title}</h2>
                    <img src={singleBook.coverimage} style={{height:300, width:200}}></img>
                        <h4>{singleBook.author}</h4>
                    <h2>{singleBook.description}</h2>
                    <button>Reserve this book!</button>
                </div>
        }
        </>
    )
}
export default SingleBook