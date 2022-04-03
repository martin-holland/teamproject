import React from "react";
import "./SearchByLanguage.css";
import { getLangs } from "./functionsLibrary";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { getDocs, collectionGroup, query } from "firebase/firestore";
import BookCard from "./BookCard";


function GeneralSearch() {
    const [foundBooks, setFoundBooks] = useState([]);
    const [bookName, setBookName] = useState("");
 

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('Submit', bookName, language.toLowerCase());
        getBooks();

    }

    const getBooks = async () => {
        const books = query(collectionGroup(db, 'books'));
        const querySnapshot = await getDocs(books);

        const matchingBooks = [];
        querySnapshot.forEach(doc => {
            matchingBooks.push(doc.data());
        });
        setFoundBooks(prev => matchingBooks);
        return foundBooks;
    };

    useEffect( () => {
    console.log("general search");
    }, []);
    

    return (
        <div className="searchByLang">
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="searchInput"
                placeholder="Book title"
                onChange={e => setBookName(e.target.value)}
            />
        <input type="submit" value="Search" />
        </form>

        <div className="search_results">
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