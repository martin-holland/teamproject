import React from 'react';
import "./BookCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";


// deconstruct props, pass objects directly
const BookCard = ({
    id,
    title,
    author,
    available,
    location,
    isbn, 
    age,
    image,
    deleteBook
}) => {

    const coverImage = () => {
        // user pic, isbn pic, placeholder pic
        if (image === null) {
            // do not change to !==
            if (isbn != 0) {
                return `https://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`
            } else {
                return require('./assets/empty_cover.jpg').default
            }
        } 
        return image;
    }

    return (
        <div className="card_wrapper">
                <div className="card" key={id} id={`${available}`}>
                    <button className="fav_button">
                        <FontAwesomeIcon icon={heartRegular} />
                    </button>
                    <img className="book_cover"
                        alt="book cover"
                        src={coverImage()}
                    />
                    <Link to={`/search/:${id}`} target="_blank"><h1>{title}</h1></Link>
                    <p className="author">{author}</p>
                    <p>Age: {age}</p>
                    <p>Location: {location}</p>
                    <button className="delete_butt"
                        onClick={() => {
                            deleteBook(id);
                        }}
                    >
                    Delete Book
                    </button>
                </div>
        
        </div>
    )
}

export default BookCard;