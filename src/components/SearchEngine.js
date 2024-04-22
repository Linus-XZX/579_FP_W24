import React, { useState } from 'react';
import './SearchEngine.css';
import '../App.css';
import { Dropdown, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiList from '../components/constants';
import logo from '../logo.svg';
import Grading from '../components/Grading'; // Reusing Grading component for both grades

const SearchEngine = () => {
  const [pic, setPic] = useState(<img src={logo} className="App-logo" alt="logo" />);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [api, setApi] = useState('');
  const [funnyGrade, setFunnyGrade] = useState(5); // State to store the funny grade value
  const [favorGrade, setFavorGrade] = useState(5); // State to store the favor grade value
  const [addToFavorite, setAddToFavorite] = useState(false); // State for "Add to favorite" checkbox

  const getPic = (site, name = site) => {
    setIsLoading(true);
    fetch(site)
      .then((res) => res.json())
      .then((json) => json[apiList[site]])
      .then((img) => {
        // Apply the "fetched-image" class to this image
        setPic(<img src={img} alt={`Random meme from ${name}`} className="fetched-image" />);
        setImageUrl(img);
      })
      .then(() => setIsLoading(false));
  };

  const getImageRegistry = () => {
    const registry = localStorage.getItem('imageRegistry');
    return registry ? JSON.parse(registry) : [];
  };

  const isImageInRegistry = (url) => {
    const registry = getImageRegistry();
    return registry.includes(url);
  };

  const addToImageRegistry = (url) => {
    const registry = getImageRegistry();
    registry.push(url);
    localStorage.setItem('imageRegistry', JSON.stringify(registry));
  };

  const saveImageToLocalStorage = (imageSrc) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const dataURL = canvas.toDataURL('image/png');
      const imageKey = 'savedImage_' + new Date().getTime();
      const imageData = {
        image: dataURL,
        funny: funnyGrade,
        favor: favorGrade,
        originalUrl: imageSrc,
        favorite: addToFavorite // Including the favorite attribute
      };
      localStorage.setItem(imageKey, JSON.stringify(imageData));

      // Add to the registry
      addToImageRegistry(imageSrc);

      alert(`Image saved to local storage with key: ${imageKey}`);
    };
    img.src = imageSrc;
  };

  return (
    <div className="App App-header">
      <h1>SI579 Final Project: Meme search engine</h1>
      {isLoading ? "Loading..." : pic}
      {!isLoading && imageUrl && (
        <>
          <Grading label="Funny Grade" initialValue={5} onGradeChange={setFunnyGrade} />
          <Grading label="Favor Grade" initialValue={5} onGradeChange={setFavorGrade} />
          <div className="favorite-checkbox d-flex align-items-center">
            <Form.Label htmlFor="addToFavorite" className="mb-0 mr-2">Add to favorite</Form.Label>
            <Form.Check 
              type="checkbox"
              id="addToFavorite"
              checked={addToFavorite}
              onChange={(e) => setAddToFavorite(e.target.checked)}
              className="mb-0" // Removes bottom margin from the checkbox
            />
          </div>
        </>
      )}
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {api === '' ? 'Site List' : api}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {Object.keys(apiList).map((api, index) => (
            <Dropdown.Item key={index} onClick={() => setApi(api)}>
              {api}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Button disabled={api === ''} onClick={() => getPic(api)}>
        {api === '' ? 'Select a site to get started' : `Get random comic from ${api}`}
      </Button>
      <Button onClick={() => {
        const newApi = Object.keys(apiList)[Math.floor((Math.random() * Object.keys(apiList).length))];
        setApi(newApi);
        getPic(newApi);
      }}>Feeling lucky?</Button>
      {imageUrl && !isLoading && (
        <Button onClick={() => {
          if (!isImageInRegistry(imageUrl)) {
            saveImageToLocalStorage(imageUrl);
          } else {
            alert('This image has already been saved.');
          }
        }}>Save Image to Local Storage</Button>
      )}
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
};

export default SearchEngine;
