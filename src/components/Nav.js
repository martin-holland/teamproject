// import { useEffect } from "react";
// import { Link } from 'react-router-dom';
// import logo from "./assets/logo.svg";
// import Signout from './Signout';
// import Signin from './Signin';
// import User from './User';
// import './Nav.css';


// function Nav( { token, setToken }) {
//   useEffect(() => {

//   }, [token]);

//   return (
//     <nav>
//       <ul>
//         <li><Link to='/'><div className="homelogo"><img src={logo} alt="logo"/></div></Link></li>
//         <li><Link to='/searchbylanguage'>Search by language</Link></li>
//         <li><Link to='/searchbyage'>Search by age</Link></li>
//         <li><Link to='/addBook'>Add Book on the Shelf</Link></li>
//         <li><Link to ='/about'>About</Link></li>
//         {/* <li><Signin to ='/signin'><button onClick={console.log('sign in')}></button></Signin></li> */}
//         <li><User></User></li>
//         {!token ? (<li><Signin token={token} setToken={setToken}/></li>) :
//                 (<li><Signout token={token} setToken={setToken}></Signout ></li>)
//         }
//         {/* {!token && <li><Signin token={token} setToken={setToken}/></li>}
//         {token && <li><Signout token={token} setToken={setToken}></Signout ></li>} */}
//       </ul>
//     </nav>
//   );
// }

// export default Nav;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Signin from './Signin';
import Signout from './Signout';
import logo from "./assets/logo.svg";

const pages = ['Search by lang', 'Search by age', 'Add a book', 'About'];
// const loginOptions = ['Login with Google', 'Login with credentials'];

const Nav = ({ token, setToken, user, setUser }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  React.useEffect(() => {
    console.log("user", user);
  }, [user]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static"
    sx={{backgroundColor: "#efb167", color: "#4d2c06"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          <Link style={{textDecoration: "none", color: "black"}} to='/'>
          <img src={logo} alt="Virtual Shelf logo" />
          </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{backgroundColor: "#efb167", color: "#4d2c06"}}>
                  <Typography textAlign="center" ><Link style={{textDecoration: "none", color: "black"}} to={`/${page}`}>{page}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={logo} alt="Virtual Shelf logo" width="100"/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{textDecoration: "none", color: "black"}} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            {!token && <Signin token={token} setToken={setToken} user={user} setUser={setUser} />}
            {token && <p>{`Hello, ${user.displayName}`}</p>}
            {token && <Signout token={token} setToken={setToken} user={user} setUser={setUser} />} 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
