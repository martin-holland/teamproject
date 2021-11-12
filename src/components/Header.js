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
    </header>
);
}

export default Header;
