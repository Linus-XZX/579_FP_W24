import React from 'react';
import { Nav } from 'react-bootstrap';
import '../components/Sidebar.css';

const Sidebar = ({ onSelect }) => {
  return (
    <Nav className="Sidebar col-md-12 d-none d-md-block bg-light" onSelect={onSelect}>
      <Nav.Item className="Sidebar-item">
        <Nav.Link className="Sidebar-link" eventKey="searchEngine">Search Engine</Nav.Link>
      </Nav.Item>
      <Nav.Item className="Sidebar-item">
        <Nav.Link className="Sidebar-link" eventKey="funnyGallery">Funny Gallery</Nav.Link>
      </Nav.Item>
      <Nav.Item className="Sidebar-item">
        <Nav.Link className="Sidebar-link" eventKey="favorGallery">Favor Gallery</Nav.Link>
      </Nav.Item>
      <Nav.Item className="Sidebar-item">
        <Nav.Link className="Sidebar-link" eventKey="myFavorite">My Favorite</Nav.Link>
      </Nav.Item>
      <Nav.Item className="Sidebar-item">
        <Nav.Link className="Sidebar-link" eventKey="deleteMeme">Delete Meme</Nav.Link>
      </Nav.Item>
    </Nav>

  );
};

export default Sidebar;
