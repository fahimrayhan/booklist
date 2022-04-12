import BookForm from '../components/BookForm'
import BookList from '../components/BookList'
import NavBar from '../components/NavBar'
import BookListProvider from '../context/BookList'
import Styles from '../styles/Main.module.css'

export default function Home() {
  return (
    <div className={Styles.main}>
        <BookListProvider>
          <NavBar/>
          <BookList/>
          <BookForm/>
        </BookListProvider>
    </div>
  )
}
