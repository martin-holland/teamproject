import React, { Component } from 'react';
import { getLangs } from './functionsLibrary'

const languages = getLangs()


class BookForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            languages,
            owner: "",
            booktitle: "",
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
        })
       
    }

    logFunction(event) {
        console.log(this.state)
    }
    
    render() {
        return (
            <div className="bookform">
                <form className = "bookInputForm">
                <label htmlFor="owner">Owner</label>
                <input value={this.state.owner}onChange={this.handleInputChange}id="owner"type="text"></input>
                <label htmlFor="booktitle">Book Title</label>
                <input value={this.state.booktitle}onChange={this.handleInputChange}type="text"></input>
                <label htmlFor="author">Author</label>
                <input value={this.state.author}onChange={this.handleInputChange}type="text"></input>
                <label htmlFor="year">Publication Year</label>
                <input value={this.state.pubYear}onChange={this.handleInputChange}type="text"></input>
                <label htmlFor="availability">Availability</label>
                <select id="availabilty" name="availability">
                    <option value={this.state.availability}onChange={this.handleInputChange}>Available</option>
                    <option value={this.state.availability}onChange={this.handleInputChange}>On Loan</option>
                </select>
                    <div className="drop-down">
                        <p>Language</p>
                            <select value={this.state.bookLanguage}onChange={this.handleInputChange}>{
                                this.state.languages.map((obj) => {
                                return <option key={obj.name}value={obj.name}>{obj.name}</option>
                                })
                            }</select>
                    </div>
                <label htmlFor="ISBN">ISBN</label>
                <input value={this.state.ISBN}onChange={this.handleInputChange}type="text"></input>
                <label htmlFor="location">Location</label>
                <input value={this.state.location}onChange={this.handleInputChange}type="text"></input>
                <select>
                    <option value={this.state.adultOrChild}onChange={this.handleInputChange}>Adult</option>
                    <option value={this.state.adultOrChild}onChange={this.handleInputChange}>Children</option>
                </select>
                <select>
                    <option value={this.state.ageRange}onChange={this.handleInputChange}>Adult</option>
                    <option value={this.state.ageRange}onChange={this.handleInputChange}>Ages: 0-3</option>
                    <option value={this.state.ageRange}onChange={this.handleInputChange}>Ages: 3-8</option>
                    <option value={this.state.ageRange}onChange={this.handleInputChange}>Early Readers, Ages: 5-9</option>
                    <option value={this.state.ageRange}onChange={this.handleInputChange}>First Chapter Books, Ages: 7-10</option>
                    <option value={this.state.ageRange}onChange={this.handleInputChange}>Middle Grade Books, Ages: 8-12</option>
                    <option value={this.state.ageRange}onChange={this.handleInputChange}>Middle Grade Books, Ages: 12+</option>
                </select>
                <label htmlFor="comments">Comments</label>
                <input value={this.state.comments}onChange={this.handleInputChange}type="text"></input>
                <button id="bookformsubmit"className="formsubmit" onClick=
                {this.logFunction()}
                >Submit</button>
                </form>
            </div>
        );
    }
}

export default BookForm;