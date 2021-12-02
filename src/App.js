import './App.css';
// import BookForm from './components/BookForm';
import FirebaseForm from './components/FirebaseForm'
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Main from './components/Main';
import Library from './components/Library';

function App() {
  return (
    <div>
      <Header />
      {/* <FirebaseForm /> */}
      <Main />
      <Footer />
      <Library language="italian" />
    </div>
  );
}

export default App;
