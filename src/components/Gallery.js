import React, { useState, useEffect } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import './Gallery.css';

const Gallery = ({ activePage }) => {
  const [images, setImages] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' for ascending, 'desc' for descending

  useEffect(() => {
    let savedImages = Object.keys(localStorage)
      .filter((key) => key.startsWith('savedImage_'))
      .map((key) => JSON.parse(localStorage.getItem(key)));

    if (activePage === 'funnyGallery') {
      savedImages.sort((a, b) => sortOrder === 'asc' ? a.funny - b.funny : b.funny - a.funny);
    } else if (activePage === 'favorGallery') {
      savedImages.sort((a, b) => sortOrder === 'asc' ? a.favor - b.favor : b.favor - a.favor);
    }

    setImages(savedImages);
  }, [activePage, sortOrder]); // Add sortOrder to the dependency array

  const handleSelectSortOrder = (order) => {
    setSortOrder(order);
  };

  return (
    <div className='container'>
      <Dropdown onSelect={handleSelectSortOrder}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort Order
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="asc">Ascending</Dropdown.Item>
          <Dropdown.Item eventKey="desc">Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {images.map((image, index) => (
        <Card key={index} style={{ width: '18rem', marginTop: '10px' }}>
          <Card.Img variant="top" src={image.image} />
          <Card.Body>
            {activePage === 'funnyGallery' && <Card.Text>Funny Grade: {image.funny}</Card.Text>}
            {activePage === 'favorGallery' && <Card.Text>Favor Grade: {image.favor}</Card.Text>}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
