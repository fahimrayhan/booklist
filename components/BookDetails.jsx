import {useContext} from 'react';
import { BookContext } from '../context/BookList';
import Styles from '../styles/Main.module.css';


const BookDetails = ({book}) => {

    const { dispatch } = useContext(BookContext)

    return ( 
        <li onClick={() => dispatch({type:"DELETE_BOOK",id:book.id})}>
            <div className={Styles.title}>{book.title}</div>
            <div className={Styles.author}>{book.author}</div>
        </li>
     );
}
 
export default BookDetails;