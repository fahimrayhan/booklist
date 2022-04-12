import { createContext,  useReducer, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import bookReducer from "../reducers/bookReducer";

export const BookContext = createContext()

const BookListProvider = (props) => {

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