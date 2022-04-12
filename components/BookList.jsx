import {useContext} from 'react'
import { BookContext } from '../context/BookList';
import BookDetails from './BookDetails';
import Styles from '../styles/Main.module.css';

const BookList = () => {

    const {books} = useContext(BookContext)
    

    return books.length ? (
        <div className={Styles.booklist}>
            <ul>
                {
                    books.map(book =>{
                        return (
                            <BookDetails book={book} key={book.id}/>
                        )
                    })
                }
            </ul>
        </div>
    ) : (
        <div className={Styles.empty}>No books to read. Hello free time!</div>
    )
}
 
export default BookList;