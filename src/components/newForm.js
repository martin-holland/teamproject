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

function FirebaseForm() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newOwner, setNewOwner] = useState("");
  const [newBook, setNewBook] = useState("");
  const [newBookLanguage, setNewBookLanguage] = useState("");
  const [newISBN, setnewISBN] = useState(0);
  const [newAgeRange, setNewAgeRange] = "";

  const languagesCollectionRef = collection(db, "languages");

  const getUsers = async () => {
    const data = await getDocs(languagesCollectionRef);
    console.log(data);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //use spread operator to return all fields from data
  };

  const createUser = async () => {
    await addDoc(languagesCollectionRef, {
      name: newName,
      age: Number(newAge),
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
    <div className="newForm">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <button onClick={createUser}> Create User</button>

      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1> Name: {user.name} </h1>
            <h1> Age: {user.age} </h1>
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
