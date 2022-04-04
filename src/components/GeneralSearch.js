import React from "react";
import "./SearchByLanguage.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { getDocs, collectionGroup, query } from "firebase/firestore";
import BookCard from "./BookCard";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


function GeneralSearch() {
    const [foundBooks, setFoundBooks] = useState([]);
    const [bookName, setBookName] = useState("");
    const [showAlert, setShowAlert] = useState(false);
 
    useEffect(() => {

    }, [foundBooks]);
    
    const handleSubmit = e => {
        e.preventDefault();
        getBooks();
        if (foundBooks.length < 1) {
            setShowAlert(true);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setShowAlert(false);
      };

    const getBooks = async () => {
        const books = query(collectionGroup(db, 'books'));
        const querySnapshot = await getDocs(books);

        const matchingBooks = [];
        querySnapshot.forEach(doc => {
            matchingBooks.push(doc.data());
        });
        setFoundBooks(prev => matchingBooks);
        return matchingBooks;
    };

    return (
        <div className="searchByLang">
        <form onSubmit={handleSubmit}>
            <input type="text" className="bookTitle"
                name="searchInput"
                placeholder="Book title"
                onChange={e => setBookName(e.target.value)}
            />
        <input type="submit" value="Search" />
        </form>

        <div className="search_results">
            {showAlert && (<Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose}
                                    severity="info" 
                                    sx={{ width: '100%' }}
                                >
                                    No books found matching this search. Try something else.
                                </Alert>
                            </Snackbar>)}
            {foundBooks.filter((book) => {
                return book.bookTitle.toLowerCase().includes(bookName.toLowerCase())})
                .map((book) => (
                    <BookCard
                    image={book.image}
                    id={book.id}
                    key={book.id}
                    title={book.bookTitle}
                    available={book.available}
                    location={book.location}
                    isbn={book.isbn}
                    age={book.ageRange}
                    author={book.author}
                />
            ))}
        </div>
        </div>
    );
}

export default GeneralSearch;