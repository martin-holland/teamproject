import { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { db, authentication } from "./firebase-config";
// import Login from './Login';
// import {
//   getAuth,
//   signOut,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
import { collection, getDocs, doc, addDoc, setDoc } from "firebase/firestore";
import PopUp from "./PopUp";
import PopUpFields from "./PopUpFields";
import Library from './Library';

const masterLanguages = require("./languages.json");
const availability = require("./availability.json");
const ageRanges = require("./ageRanges.json");

function FirebaseForm({ token, user, SetUser, owner , setOwner }) {
  // const [books, setBooks] = useState([]);
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
  const [showPopUpFields, setShowPopUpFields] = useState(false);
  // const [token, setToken] = useState("");
  // const [userDetails, setUserDetails] = useState(null);

  // const signOutWithGoogle = () => {
  //   const auth = getAuth();
  //   signOut(auth)
  //     .then(() => {
  //       setToken(null);
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };

  // const signInWithGoogle = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(authentication, provider)
  //     .then((res) => {
  //       setToken(res.user.accessToken);
  //       setUserDetails(res.user);
  //       localStorage.setItem("VStoken", JSON.stringify(res.user.accessToken));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const getUsers = async () => {
  //   const languagesCollectionRef = collection(db, newBookLanguage);
  //   const data = await getDocs(languagesCollectionRef);
  //   console.log(data, books);
  //   setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //use spread operator to return all fields from data
  // };

  const createBook = async () => {
    if (
      newBookLanguage !== "" &&
      owner !== "" &&
      newBookTitle !== "" &&
      newAuthor !== "" &&
      newAgeRange !== "" &&
      newLocation !== ""
    ) {
      const book = {
        owner: owner,
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
      };
      const collectionRef = collection(db, 'languages', `${newBookLanguage}`, "books");
      await addDoc(collectionRef, book);
      setShowPopUp(true);

      // getUsers();
    } else {
      setShowPopUpFields(true);
    }
  };

  // const getToken = () => {
  //   const tokenString = localStorage.getItem("VStoken");
  //   setToken(tokenString);
  //   // getAuth()
  //   //   .verifyIdToken(tokenString)
  //   //   .then((decodedToken) => {
  //   //     console.log("Logged in successfully");
  //   //   })
  //   //   .catch((error) => {
  //   //     localStorage.removeItem("VStoken");
  //   //     console.log(error);
  //   //   });
  // };

  useEffect(() => {
    // getToken();
    // console.log("userDetails:", userDetails);
  // }, [showPopUp, userDetails]);
    }, []);

  const closeHandler = () => {
    setShowPopUp(false);
    window.location.reload();
  };

  const closePopUpFields = () => {
    setShowPopUpFields(false);
  };

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

  // const logoutHandler = () => {
  //   signOutWithGoogle();
  //   localStorage.removeItem("VStoken");
  // };

  // show Login page if not logged in (token in localeStorage)


  return (
    <>
    {token && (<div className="firebaseform">
      <h2>Add your book to the virtual shelf!</h2>
      <p>Fields marked with * are required</p>
      <label htmlFor="booklang">Book Language*</label>
      <select
        defaultValue=""
        placeholder="booklang"
        onChange={(event) => {
          setNewBookLanguage(event.target.value);
        }}
      >
        <option key="default" value="" disabled>
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
          setOwner(event.target.value);
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
      <button onClick={createBook}>Add Book</button>
      {showPopUp === true && <PopUp close={closeHandler} />}
      {showPopUpFields && (
        <PopUpFields
          close={closePopUpFields}
          lang={newBookLanguage}
          aut={newAuthor}
          owner={owner}
          title={newBookTitle}
          age={newAgeRange}
          loc={newLocation}
        />
      )}
      {/* {newBookLanguage && <Library language={newBookLanguage} />} */}
      {/* <button className="fake_logout" onClick={logoutHandler}>
        LOG OUT
      </button> */}
    </div>)}
    {!token && (
      <h2>Sign in to add a book</h2>
    )}
    </>
  );
}

export default FirebaseForm;
