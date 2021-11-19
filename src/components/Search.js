import React, { Component } from 'react';
import BookCard from './BookCard';
import { Switch, Route, withRouter } from 'react-router-dom';
import BookSingle from "./BookSingle";
import { getLangs } from "./functionsLibrary";
// import { books } from "./books";
import './Search.css';


const languages = getLangs();
let books = [];

class Search extends Component {
    state = {
        searchLanguage: "Italian",
        searchInput: ""
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        // console.log(this.state.searchInput, this.state.searchLanguage);
        try {
            let booksJson = fetch(`http://localhost:3000/${this.state.searchLanguage}`).then(res => res.json());
            console.log(booksJson);
            booksJson.then((data) => { 
                // console.log("data:", data);
                // return data;
                // for (let book of data) {  // how do I pass data downstairs??
                //     // console.log(book);
                //     books.push(book);
                // }
                books = (data);
            });
            console.log(books);
        } catch (err) {
            console.log(err);
        } 
    }



    render() {
        // const bookFilter = books.filter(book=> {
        //     return book.bookTitle
        //     .toLowerCase()
        //     .includes(this.state.searchInput.toLowerCase());
        // })

        // const bookListing = bookFilter.map((item) => (
        //     <BookCard key={item.id} title={item.bookTitle} author={item.author} pubYear={item.pubYear}/>
        // ))

        
        return (
            <div>
                <div className="searchByLang">
                    <h3>Search for a book title and select the book language:</h3>
                        <input type="text"
                        name="searchInput"
                        placeholder="Book title"
                        onChange={this.handleInputChange} />

                        <select name="searchLanguage"
                                onChange={this.handleInputChange}>
                            {languages.map((obj) => {
                                return (
                                    <option key={obj.name} value={obj.name}>{obj.name}</option>
                                );
                            })}
                        </select>
                    {/* <div className="bookList">MATCHING BOOKS:{bookListing} </div> */}
                    <div className="bookList">MATCHING BOOKS: </div> 
                </div>
            </div>
        );
    }
}

export default Search;