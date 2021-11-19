import React from 'react';
import logo from './assets/logo.svg'; 
// import Nav from './Nav';

const Header = () => {
  return (
    <header>
       <div id="logo">
                    <img src={logo} alt="Logo"/>
        </div>
        <h1>Welcome to The Virtual Shelf</h1>
        <br/>
        <p>Find your next read from our vide selection of books</p>
        <p>Finding books with our efficient search function is quick and easy</p>
        <p>Enjoy your stay!</p> 
    </header>
);
}

export default Header;
