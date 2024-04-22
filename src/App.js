import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SearchEngine from './components/SearchEngine';
import Gallery from './components/Gallery';
import DeleteMeme from './components/DeleteMeme';
import FavoritesGallery from './components/FavoritesGallery'; // Adjust the path as necessary
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  const [activePage, setActivePage] = useState('searchEngine');

  const handleSelect = (selectedKey) => {
    setActivePage(selectedKey);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">      
          <Sidebar onSelect={handleSelect} />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          {activePage === 'searchEngine' && <SearchEngine />}
          {activePage === 'funnyGallery' && <Gallery activePage={activePage} />}
          {activePage === 'favorGallery' && <Gallery activePage={activePage} />}
          {activePage === 'myFavorite' && <FavoritesGallery />}
          {activePage === 'deleteMeme' && <DeleteMeme />}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
