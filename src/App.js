import "./App.css";
// import BookForm from "./components/BookForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FirebaseForm from "./components/FirebaseForm";
import newForm from "./components/newForm";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div>
      <Header />
      <FirebaseForm language="italian" />
      <Footer />
    </div>
  );
}

export default App;
