import { getDocs, collectionGroup, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import BookCard from "./BookCardMUI";
import { db } from "./firebase-config";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const UserDashboard = ({ user }) => {
    const [userBooks, setUserBooks] = useState([]);  


    useEffect( () => {
        getBooks();
    }, []);



    const getBooks = async () => {
        const books = query(collectionGroup(db, 'books'), where('owner', '==', user.uid));
        const querySnapshot = await getDocs(books);

        const matchingBooks = [];
        querySnapshot.forEach(doc => {
            console.log("book data", doc.data());
            console.log('hook', userBooks);
            matchingBooks.push(doc.data());
        });
        setUserBooks(prev => matchingBooks);
        return matchingBooks;
    };

    return (
        <>
            <Typography  variant="subtitle1" margin="1rem">
                {`${user?.displayName.split(' ')[0]}'s books:`}
            </Typography>
            <Grid container spacing={4} justify="center">
                <Grid item xs={12} sm={6} md={3}>
                {userBooks.map(book => {
                    return <BookCard key={book.bookTitle} book={book}/>
                })}
                </Grid>
            </Grid>
        </>
    );
};

export default UserDashboard;