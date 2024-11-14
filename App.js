import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import './components/StyleNew.css'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is my first compilation from old HTML file to React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Footer />
    </div>
  );
}

export default App;
