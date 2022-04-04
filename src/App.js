import "./App.css";
// import Layout from "./components/Layout";
import SearchByLanguage from "./components/SearchByLanguage";
import FirebaseForm from "./components/FirebaseForm";
import Footer from "./components/Footer";
import About from "./components/About";
import Main from "./components/Main";
// import FAQ from "./components/FAQ";
// import BookSingle from "./components/BookSingle";
import SearchByAge from "./components/SearchByAge";
// import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useState } from "react";

// for MUI nav
import { Route, Routes } from "react-router";
import Nav from './components/Nav';
import NotAvailable from './components/NotAvailable';
import UserDashboard from './components/UserDashboard';

// const RouteWrapper = (props) => {
//   const params = useParams();
//   return <BookSingle params={params} {...props} />;
// };

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  return (
    <div>
      {/* for Routing without MUI Navbar/App Bar--> delete BrowserRouter from index.js */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Layout  token={token} setToken={setToken} user={user} setUser={setUser}/>} >
            <Route index element={<Main />} />
            <Route path="/searchbylanguage" element={<SearchByLanguage />} />
            <Route path="/searchbyage" element={<SearchByAge />} />
            <Route path="/addbook" element={<FirebaseForm token={token} user={user} setUser={setUser}/>} />
            <Route path="/about" element={<About />} /> */}
            {/* <Route path="/signin" element={<Signin token={token} setToken={setToken}/>} />
            <Route path="/signout" element={<Signout token={token} setToken={setToken}/>} /> */}
            {/* <Route path="/search/:id" element={<RouteWrapper />} />
          </Route>
        </Routes>
        <Footer />
      </Router> */}

      <Nav token={token} setToken={setToken}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="search%20by%20lang" element={<SearchByLanguage />} />
        <Route path="search%20by%20age" element={<SearchByAge />} />
        <Route path="add%20a%20book" element={<FirebaseForm token={token} user={user} setUser={setUser}/>} />
        <Route path="about" element={<About />} />  
        <Route path="signin" element={<UserDashboard />} />  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
