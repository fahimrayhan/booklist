import {useContext, useState} from 'react'
import { BookContext } from '../context/BookList';
import Styles from '../styles/Main.module.css';

const BookForm = () => {

    const {dispatch} = useContext(BookContext)
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: "ADD_BOOK", book:{
            title, author
        }})
        setTitle("")
        setAuthor("")
    }

    return ( 
        <form onSubmit={handleSubmit} className={Styles.form}>
            <input type="text" name="title" placeholder="Book Title" required value={title} onChange={(e)=>{
                setTitle(e.target.value) 
            }} />
            <input type="text" name="author" placeholder="Book Author" required value={author} onChange={(e) => {
                setAuthor(e.target.value)}} />
            <input type="submit" value="Add Book" />
        </form>
     );
}
 
export default BookForm;