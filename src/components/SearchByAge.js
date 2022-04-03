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
        // console.log('Submit', bookName, language.toLowerCase());
        if (ageRange)
        {
            getBooks();
        } 
        // if (!language){
        //     setShowPopUpLanguage(true);
        // }
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
        console.log("hello");
    }, [foundBooks, ageRange, language]);
    
    // const closePopupLanguage = () => {
    //     setShowPopUpLanguage(false);
    // }

    return (
        <main className="main_background">
        <div className="searchByLang">
        {/* <h3>Search for books by language and age range:</h3> */}
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
                onChange={e => setLanguage(e.target.value)}>
                    <option key="default" value="" disabled selected>
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