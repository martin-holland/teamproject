import "./App.css";
// import BookForm from './components/BookForm';
import FirebaseForm from "./components/FirebaseForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Main from "./components/Main";
import Library from "./components/Library";
import ClasslessSearch from "./components/ClasslessSearch";

function App() {
  return (
    <div>
      <Header />
      <FirebaseForm language="italian" />
      <Main />
      <Footer />
      <ClasslessSearch />
      <Library language="italian" />
    </div>
  );
}

export default App;
