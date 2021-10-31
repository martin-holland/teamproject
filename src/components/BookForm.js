import React, { Component } from 'react';
import { getLangs } from './functionsLibrary'

const languages = getLangs()


class BookForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            languages,
            owner: "",
            bookTitle: "",
            author: "",
            pubYear: "",
            availability: "",
            bookLanguage: "",
            ISBN: "",
            location: "",
            adultOrChild: "",
            ageRange: "",
            comments: "",
            }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        }, () => {
            console.log(this.state)
        })
       
    }

    submitForm(event) {
        event.preventDefault();
        console.log('button working')
        
    }
    
    render() {
        return (
            <div className="bookform">
                <form className = "bookInputForm">
                <label htmlFor="owner">Owner</label>
                <input name="owner" value={this.state.owner}onChange={this.handleInputChange}id="owner"type="text"></input>
                <label htmlFor="bookTitle">Book Title</label>
                <input name="bookTitle" value={this.state.bookTitle}onChange={this.handleInputChange}type="text"></input>
                <label htmlFor="author">Author</label>
                <input name="author" value={this.state.author}onChange={this.handleInputChange}type="text"></input>
                <label htmlFor="year">Publication Year</label>
                <input name="pubYear" value={this.state.pubYear}onChange={this.handleInputChange}type="text"></input>
                <label htmlFor="availability">Availability</label>
                <select id="availabilty" name="availability" defaultValue={this.state.availability}onChange={this.handleInputChange}>
                    <option name="availability" value={this.state.availability}onChange={this.handleInputChange}>Available</option>
                    <option name="availability" value={this.state.availability}onChange={this.handleInputChange}>On Loan</option>
                </select>
                    <div className="drop-down">
                        <p>Language</p>
                            <select name="bookLanguage" value={this.state.bookLanguage}onChange={this.handleInputChange}>{
                                this.state.languages.map((obj) => {
                                return <option key={obj.name}value={obj.name}>{obj.name}</option>
                                })
                            }</select>
                    </div>
                <label htmlFor="ISBN">ISBN</label>
                <input name="ISBN" value={this.state.ISBN}onChange={this.handleInputChange}type="text"></input>
                <label htmlFor="location">Location</label>
                <input name="location" value={this.state.location}onChange={this.handleInputChange}type="text"></input>
                <label htmlFor="adultOrChild">Adult or Child</label>
                <select value={this.state.adultOrChild}onChange={this.handleInputChange}>
                    <option name="adultOrChild" value={this.state.adultOrChild}onChange={this.handleInputChange}>Adult</option>
                    <option name="adultOrChild" value={this.state.adultOrChild}onChange={this.handleInputChange}>Children</option>
                </select>
                <label htmlFor="ageRange">Age Range</label>
                <select value={this.state.ageRange}onChange={this.handleInputChange}>
                    <option name="Adult" value={this.state.ageRange}onChange={this.handleInputChange}>Adult</option>
                    <option name="0to3" value={this.state.ageRange}onChange={this.handleInputChange}>Ages: 0-3</option>
                    <option name="3to8" value={this.state.ageRange}onChange={this.handleInputChange}>Ages: 3-8</option>
                    <option name="earlyreaders" value={this.state.ageRange}onChange={this.handleInputChange}>Early Readers, Ages: 5-9</option>
                    <option name="firstchapterbooks" value={this.state.ageRange}onChange={this.handleInputChange}>First Chapter Books, Ages: 7-10</option>
                    <option name="middlegrade" value={this.state.ageRange}onChange={this.handleInputChange}>Middle Grade Books, Ages: 8-12</option>
                    <option name="youngadult" value={this.state.ageRange}onChange={this.handleInputChange}>Young Adult, Ages: 12+</option>
                </select>
                <label htmlFor="comments">Comments</label>
                <input name="comments" value={this.state.comments}onChange={this.handleInputChange}type="text"></input>
                <button id="bookformsubmit"className="formsubmit" onClick={this.submitForm}>Submit</button>
                </form>
            </div>
        );
    }
}

export default BookForm;