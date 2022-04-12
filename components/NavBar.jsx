import {useContext} from 'react'
import { BookContext } from '../context/BookList'
import Styles from '../styles/Main.module.css'

const NavBar = () => {

    const { books } = useContext(BookContext)

    return ( 
        <div className={Styles.navbar}>
            <h1>My Reading List</h1>
            <p>
                Currently, you have {books.length} books to get through...
            </p>
        </div>
    );
}
 
export default NavBar;