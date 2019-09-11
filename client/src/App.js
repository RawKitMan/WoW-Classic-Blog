import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App" style={{ width: '100vw' }}>

      <Navbar style={{ height: '10rem' }, { width: '100vw' }}>
        <Navbar.Brand>
          <img
            src="images/Warlock.jpg"
            className="d-inline-block align-top warlock-size"
            alt="Rawkitman"
          />
        </Navbar.Brand>

        <p className="text-warning text-justify">The Adventures of a WoW Classic Warlock</p>

      </Navbar>

      <Row noGutters>
        <Col xs={12} md={9} className="p-0">
          <Card bg='danger' text='dark' style={{ height: '100vw' }} className="overflowing" >
            <Card.Body className="p-0">
              <Card.Title>Blog</Card.Title>
              <Card.Text>
                Placeholder
             </Card.Text>
            </Card.Body>
          </Card></Col>
        <Col xs={12} md={3} className="p-0">
          <Card bg='dark' text='warning' >
            <Card.Body>
              <Card.Title>Current Stats</Card.Title>
              <Card.Text>
                Placeholder
             </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </div>
  );
}

export default App;
