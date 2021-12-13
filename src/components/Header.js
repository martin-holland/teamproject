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
            <Link to="/"><strong>Home</strong></Link>
          </li>
          <li>
            <Link to="/about"><strong>About</strong></Link>
          </li>
          <li>
      <label htmlFor="addbook">
        {/* <div className="addbook"> */}
          <Link id="addbook" to="/addbook">
            <strong>Add Book on the Shelf</strong>
          </Link>
        {/* </div> */}
      </label>
        </li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
