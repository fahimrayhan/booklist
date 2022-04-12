import { createContext,  useReducer, useEffect, useState } from "react";
import bookReducer from "../reducers/bookReducer";

export const BookContext = createContext()

const BookListProvider = (props) => {

    // () => {
    //     const localData = JSON.parse(localStorage.getItem("books"))
    //     return localData ? localData : []

    const [books, dispatch] = useReducer(bookReducer,[])

    useEffect(() => {
          localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    
    
    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookListProvider;