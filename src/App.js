import logo from './logo.svg';
import './App.css';
import TopNavBar from './components/topnavbar.js'

function App() {
  return (
    <section className="App">
      <TopNavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>This is a test change</p>
        <p>This is another test change</p>
      </header>
    </section>
  );
}

export default App;
