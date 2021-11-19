import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const BookSingle = () => {
    let {book} = useParams();
    // let history = useHistory();

    return (
        <div className="singleBook">
            <div className="singleBook">
                <p>This is the page for {book}{" "}</p>
                <p>***all details of the book here***</p>
            </div>
            <div>
                {/* <button onClick={() => history.goBack()}>
                    Back to books
                </button> */}
            </div>
        </div>
    );
};

export default BookSingle;