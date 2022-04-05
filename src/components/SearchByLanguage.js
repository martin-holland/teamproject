import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./SearchByLanguage.css";
import { getLangs } from "./functionsLibrary";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { getDocs, collectionGroup, query, where } from "firebase/firestore";
// import BookCard from "./BookCard";
import BasicCard from './BookCardBasic';
import "./Main.css";

// name and native name for languages:
const languages = getLangs();

function SearchByLanguage() {
  const [foundBooks, setFoundBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [language, setLanguage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (language !== "") {
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
    // this is a startsWith search but search in Firebase is CASE SENTITIVE so ATM we fetch all language and filter in render. Not efficient with large data:
    // const end = bookName.replace(/.$/, c => String.fromCharCode(c.charCodeAt(0) + 1));
    // const books = query(collectionGroup(db, 'books'), where('bookLanguage', '==', language), where('bookTitle', '>=', bookName), where('bookTitle', '<', end));

    const books = query(
      collectionGroup(db, "books"),
      where("bookLanguage", "==", language)
    );
    const querySnapshot = await getDocs(books);

    const matchingBooks = [];
    querySnapshot.forEach((doc) => {
      matchingBooks.push(doc.data());
    });
    setFoundBooks((prev) => matchingBooks);
    return foundBooks;
  };

  useEffect(() => {}, [foundBooks, language]);

  return (
    <main className="main_background">
      <div className="searchByLang">
        {/* <h3>Select a language. Book title can be empty:</h3> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchInput"
            placeholder="Book title"
            onChange={(e) => setBookName(e.target.value)}
          />

          <select
            required
            defaultValue=""
            name="searchLanguage"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option key="default" value="" disabled hidden>
              Select Language*
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
          {foundBooks
            .filter((book, i) => {
              return book.bookTitle
                .toLowerCase()
                .includes(bookName.toLowerCase());
            })
            .map((book) => (
              <BasicCard book={book} key={book.bookTitle} />
            ))}
        </div>
      </div>
    </main>
  );
}

export default SearchByLanguage;
