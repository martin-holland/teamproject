import React from 'react';
import "./BookCard.css";

// deconstruct props, pass objects directly
const BookCard = ({
    id,
    title,
    author,
    available,
    location,
}) => {
    return (
        <div className="card" key={id} id={`${available}`}>
            <h1>{title}</h1>
            <p>Author: {author}</p>
            <p>Location: {location}</p>
        </div>
    )
}

export default BookCard;