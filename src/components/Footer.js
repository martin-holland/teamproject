import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
        return (
            <footer>
            <div>
                <h4>The Handlers &copy; 2021</h4> 
                <p>Contact us: 
                    <a href="tel:+15555551212">555-555-1212</a>
                    </p>
                   <p> 
                    <a href="email:info@handlers.com">Mail to: info@handlers.com</a>
                    </p>
            </div>
            </footer>
        );
    }

export default Footer;