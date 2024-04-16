import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ onSelect }) => {
  return (
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar" onSelect={onSelect}>
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <Nav.Link eventKey="searchEngine">Search Engine</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="funnyGallery">Funny Gallery</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="favorGallery">Favor Gallery</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="myFavorite">My Favorite</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="deleteMeme">Delete Meme</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
