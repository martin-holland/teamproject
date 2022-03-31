import { Link } from 'react-router-dom';
import logo from "./assets/logo.svg";
import './Nav.css';


function Nav() {
    return (
      <nav>
        <ul>
          <li><Link to='/'><div className="homelogo"><img src={logo} alt="logo"/></div></Link></li>
          <li><Link to='/searchbylanguage'>Search by language</Link></li>
          <li><Link to='/searchbyage'>Search by age</Link></li>
          <li><Link to='/addBook'>Add Book on the Shelf</Link></li>
          <li><Link to ='/about'>About</Link></li>
          <li><Link to ='/login'>Log in</Link></li>
          <li><Link to ='/signup'>Sign up</Link></li>
        </ul>
      </nav>
    );
}

export default Nav;