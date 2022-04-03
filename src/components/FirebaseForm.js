import { useState, useEffect} from "react";
import { db,  } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import PopUp from "./PopUp";
import PopUpFields from "./PopUpFields";

const masterLanguages = require("./languages.json");
const availability = require("./availability.json");
const ageRanges = require("./ageRanges.json");

function FirebaseForm({ token, user, SetUser }) {
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


  const createBook = async () => {
    if (
      newBookLanguage !== "" &&
      newBookTitle !== "" &&
      newAuthor !== "" &&
      newAgeRange !== "" &&
      newLocation !== ""
    ) {
      const book = {
        owner: user,
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
      {/* <label htmlFor="owner">(Owner)*</label>
      <input
        required
        type="text"
        placeholder="Owner"
        onChange={(event) => {
          SetUser(event.target.value);
        }}
      /> */}
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
        defaultValue="Adult"
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
        defaultValue=""
        onChange={(event) => {
          setNewAvailable(event.target.value);
        }}
      >
        <option key="default" value="" disabled >
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
          owner={user}
          title={newBookTitle}
          age={newAgeRange}
          loc={newLocation}
        />
      )}
    </div>)}
    {!token && (
      <h2>Sign in to add a book</h2>
    )}
    </>
  );
}

export default FirebaseForm;
