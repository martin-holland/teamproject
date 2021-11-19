import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const BookCard = (props) => {
    // const match = useRouteMatch();

    return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <p>Publication year: {props.pubYear}</p>
            {/* <Link to={`${match.url}/${props.title}`}>Read more</Link> */}
        </div>
    )

}

export default BookCard;