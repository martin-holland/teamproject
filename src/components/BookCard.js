import React from "react";
import "./BookCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
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
}) => {
  const coverImage = () => {
    // user pic, isbn pic, placeholder pic
    if (image === null) {
      // do not change to !==
      if (isbn != 0) {
        return `https://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`;
      } else {
        return require("./assets/empty_cover.jpg").default;
      }
    }
    return image;
  };

  return (
    <div className="card_wrapper">
      <Link to={`/search/:${id}/:${title}/`} target="_blank">
        <div className="card" key={id} id={`${available}`}>
          <button className="fav_button">
            <FontAwesomeIcon icon={heartRegular} />
          </button>
          <img className="book_cover" alt="book cover" src={coverImage()} />
          <h1>{title}</h1>
          <p className="author">{author}</p>
          <p>Age: {age}</p>
          <p>Location: {location}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
