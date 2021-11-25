import "./App.css";
import Library from "./components/Library";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FirebaseForm from "./components/FirebaseForm";
import TestAxios from "./components/TestAxios";

function App() {
  return (
    <div>
      <Header />
      <FirebaseForm language="italian" />
      <Footer />
      <Library language="italian" />
      <TestAxios />
    </div>
  );
}

export default App;
