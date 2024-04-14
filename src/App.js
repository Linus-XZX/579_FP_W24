import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const App = () => {
  const [pic, setPic] = useState(logo);
  const getPic = () => {
    fetch('https://xkcd.com/info.0.json')
      .then((res) => res.json())
      .then((json) => json.img)
      .then((img) => setPic(img));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="App-logo" alt="logo" />
        <button onClick={getPic}>Get random xkcd comic</button>
        <p>
          SI579 Final Project: Meme search engine
        </p>
        <a
          className="App-link"
          href="https://github.com/Linus-XZX/579_fp_w24"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to source code repo
        </a>
      </header>
    </div>
  );
}

export default App;
