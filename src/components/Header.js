import React from "react";
import logo from "./assets/logo.svg";
import { Link } from "react-router-dom";
// import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div id="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1>Welcome to The Virtual Shelf</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <button className="addbook">
        <Link to="/addbook">Add Book on the Shelf</Link>
      </button>
    </header>
  );
};

export default Header;
