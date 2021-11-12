import React, { Component } from "react";
import { getLangs, postData } from "./functionsLibrary";

const languages = getLangs();
const ageRanges = [
  {
    name: "",
  },
  {
    name: "Adult",
  },
  {
    name: "Newborns to Age 3",
  },
  {
    name: "Ages 3 - 8",
  },
  {
    name: "Early Readers - Ages 5-9",
  },
  {
    name: "First Chapter Books - Ages 7-10",
  },
  {
    name: "Middle Grade Books - Ages 8-12",
  },
  {
    name: "Young Adult, Ages 12+",
  },
];

const availability = [
  {
    name: "",
  },
  {
    name: "onloan",
  },
  {
    name: "available",
  },
];

let data;

class BookForm extends Component {
  constructor(props) {
    super(props); // you can’t use this in a constructor until after you’ve called the parent constructor (super)
    this.state = {
      languages,
      ageRanges,
      availability,
      owner: "",
      bookTitle: "",
      author: "",
      pubYear: "",
      available: "",
      bookLanguage: "",
      ISBN: "",
      location: "",
      adultOrChild: "",
      ageRange: "",
      comments: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this); // binding the function inside this class
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value, //
      },
      () => {
        // see how to use the state, now we are storing state into a separate varibale, to be use later, to POST, but could we use the STATE?
        data = this.state;
      }
    );
  }

  submitForm(event) {
    event.preventDefault();
    console.log(data);
    // console.log(this.state);
    let { languages, ageRanges, availability, ...inputJSON } = data; // deconstructing, after this data and state are not the same anymore,
    console.log(inputJSON);
    postData(inputJSON);
  }

  render() {
    return (
      <div className="bookform">
        <form onSubmit={this.submitForm} className="bookInputForm">
          <label htmlFor="owner">Owner</label>
          <input
            name="owner"
            value={this.state.owner}
            onChange={this.handleInputChange}
            id="owner"
            type="text"
          ></input>
          <label htmlFor="bookTitle">Book Title</label>
          <input
            name="bookTitle"
            value={this.state.bookTitle}
            onChange={this.handleInputChange}
            type="text"
          ></input>
          <label htmlFor="author">Author</label>
          <input
            name="author"
            value={this.state.author}
            onChange={this.handleInputChange}
            type="text"
          ></input>
          <label htmlFor="year">Publication Year</label>
          <input
            name="pubYear"
            value={this.state.pubYear}
            onChange={this.handleInputChange}
            type="text"
          ></input>
          <label htmlFor="available">Availability</label>
          <select
            name="available"
            value={this.state.available}
            onChange={this.handleInputChange}
          >
            {this.state.availability.map((obj) => {
              return (
                <option key={obj.name} value={obj.name}>
                  {obj.name}
                </option>
              );
            })}
          </select>
          <p>Language</p>
          <select
            name="bookLanguage"
            value={this.state.bookLanguage}
            onChange={this.handleInputChange}
          >
            {this.state.languages.map((obj) => {
              return (
                <option key={obj.name} value={obj.name}>
                  {obj.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="ISBN">ISBN</label>
          <input
            name="ISBN"
            value={this.state.ISBN}
            onChange={this.handleInputChange}
            type="text"
          ></input>
          <label htmlFor="location">Location</label>
          <input
            name="location"
            value={this.state.location}
            onChange={this.handleInputChange}
            type="text"
          ></input>
          <label htmlFor="adultOrChild">Adult or Child</label>
          <select
            value={this.state.adultOrChild}
            onChange={this.handleInputChange}
          >
            <option
              name="adultOrChild"
              value={this.state.adultOrChild}
              onChange={this.handleInputChange}
            >
              Adult
            </option>
            <option
              name="adultOrChild"
              value={this.state.adultOrChild}
              onChange={this.handleInputChange}
            >
              Children
            </option>
          </select>
          <label htmlFor="ageRange">Age Range</label>
          <div className="drop-down">
            <select
              name="ageRange"
              value={this.state.ageRange}
              onChange={this.handleInputChange}
            >
              {this.state.ageRanges.map((obj) => {
                return (
                  <option key={obj.name} value={obj.name}>
                    {obj.name}
                  </option>
                );
              })}
            </select>
          </div>
          <label htmlFor="comments">Comments</label>
          <input
            name="comments"
            value={this.state.comments}
            onChange={this.handleInputChange}
            type="text"
          ></input>
          <button
            id="bookformsubmit"
            className="formsubmit"
            onClick={this.submitForm}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BookForm;
