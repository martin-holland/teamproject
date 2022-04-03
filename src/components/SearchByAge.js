import React from "react";
import "./SearchByLanguage.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { getDocs, collectionGroup, query, where } from "firebase/firestore";
import BookCard from "./BookCard";
import './Main.css';
// import PopUpLanguage from './PopUpLanguage';
 
 


const languages = require("./languages.json");
const ageRanges = require("./ageRanges.json");

function SearchByAge(props) {
    const [foundBooks, setFoundBooks] = useState([]);
    const [ageRange, setAgeRange] = useState("");
    const [language, setLanguage] = useState("");
    // const [showPopUpLanguage, setShowPopUpLanguage] = useState(false);
    // const [showPopUpAge, setShowPopUpAge] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (ageRange){
            getBooks();
        } 

    }

    const getBooks = async () => {
        const books = query(collectionGroup(db, 'books'), where('ageRange', '==', ageRange));
        const querySnapshot = await getDocs(books);

        const matchingBooks = [];
        querySnapshot.forEach(doc => {
            matchingBooks.push(doc.data());
        });
        setFoundBooks(prev => matchingBooks);
        return foundBooks;
    };

    useEffect( () => {
    }, [foundBooks, ageRange, language]);
    

    return (
        <main className="main_background">
        <div className="searchByLang">
        {/* <h3>Search for books by language and age range:</h3> */}
        <form onSubmit={handleSubmit}>
        <select
            required
            defaultValue=""
            name="searchAge"
            onChange={(event) => {
            setAgeRange(event.target.value);
            }}
        >
            <option key="default" value="" disabled hidden>
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
            defaultValue=""
                name="searchLanguage"
                onChange={e => setLanguage(e.target.value)}>
                    <option key="default" value="" disabled hidden>
                        Language (optional)
                    </option>
                    {languages.map((langObj) => <option key={langObj.name} value={langObj.name}>{langObj.name}</option>)
                    }
            </select>

            <input type="submit" value="Submit" />
        </form>

        <div className="search_results">
            {foundBooks.map(book => (
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
        {/* {showPopUpLanguage && <PopUpLanguage close={ closePopupLanguage } />} */}
        </div>
        </div>
        </main>
    );
}

export default SearchByAge;