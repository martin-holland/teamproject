import React from "react";
// import FAQ from "./FAQ";
import kati  from './assets/kati.png';
import martin from './assets/martin.png';
import elena  from './assets/elena.png';
import '../App.css';

const About = () => {
  return (
    <div className="about_wrapper">
    <div className="container1">
      <h2>Share you books</h2>
      <p>
        The Virtual Shelf is a virtual extension of our home bookshelves.
        
        In the Virtual Shelf you can find books in different languages. 
        If you have any books in your home, which you are ready to give away or borrow, add them to the Virtual Shelf.
      </p>
      <p>
      If you are looking for a book but you don't want to order it online or buy it from your locale bookstore, try to search the Virtual Shelf. The Virtual Shelf will connect you with the owner of the book so that you can agree on exchanging.</p>
      <p>
        The Virtual Shelf encourages reusing and sharing in the community. It supports cultural and linguistic diversity, and helps people connecting.
      </p>
      <p>Extend your homeshelf into the Virtual Shelf!</p>
      <h3>Who made this:</h3>
      <div className="about_people">
        <div className="team_member">
          <h4>KATI</h4>
          <p><strong>CSS, Styling, Frontend</strong></p>
          <a href="https://www.linkedin.com/in/katiremo/" target="_blank" rel="noreferrer">
            <img src={kati} alt='kati' role="button" />
          </a>
        </div>
        <div className="team_member">
          <h4>MARTIN</h4>
          <p><strong>Backend, Frontend</strong></p>
          <a href="https://www.linkedin.com/in/martin-holland-5099071b9/" target="_blank" rel="noreferrer">
            <img src={martin} alt='martin' role="button" />
          </a>
        </div >
          <div className="team_member">
            <h4>ELENA</h4>
            <p><strong>Fronted, Backend</strong></p>
            <a href="https://www.linkedin.com/in/elena-china-kolehmainen-958673143/" target="_blank" rel="noreferrer">
            <img src={elena} alt='elena' role="button" />
            </a>

        </div>
      </div>
    </div>
    {/* <div className="herobanner">
    <img
      src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
      alt="library shelf"
    />
  </div> */}
  </div>
  );
};

export default About;
