import React from "react";
import "./ClasslessSearch.css";
import { getLangs } from "./functionsLibrary";
import { useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import BookCard from "./BookCard";

// name and native name for languages:
const languages = getLangs();

function ClasslessSearch(props) {
    const [foundBooks, updateFoundBooks] = useState([]);
    const [bookName, setBookName] = useState("");
    const [language, updateLanguage] = useState(languages.map((obj) => obj.name));

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('Submit', bookName, language.toLowerCase());
        getBooks();
    }

    const getBooks = async () => {
        const data = await getDocs(collection(db, language));
        console.log(data.docs.map(doc => doc.data()));
        updateFoundBooks(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))); // spreading into foundBooks (array, not array into array)
        // console.log('foundBooks: ', foundBooks);
        return foundBooks;
    };

    return (
        <div className="searchByLang">
        <h3>Search for a book title and select the book language:</h3>
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="searchInput"
                placeholder="Book title"
                onChange={e => setBookName(e.target.value)}
            />

            <select 
                name="searchLanguage"
                onChange={e => updateLanguage(e.target.value)}>
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

export default ClasslessSearch;