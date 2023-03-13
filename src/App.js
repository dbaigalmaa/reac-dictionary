import logo from "./logo.avif";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <h2>Dictionary</h2>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          Coded by Bella{" "}
          <a
            href="https://github.com/dbaigalmaa/reac-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
