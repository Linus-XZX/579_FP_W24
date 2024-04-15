import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const App = () => {
  const [pic, setPic] = useState(<img src={logo} className="App-logo" alt="logo" />);
  const [isLoading, setIsLoading] = useState(false);
  const getPic = (site, name = site) => {
    setIsLoading(true);
    fetch(site)
      .then((res) => res.json())
      .then((json) => json.image)
      .then((img) => setPic(<img src={img} alt={`Random meme from ${name}`} />))
      .then(() => setIsLoading(false));
  }
  return (
    <div className="App App-header">
      {isLoading ? "Loading..." : pic}
      <button onClick={() => getPic('https://yesno.wtf/api')}>Get random <s>xkcd</s> comic</button>
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
    </div>
  );
}

export default App;
