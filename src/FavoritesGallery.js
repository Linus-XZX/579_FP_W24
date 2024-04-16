import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const FavoritesGallery = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch and filter images marked as favorite
    const fetchFavorites = () => {
      const savedImages = Object.keys(localStorage)
        .filter((key) => key.startsWith('savedImage_'))
        .map((key) => JSON.parse(localStorage.getItem(key)))
        .filter((image) => image.favorite); // Filter for images with favorite: true

      setFavorites(savedImages);
    };

    fetchFavorites();
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      {favorites.length > 0 ? (
        favorites.map((image, index) => (
          <Card key={index} style={{ width: '18rem', margin: '10px', display: 'inline-block' }}>
            <Card.Img variant="top" src={image.image} />
            <Card.Body>
              <Card.Text>Funny Grade: {image.funny}</Card.Text>
              <Card.Text>Favor Grade: {image.favor}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No favorite images found.</p>
      )}
    </div>
  );
};

export default FavoritesGallery;
