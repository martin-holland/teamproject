import React from "react";
// import FAQ from "./FAQ";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
    <div className="container1">
      <h2>About The Virtual Shelf</h2>
      <p>
        The Virtual Shelf is a place where you can find books for yourself and
        your family to read. You can also share your own books for others.
      </p>

      <p>The idea for this community is very simple:
        If you have any books in your home, which you are not reading anymore, share them with others. You can either loan them or give them away. The books can be in any language and for kids or adults or anything in between. The main idea is, that no money is changing hands. Submitting your book for loan is simple to do on our site.{" "}
      </p>
      <p>
        You can search for books in several languages and there is plenty of selection for both children and adults. Depending on the agreement with the person who has posted the book, you loan it or will not be required to return it. In latter case you can pay it forward and post the book on your profile so someone else can enjoy it.
      </p>
    </div>
    <div className="herobanner">
    <img
      src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
      alt="library shelf"
    />
  </div>
  </div>
  );
};

export default About;
