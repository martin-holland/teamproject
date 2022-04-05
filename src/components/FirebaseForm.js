import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import PopUp from "./PopUp";
import PopUpFields from "./PopUpFields";
import "./FirebaseForm.css";

// GRID for responsiveness
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const masterLanguages = require("./languages.json");
const availability = require("./availability.json");
const ageRanges = require("./ageRanges.json");

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

  function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    );
  }

  const createBook = async () => {
    if (
      newBookLanguage !== "" &&
      newBookTitle !== "" &&
      newAuthor !== "" &&
      newAgeRange !== "" &&
      newLocation !== ""
    ) {
      const book = {
        owner: user.uid,
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
      const collectionRef = collection(
        db,
        "languages",
        `${newBookLanguage}`,
        "books"
      );
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
      <div className="firebaseForm-container">
        <Container maxWidth="xs">
          <Grid>
            {token && (
              <div className="firebase">
                <Typography variant="h6">
                  Add your book to the virtual shelf
                </Typography>
                <p>Fields marked with * are required</p>
                <Grid item xs={8}>
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
                </Grid>
                {/* <label htmlFor="owner">(Owner)*</label>
      <input
        required
        type="text"
        placeholder="Owner"
        onChange={(event) => {
          SetUser(event.target.value);
        }}
      /> */}
                <Grid item xs={8}>
                  <label htmlFor="booktitle">Book Title*</label>
                  <input
                    required
                    type="text"
                    placeholder="Title"
                    onChange={(event) => {
                      setNewBookTitle(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <label htmlFor="booktitle">Author*</label>
                  <input
                    required
                    type="text"
                    placeholder="Author"
                    onChange={(event) => {
                      setNewAuthor(event.target.value);
                    }}
                  />
                </Grid>
                <label htmlFor="isbn">ISBN</label>
                <input
                  type="text"
                  placeholder="ISBN"
                  onChange={(event) => {
                    setnewISBN(event.target.value);
                  }}
                />
                <Grid item xs={8}>
                  <label htmlFor="ageRange">Age Range*</label>
                  <select
                  defaultValue=""
                    onChange={(event) => {
                      setNewAgeRange(event.target.value);
                    }}
                  >
                    <option key="default" value="" disabled>
                      Recommended age*
                    </option>
                    {ageRanges.map((obj) => {
                      return (
                        <option key={obj.name} value={obj.name}>
                          {obj.name}
                        </option>
                      );
                    })}
                  </select>
                </Grid>
                <Grid item xs={8}>
                  <label htmlFor="available">Availability</label>
                  <select
                    defaultValue=""
                    onChange={(event) => {
                      setNewAvailable(event.target.value);
                    }}
                  >
                    <option key="default" value="" disabled>
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
                </Grid>
                <Grid item xs={8}>
                  <label htmlFor="pubYear">Publication Year</label>
                  <input
                    type="text"
                    placeholder="Publication year"
                    onChange={(event) => {
                      setNewPubYear(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <label htmlFor="location">Location*</label>
                  <input
                    required
                    type="text"
                    placeholder="Location"
                    onChange={(event) => {
                      setNewLocation(event.target.value);
                    }}
                  />
                </Grid>
                <label htmlFor="comment">Comment/Condition</label>
                <input
                  type="text"
                  placeholder="Comment"
                  onChange={(event) => {
                    setNewComment(event.target.value);
                  }}
                />
                <Grid item xs={8}>
                  <label htmlFor="bookCover">Add a picture</label>
                  <input
                    id="bookCover"
                    type="file"
                    // ref={ref}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={onImageChange}
                  />
                </Grid>
                <Grid item xs={8}>
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
                </Grid>
              </div>
            )}
            {!token && <h2 className="sign">Sign in to add a book!</h2>}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default FirebaseForm;
