import './App.css';
import ClasslessSearch from './components/ClasslessSearch';
import FirebaseForm from './components/FirebaseForm';
import Footer from './components/Footer';
import Header from './components/Header';
// import About from './components/About';
// import Main from './components/Main';
import Library from './components/Library';

function App() {
  return (
    <div>
      <Header />
      <FirebaseForm/>
      {/* <Main /> */}
      <Footer />
      <ClasslessSearch />
      {/* <Library/> */}
    </div>
  );
}

export default App;
