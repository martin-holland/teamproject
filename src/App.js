import "./App.css";
import Layout from "./components/Layout";
import ClasslessSearch from "./components/ClasslessSearch";
import FirebaseForm from "./components/FirebaseForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Main from "./components/Main";
import Signup from "./components/Signup";
import FAQ from "./components/FAQ";
import BookSingle from "./components/BookSingle";
import SearchByAge from "./components/SearchByAge";
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Login from "./components/Login";

const RouteWrapper = (props) => {
  const params = useParams();
  return <BookSingle params={params}{...props} />
}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Main />} />
            <Route path="/searchbylanguage" element={<ClasslessSearch />} />
            <Route path="/searchbyage" element={<SearchByAge />} />
            <Route path="/addbook" element={<FirebaseForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search/:id" element={<RouteWrapper />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
