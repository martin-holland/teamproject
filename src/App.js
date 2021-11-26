import "./App.css";
import Library from "./components/Library";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FirebaseForm from "./components/FirebaseForm";

function App() {
  return (
    <div>
      <Header />
      <FirebaseForm language="italian" />
      <Footer />
      <Library language="italian" />
    </div>
  );
}

export default App;
