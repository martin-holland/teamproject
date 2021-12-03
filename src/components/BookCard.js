import React from 'react';
import "./BookCard.css";

// deconstruct props, pass objects directly
const BookCard = ({
    id,
    title,
    author,
    available,
    location,
    isbn, 
    age,
    image
}) => {

    const userImage = () => {
        if (image != null) {
            return `https://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`
        }
    }

    <img src={image} className="user_book" alt="preview"/>
    return (
        <div className="card" key={id} id={`${available}`}>
            <img
              alt="book cover"
              src={`https://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`}
            />
            <h1>{title}</h1>
            <p>Author: {author}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    )
}

export default BookCard;