import { Link } from 'react-router-dom';
import logo from "./assets/logo.svg";
import Signout from './Signout';
import Signin from './Signin';
import User from './User';
import './Nav.css';


function Nav( { token, setToken }) {
    return (
      <nav>
        <ul>
          <li><Link to='/'><div className="homelogo"><img src={logo} alt="logo"/></div></Link></li>
          <li><Link to='/searchbylanguage'>Search by language</Link></li>
          <li><Link to='/searchbyage'>Search by age</Link></li>
          <li><Link to='/addBook'>Add Book on the Shelf</Link></li>
          <li><Link to ='/about'>About</Link></li>
          {/* <li><Signin to ='/signin'><button onClick={console.log('sign in')}></button></Signin></li> */}
          <li><User></User></li>
          <li><Signin token={token} setToken={setToken}/></li>
          <li><Signout token={token} setToken={setToken}></Signout ></li>
        </ul>
      </nav>
    );
}

export default Nav;