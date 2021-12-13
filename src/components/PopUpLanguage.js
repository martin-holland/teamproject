import React from 'react';

const PopUpLanguage = (props) => {

    return (
        <div className="overlay">
             <div className="added_popup">
            <h2>Select a language</h2>
            <button className="secondary" onClick={props.close}>OK</button>
            </div>
        </div>
    );
};

export default PopUpLanguage;