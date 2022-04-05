import React from "react";
import "./SearchByLanguage.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { getDocs, collectionGroup, query, where } from "firebase/firestore";
// import BookCard from "./BookCard";
import BookCard from "./BookCardMUI";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./Main.css";
// import PopUpLanguage from './PopUpLanguage';

const languages = require("./languages.json");
const ageRanges = require("./ageRanges.json");

function SearchByAge(props) {
  const [foundBooks, setFoundBooks] = useState([]);
  const [ageRange, setAgeRange] = useState("");
  const [language, setLanguage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ageRange) {
      getBooks();
    }
    if (foundBooks.length < 1) {
      setShowAlert(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowAlert(false);
  };

  const getBooks = async () => {
    const books = query(
      collectionGroup(db, "books"),
      where("ageRange", "==", ageRange)
    );
    const querySnapshot = await getDocs(books);

    const matchingBooks = [];
    querySnapshot.forEach((doc) => {
      matchingBooks.push(doc.data());
    });
    setFoundBooks((prev) => matchingBooks);
    return foundBooks;
  };

  useEffect(() => {}, [foundBooks, ageRange, language]);

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
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option key="default" value="" disabled hidden>
              Language (optional)
            </option>
            {languages.map((langObj) => (
              <option key={langObj.name} value={langObj.name}>
                {langObj.name}
              </option>
            ))}
          </select>

          <input type="submit" value="Submit" />
        </form>

        <div className="search_results">
          {showAlert && (
            <Snackbar
              open={showAlert}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="info"
                sx={{ width: "100%" }}
              >
                No books found matching this search. Try something else.
              </Alert>
            </Snackbar>
          )}
          {foundBooks.map((book, index) => (
            //     <BookCard
            //     image={book.image}
            //     id={book.id}
            //     key={book.id}
            //     title={book.bookTitle}
            //     available={book.available}
            //     location={book.location}
            //     isbn={book.isbn}
            //     age={book.ageRange}
            //     author={book.author}
            // />
            <BookCard book={book} key={index} />
          ))}
          {/* {showPopUpLanguage && <PopUpLanguage close={ closePopupLanguage } />} */}
        </div>
      </div>
    </main>
  );
}

export default SearchByAge;
