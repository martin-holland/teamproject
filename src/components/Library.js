import React from "react";
import "./library.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import BookCardOwner from "./BookCardOwner";

function Library({language}) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    if (language) {
      const data = await getDocs(collection(db, language));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //use spread operator to return all fields from data
    }
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, language, id);
    await deleteDoc(userDoc);
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="search_results">
      {users.map((user, key) => {
        return (
            <BookCardOwner
            image={user.image}
            id={user.id}
            key={user.id}
            title={user.bookTitle}
            available={user.available}
            location={user.location}
            isbn={user.isbn}
            age={user.ageRange}
            author={user.author}
            deleteBook={deleteUser}
            />
      )})}
          </div>
  );
}

export default Library;
