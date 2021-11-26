import "firebaseform.css";
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

function FirebaseForm(props) {
  const ageRanges = [
    {
      name: "",
    },
    {
      name: "Adult",
    },
    {
      name: "Newborns to Age 3",
    },
    {
      name: "Ages 3 - 8",
    },
    {
      name: "Early Readers - Ages 5-9",
    },
    {
      name: "First Chapter Books - Ages 7-10",
    },
    {
      name: "Middle Grade Books - Ages 8-12",
    },
    {
      name: "Young Adult, Ages 12+",
    },
  ];

  const availability = [
    {
      name: "",
    },
    {
      name: "onloan",
    },
    {
      name: "available",
    },
  ];

  const [users, setUsers] = useState([]);
  const [newOwner, setNewOwner] = useState("");
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookLanguage, setNewBookLanguage] = useState("");
  const [newISBN, setnewISBN] = useState(0);
  const [newAgeRange, setNewAgeRange] = useState("");
  const [newAvailable, setNewAvailable] = useState(false);
  const [newPubYear, setNewPubYear] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newAdultOrChild, setNewAdultOrChild] = useState("");
  const [newComment, setNewComment] = useState("");

  const languagesCollectionRef = collection(db, props.language);

  const getUsers = async () => {
    const data = await getDocs(languagesCollectionRef);
    console.log(data);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //use spread operator to return all fields from data
  };

  const createUser = async () => {
    await addDoc(languagesCollectionRef, {
      owner: newOwner,
      bookTitle: newBookTitle,
      bookLanguage: newBookLanguage,
      isbn: newISBN,
      ageRange: newAgeRange,
      available: newAvailable,
      pubYear: newPubYear,
      location: newLocation,
      adultOrChild: newAdultOrChild,
      comment: newComment,
    });
    getUsers();
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
    <div className="firebaseform">
      <input
        type="text"
        placeholder="Owner"
        onChange={(event) => {
          setNewOwner(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="book title"
        onChange={(event) => {
          setNewBookTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="book language"
        onChange={(event) => {
          setNewBookLanguage(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="isbn"
        onChange={(event) => {
          setnewISBN(event.target.value);
        }}
      />
      <select
        placeholder="Age Ranges"
        onChange={(event) => {
          setNewAgeRange(event.target.value);
        }}
      >
        {ageRanges.map((obj) => {
          return (
            <option key={obj.name} value={obj.name}>
              {obj.name}
            </option>
          );
        })}
      </select>
      <select
        onChange={(event) => {
          setNewAvailable(event.target.value);
        }}
      >
        {availability.map((obj) => {
          return (
            <option key={obj.name} value={obj.name}>
              {obj.name}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="pub year"
        onChange={(event) => {
          setNewPubYear(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="location"
        onChange={(event) => {
          setNewLocation(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="adult or child"
        onChange={(event) => {
          setNewAdultOrChild(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="comment"
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      />
      <button onClick={createUser}> Create User</button>

      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1> Name: {user.name} </h1>
            <h1> Age: {user.age} </h1>
            <h1> Owner: {user.owner} </h1>
            <h1> Book Title: {user.bookTitle} </h1>
            <h1> Book Language: {user.bookLanguage} </h1>
            <h1> ISBN: {user.isbn} </h1>
            <h1> Age Range: {user.ageRange} </h1>
            <h1> Available: {user.available} </h1>
            <h1> Publication Year: {user.pubYear} </h1>
            <h1> Location: {user.location} </h1>
            <h1> Adult or Child: {user.adultOrChild} </h1>
            <h1> Comments: {user.comment} </h1>
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

export default FirebaseForm;
