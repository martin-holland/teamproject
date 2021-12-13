import React from 'react';
import "./FAQ.css";

const FAQ = () => {
    return (
        <div className="faq">
            <h1>Frequently Asked Questions</h1>

            <h3>General</h3>
                <p>Q. What is The Virtual Shelf?</p>
                <p>A. The Virtual Shelf is an online international bookshelf, where you can place books for others to borrow and from where you cand find your books for yourself.</p>

            <h3>Site Usage</h3>
            <p>Q. What personal details are required when creating an account?</p>
            <p>A. In order to post a book, all that is required is a username and password. When posting a book, it is required to provide the location (city) where the book is located. All communication can be handled within the app, so no phone numbers or e-mail addresses are needed.</p>

            <h3>Submitting a Book</h3>
                <p>Q. How do I submit a book to the Virtual Shelf?</p>
                <p>A. This has been made as simple as possible. All you have to do is create a username & password after which you submit your book details with the form provided. That's it!</p>

            <h3>Payments</h3>
            <p>Q. Are there any costs using the Virtual Shelf?</p>
            <p>A. Using the site is free of charge. Also, all the books are on loan only, so no payments are made during the process.</p>

        </div>
    );
};

export default FAQ;