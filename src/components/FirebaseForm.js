import { useState, useEffect} from "react";
import { db, getFirebase } from "./firebase-config";
import Login from './Login';
import useToken from './useToken';
import { collection, getDocs, addDoc } from "firebase/firestore";
import PopUp from "./PopUp";
const masterLanguages = require("./languages.json");
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   deleteDoc,
// } from "firebase/firestore"; // Full list of firebase library if required

// const firebase = getFirebase();

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
      name: "not available",
    },
    {
      name: "available",
    },
  ];

  const [users, setUsers] = useState([]);
  const [newOwner, setNewOwner] = useState("");
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newBookLanguage, setNewBookLanguage] = useState("");
  const [newISBN, setnewISBN] = useState(0);
  const [newAgeRange, setNewAgeRange] = useState("");
  const [newAvailable, setNewAvailable] = useState(false);
  const [newPubYear, setNewPubYear] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const getUsers = async () => {
    const languagesCollectionRef = collection(db, newBookLanguage);
    const data = await getDocs(languagesCollectionRef);
    console.log(data, users);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //use spread operator to return all fields from data
  };

  const createUser = async () => {
    if (
      newBookLanguage !== "" &&
      newOwner !== "" &&
      newBookTitle !== "" &&
      newAuthor !== "" &&
      newAgeRange !== "" &&
      newLocation !== ""
    ) {
      const languagesCollectionRef = collection(db, newBookLanguage);
      await addDoc(languagesCollectionRef, {
        owner: newOwner,
        bookTitle: newBookTitle,
        author: newAuthor,
        bookLanguage: newBookLanguage,
        isbn: newISBN,
        ageRange: newAgeRange,
        available: newAvailable,
        pubYear: newPubYear,
        location: newLocation,
        comment: newComment,
        image: newImage,
      });
      setShowPopUp(true);

 //    getUsers();
    } else {
      alert("Please fill in the required fields");
    }
  };

  useEffect( () => {
    console.log(showPopUp);
  }, [showPopUp]);

  const closeHandler = () => {
    setShowPopUp(false);
    window.location.reload();
  }

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // creates a DOMString containing a URL representing the object
      // The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object
      setNewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // const handleUpload = async (event) => {
  //   if (!firebase) return;

  //   const uploadedFile = event?.target.files[0];
  //   if (!uploadedFile) return;

  //   const storage = firebase.storage();
  //   const storageRef = storage.ref("images");

  //   try {
  //     await storageRef.child(uploadedFile.name).put(uploadedFile);
  //     alert("Successfully uploaded picture!");
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // show Login page if not logged in (token in localeStorage)
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="firebaseform">
      <h2>Add your book to the virtual shelf!</h2>
      <p>Fields marked with * are required</p>
      <label htmlFor="booklang">Book Language*</label>
      <select
        placeholder="booklang"
        onChange={(event) => {
          setNewBookLanguage(event.target.value);
        }}
      >
        <option key="default" value="" disabled selected>
          Select Language*
        </option>
        {masterLanguages.map((obj) => {
          return (
            <option key={obj.name} value={obj.name}>
              {obj.name}
            </option>
          );
        })}
      </select>
      <label htmlFor="owner">(Owner)*</label>
      <input
        required
        type="text"
        placeholder="Owner"
        onChange={(event) => {
          setNewOwner(event.target.value);
        }}
      />
      <label htmlFor="booktitle">Book Title*</label>
      <input
        required
        type="text"
        placeholder="book title"
        onChange={(event) => {
          setNewBookTitle(event.target.value);
        }}
      />
      <label htmlFor="booktitle">Author*</label>
      <input
        required
        type="text"
        placeholder="book title"
        onChange={(event) => {
          setNewAuthor(event.target.value);
        }}
      />
      <label htmlFor="isbn">ISBN</label>
      <input
        type="text"
        placeholder="isbn"
        onChange={(event) => {
          setnewISBN(event.target.value);
        }}
      />
      <label htmlFor="ageRange">Age Range*</label>
      <select
        required
        placeholder="Age Range"
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
      <label htmlFor="available">Availability</label>
      <select
        onChange={(event) => {
          setNewAvailable(event.target.value);
        }}
      >
        <option key="default" value="" disabled selected>
          Availability
        </option>
        {availability.map((obj) => {
          return (
            <option key={obj.name} value={obj.name}>
              {obj.name}
            </option>
          );
        })}
      </select>
      <label htmlFor="pubYear">Publication Year</label>
      <input
        type="text"
        placeholder="pub year"
        onChange={(event) => {
          setNewPubYear(event.target.value);
        }}
      />
      <label htmlFor="location">Location*</label>
      <input
        required
        type="text"
        placeholder="location"
        onChange={(event) => {
          setNewLocation(event.target.value);
        }}
      />
      <label htmlFor="comment">Comment/Condition</label>
      <input
        type="text"
        placeholder="comment"
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      />
      <label htmlFor="bookCover">Add a picture</label>
      <input
        id="bookCover"
        type="file"
        // ref={ref}
        accept="image/png, image/jpeg, image/jpg"
        onChange={onImageChange}
      />
      <button onClick={createUser}>Add Book</button>
      {(showPopUp === true) && <PopUp close={ closeHandler } />}

    </div>
  );
}

export default FirebaseForm;
