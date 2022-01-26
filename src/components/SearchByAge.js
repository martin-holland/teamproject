import React from "react";
import "./ClasslessSearch.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import BookCard from "./BookCard";
import PopUpLanguage from './PopUpLanguage';

const languages = require("./languages.json");
const ageRanges = require("./ageRanges.json");

function SearchByAge(props) {
    const [foundBooks, updateFoundBooks] = useState([]);
    const [ageRange, setAgeRange] = useState("");
    const [language, updateLanguage] = useState("");
    const [showPopUpLanguage, setShowPopUpLanguage] = useState(false);
    const [showPopUpAge, setShowPopUpAge] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('Submit', bookName, language.toLowerCase());
        if (language && ageRange)
        {
            getBooks();
        } if (!language){
            setShowPopUpLanguage(true);
        }
    }

    const getBooks = async () => {
        const data = await getDocs(collection(db, language));
        console.log(data.docs.map(doc => doc.data()));
        updateFoundBooks(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))); // spreading into foundBooks (array, not array into array)
        // console.log('foundBooks: ', foundBooks);
        return foundBooks;
    };

    useEffect( () => {
    console.log(showPopUpLanguage);
    }, [showPopUpLanguage]);
    
    const closePopupLanguage = () => {
        setShowPopUpLanguage(false);
    }

    return (
        <div className="searchByLang">
        <h3>Search for books by language and age range:</h3>
        <form onSubmit={handleSubmit}>
        <select
            required
            placeholder="Age Range"
            onChange={(event) => {
            setAgeRange(event.target.value);
            }}
        >
            <option key="default" value="" disabled selected>
                Age*
            </option>
            {ageRanges.map((obj) => {
                return (
                    <option key={obj.name} value={obj.name}>
                    {obj.name}
                    </option>
                );
            })}
        </select>

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
                return (book.ageRange === ageRange)})
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
        {showPopUpLanguage && <PopUpLanguage close={ closePopupLanguage } />}
        </div>
        </div>
    );
}

export default SearchByAge;