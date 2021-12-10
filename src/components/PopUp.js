import React from 'react';

const PopUp = (props) => {

    return (
        <div className="overlay">
             <div className="added_popup">
            <h2>Thank you!</h2>
            <p>Your book has been added on the shelf</p>
            <button className="secondary" onClick={props.close}>OK</button>
            </div>
        </div>
    );
};

export default PopUp;