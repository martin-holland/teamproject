import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    window.onscroll = function () {
      let footer = document.getElementById("footer");
      window.onscroll = function () {
        footer.style.display = "none";
      };
    };
  });
  return (
    <footer id="footer">
      <div>
        <h4>The Handlers &copy; 2021</h4>
        <p>
          Phone:<a href="tel:+15555551212">555-555-1212</a>
        </p>
        <p>
          <a href="email:info@handlers.com">E-mail to: info@handlers.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
