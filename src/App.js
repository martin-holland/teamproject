import "./App.css";
import ClasslessSearch from "./components/ClasslessSearch";
import FirebaseForm from "./components/FirebaseForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Main from "./components/Main";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/addbook" element={<FirebaseForm />} />
          <Route path="/search" element={<ClasslessSearch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
