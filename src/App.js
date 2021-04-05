import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Sadia Sanam Sarwar on <a href="https://github.com/SadiaSanam/mydictionary">GitHub</a></small>
        </footer>
      </div>
    </div>
  );
}