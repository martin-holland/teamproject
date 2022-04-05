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
        The Virtual Shelf is a place where you can find books in different languages.
        If you have any books in your home, which you are ready to give away or borrow, add them to the Virtual Shelf. 
      </p>
      <p>
        You can search for books in several languages and there is plenty of selection for both children and adults. Depending on the agreement with the person who has posted the book, you loan it or will not be required to return it. In latter case you can pay it forward and post the book on your profile so someone else can enjoy it.
      </p>
      <div className="about_people">
        <div className="team_member">
          <h4>KATI</h4>
          <p><strong>CSS, Styling, Frontend</strong></p>
          <a href="http://www.google.com" target="_blank" rel="noreferrer">
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
