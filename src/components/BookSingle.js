<<<<<<< HEAD
import React from 'react';
import "./BookSingle.css";
=======
import React from "react";
>>>>>>> ef4cdeb283f18ef0d6ec3feb4e8a2c193d301dba
// import { useParams, useNavigate } from 'react-router-dom';

const BookSingle = ({
  id,
  title,
  author,
  available,
  location,
  isbn,
  age,
  image,
}) => {
  // let {book} = useParams();
  // let navigate = useNavigate();

<<<<<<< HEAD
    return (
        <div className="singleBook">
            <div className="single_Book">
                <p>Contact the owner of the book:</p>
                <textarea id="story" name="story" rows="5" cols="33">
                </textarea>
                <button className="send_message">
                SEND MESSAGE
                </button>
            </div>
            <div>
                {/* <button onClick={() => navigate(-1)}>
=======
  return (
    <div className="singleBook">
      <div className="single_Book">
        <p>Contact the owner of the book:</p>
        <textarea id="story" name="story" rows="5" cols="33"></textarea>
        <button>SEND MESSAGE</button>
      </div>
      <div>
        {/* <button onClick={() => navigate(-1)}>
>>>>>>> ef4cdeb283f18ef0d6ec3feb4e8a2c193d301dba
                    Back to books
                </button> */}
      </div>
    </div>
  );
};

export default BookSingle;
