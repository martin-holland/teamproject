import React from "react";
import "./SearchByLanguage.css";
import { getLangs } from "./functionsLibrary";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { getDocs, collectionGroup, query, where } from "firebase/firestore";
import BookCard from "./BookCard";
import PopUpLanguage from './PopUpLanguage';

// name and native name for languages:
const languages = getLangs();

function SearchByLanguage() {
    const [foundBooks, setFoundBooks] = useState([]);
    const [bookName, setBookName] = useState("");
    const [language, setLanguage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('Submit', bookName, language.toLowerCase());
        if (language !== "") {
            getBooks();
        }
    }

    const getBooks = async () => {
        // this is a startsWith search but search in Firebase is CASE SENTITIVE so ATM we fetch all language and filter in render. Not efficient with large data:
        // const end = bookName.replace(/.$/, c => String.fromCharCode(c.charCodeAt(0) + 1));
        // const books = query(collectionGroup(db, 'books'), where('bookLanguage', '==', language), where('bookTitle', '>=', bookName), where('bookTitle', '<', end));  

        const books = query(collectionGroup(db, 'books'), where('bookLanguage', '==', language)); 
        const querySnapshot = await getDocs(books);

        const matchingBooks = [];
        querySnapshot.forEach(doc => {
            matchingBooks.push(doc.data());
        });
        setFoundBooks(prev => matchingBooks);
        return foundBooks;
    };

    useEffect( () => {
    console.log("hello");
    }, [foundBooks, language]);
    

    return (
        <div className="searchByLang">
        <h3>Select a language. Book title can be empty:</h3>
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="searchInput"
                placeholder="Book title"
                onChange={e => setBookName(e.target.value)}
            />

            <select
                required
                name="searchLanguage"
                onChange={e => setLanguage(e.target.value)}>
                    <option key="default" value="" disabled selected>
                        Select Language*
                    </option>
                    {languages.map((langObj) => <option key={langObj.name} value={langObj.name}>{langObj.name}</option>)
                    }
            </select>

            <input type="submit" value="Submit" />
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

export default SearchByLanguage;