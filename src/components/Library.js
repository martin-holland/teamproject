import React from "react";
import "./library.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function Library(props) {
  const [users, setUsers] = useState([]);

  const languagesCollectionRef = collection(db, props.language);

  const getUsers = async () => {
    const data = await getDocs(languagesCollectionRef);
    console.log(data);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //use spread operator to return all fields from data
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "languages", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="library">
      {users.map((user) => {
        return (
          <div className="individualbook">
            {" "}
            <p> Owner: {user.owner} </p>
            <p> Book Title: {user.bookTitle} </p>
            <p> Book Language: {user.bookLanguage} </p>
            <p> ISBN: {user.isbn} </p>
            <p> Age Range: {user.ageRange} </p>
            <p> Available: {user.available} </p>
            <p> Publication Year: {user.pubYear} </p>
            <p> Location: {user.location} </p>
            <p> Adult or Child: {user.adultOrChild} </p>
            <p> Comments: {user.comment} </p>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Library;
