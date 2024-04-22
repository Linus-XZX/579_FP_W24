import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import './DeleteMeme.css';

const DeleteMeme = () => {
  const [images, setImages] = useState([]);

useEffect(() => {
    fetchImages();
  }, []);

const fetchImages = () => {
  const savedImages = Object.keys(localStorage)
    .filter(key => key.startsWith('savedImage_'))
    .map(key => ({ id: key, ...JSON.parse(localStorage.getItem(key)) }));
    setImages(savedImages);
  };

const deleteImage = (id) => {
    localStorage.removeItem(id);
    fetchImages(); // Refresh the images after deletion
  };

  return (
    <div className='container'>
      {images.map((image) => (
        <Card key={image.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={image.image} onClick={() => deleteImage(image.id)} />
          <Card.Body>
            <Button variant="danger" onClick={() => deleteImage(image.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DeleteMeme;
