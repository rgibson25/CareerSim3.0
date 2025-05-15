/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navigations from "./Navigations"
function Books({}){
    const[books, setBooks] = useState([])
    useEffect(()=>{
        async function getBooks(){
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
            const result = await response.json()
            console.log(result)
            setBooks(result)
        }
        getBooks()
    }, [])

    return(
        <>
        <h1>Digital Library</h1>
        <Navigations/>
        {
            books && (
                books.map((book)=>(
                    <div key= {book.id}>
                        <h2>{book.title}</h2>
                        <img src={book.coverimage} style={{height:300, width:200}}></img>
                        <h4>{book.author}</h4>
                        <Link to={`/singlebook/${book.id}`}>See More!</Link>
                    </div>
                ))
            )
        }
        </>
    )
}

export default Books