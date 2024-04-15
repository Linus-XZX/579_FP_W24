import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import apiList from './components/constants';

const App = () => {
  const [pic, setPic] = useState(<img src={logo} className="App-logo" alt="logo" />);
  const [isLoading, setIsLoading] = useState(false);
  const [api, setApi] = useState('');
  const getPic = (site, name = site) => {
    setIsLoading(true);
    fetch(site)
      .then((res) => res.json())
      .then((json) => json[apiList[api]])
      .then((img) => setPic(<img src={img} alt={`Random meme from ${name}`} />))
      .then(() => setIsLoading(false));
  }
  return (
    <div className="App App-header">
      {isLoading ? "Loading..." : pic}
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {api === '' ? 'Site List' : api}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {Object.keys(apiList).map((api, index) => <Dropdown.Item key={index} onClick={() => setApi(api)}>{api}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <button disabled={api === ''} onClick={() => getPic(api)}>{api === '' ? 'Select a site to get started' : `Get random comic from ${api}`}</button>
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
