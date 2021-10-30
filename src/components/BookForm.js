import React, { Component } from 'react';
import { getLangs } from './functionsLibrary'

const languages = getLangs()



class BookForm extends Component {
    state = {
        languages
    }
    
    render() {
        return (
            <div className="bookform">
                <form className = "bookInputForm">
                <label htmlFor="owner">Owner</label>
                <input type="text"></input>
                <label htmlFor="booktitle">Book Title</label>
                <input type="text"></input>
                <label htmlFor="author">Author</label>
                <input type="text"></input>
                <label htmlFor="year">Publication Year</label>
                <input type="text"></input>
                <label htmlFor="availability">Availability</label>
                <select id="availabilty" name="availability">
                    <option value="available">Available</option>
                    <option value="onloan">On Loan</option>
                </select>
                    <div className="drop-down">
                        <p>Language</p>
                            <select>{
                                this.state.languages.map((obj) => {
                                return <option key={obj.name}value={obj.name}>{obj.name}</option>
                                })
                            }</select>
                    </div>
                <label htmlFor="ISBN">ISBN</label>
                <input type="text"></input>
                <label htmlFor="location">Location</label>
                <input type="text"></input>
                <select>
                    <option value="adult">Adult</option>
                    <option value="children">Children</option>
                </select>
                <select>
                    <option value="0to3">Ages: 0-3</option>
                    <option value="3to8">Ages: 3-8</option>
                    <option value="earlyReaders">Early Readers, Ages: 5-9</option>
                    <option value="firstChaperBooks">First Chapter Books, Ages: 7-10</option>
                    <option value="middleGrade">Middle Grade Books, Ages: 8-12</option>
                    <option value="youngAdult">Middle Grade Books, Ages: 12+</option>
                </select>
                <label htmlFor="comments">Comments</label>
                <input type="text"></input>
                </form>
            </div>
        );
    }
}

export default BookForm;