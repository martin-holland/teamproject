import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

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
    // let {book} = useParams();
    // let navigate = useNavigate();

    return (
        <div className="singleBook">
            <div className="single_Book">
                <p>Contact the owner of the book:</p>
                <textarea id="story" name="story" rows="5" cols="33">
                </textarea>
                <button>
                SEND MESSAGE
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