import "./App.css";
import Library from "./components/Library";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FirebaseForm from "./components/FirebaseForm";
import testAxios from "./components/testAxios";

function App() {
  return (
    <div>
      <Header />
      <FirebaseForm language="italian" />
      <Footer />
      <Library language="italian" />
      <testAxios />
    </div>
  );
}

export default App;
