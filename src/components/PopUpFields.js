import React from 'react';

const closePopupFields = ({close, lang, aut, owner, title, age, loc}) => {

    const reqFields = [lang, aut, owner, title, age, loc];
    const fieldsNames = ["language", "author", "owner", "title", "age range", "location"];
    // zipping the two arrays
    const emptyNames = reqFields.map(function(e, i) {
        return [e, fieldsNames[i]];
      });
    const filtered = emptyNames.filter((field) => field[0] === "");

    return (
        <div className="overlay">
             <div className="added_popup">
            <p>Please, fill in the missing fields:</p>
            {filtered.map((field) => 
                (<p>{field}</p>)
                )}
            <button className="secondary" onClick={close}>OK</button>
            </div>
        </div>
    );
};

export default closePopupFields;