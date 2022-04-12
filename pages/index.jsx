import BookForm from '../components/BookForm'
import BookList from '../components/BookList'
import NavBar from '../components/NavBar'
import BookListProvider from '../context/BookList'


export default function Home() {
  return (
    <div>
        <BookListProvider>
          <NavBar/>
          <BookList/>
          <BookForm/>
        </BookListProvider>
    </div>
  )
}
