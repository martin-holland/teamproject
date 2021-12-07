import "./App.css";
import ClasslessSearch from "./components/ClasslessSearch";
import FirebaseForm from "./components/FirebaseForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Main from "./components/Main";
import BookSingle from "./components/BookSingle";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

const RouteWrapper = (props) => {
  const params = useParams();
  return <BookSingle params={params}{...props} />
}

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
          <Route path="/search/:id" element={<RouteWrapper />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
