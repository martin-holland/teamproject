// Need to set values up in the database
// Need to match the values in this function and render them
// Need to check that the data comes back from the database

import React from "react";

import { useState, useEffect } from "react";

import { db } from "./firebase-config";

import { collection, getDocs, addDoc } from "firebase/firestore";

function FirebaseForm(props) {
  const [language, setLanguage] = useState([]);
  const [newOwner, setNewOwner] = useState("");
  const [newBookTitle, setNewBookTitle] = useState();

  const languageCollectionRef = collection(db, "languages");

  useEffect(() => {
    const getLanguage = async () => {
      const data = await getDocs(languageCollectionRef);

      setLanguage(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getLanguage();
  }, []);

  const createUser = async () => {
    await addDoc(languageCollectionRef, {
      owner: newOwner,
      age: newBookTitle,
    });
  };

  return (
    <div className="FirebaseForm">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewOwner(event.target.value);
        }}
      ></input>
      <input
        placeholder="Age..."
        type="number"
        onChange={(event) => {
          setNewBookTitle(event.target.value);
        }}
      ></input>
      <button onClick={createUser}>Create Language</button>

      {language.map((language) => {
        return (
          <div>
            {" "}
            <h1> Name : {language.name} </h1>
            <h1> Age : {language.age} </h1>
          </div>
        );
      })}
    </div>
  );
}

export default FirebaseForm;
