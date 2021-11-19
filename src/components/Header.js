import React from 'react';
import logo from './assets/logo.png'; 
// import logo from './assets/logo.svg';

const Header = () => {
  return (
    <header>
       <div id="logo">
                    <img src={logo} alt="Logo"/>
        </div>
        <h1>The Virtual Shelf</h1>
        <p>Find your next read from our vide selection of books</p>
        <br/>
        <p>It's easy to find books either by language or theme.</p> 
    </header>
);
}

export default Header;
