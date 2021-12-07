import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookSingle = ({
    id,
    title,
    author,
    available,
    location,
    isbn, 
    age,
    image
}) => {
    let {book} = useParams();
    // let navigate = useNavigate();

    return (
        <div className="singleBook">
            <div className="singleBook">
            <p>This is the page for a single book with its complete details</p>
            <p> Book Title: {} </p>
            <p> Author: {} </p>
            <p> Book Language: {} </p>
            <p> Owner: {} </p>
            <p> ISBN: {} </p>
            <p> Age Range: {} </p>
            <p> Available: {} </p>
            <p> Publication Year: {} </p>
            <p> Location: {} </p>
            <p> Comments: {} </p>
            <button>
              Request Book
            </button>
            </div>
            <div>
                {/* <button onClick={() => navigate(-1)}>
                    Back to books
                </button> */}
            </div>
        </div>
    );
};

export default BookSingle;