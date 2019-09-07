import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Row>
        <Col xs={8} md={9} >
          <Card bg='danger' text='dark' >
            <Card.Body>
              <Card.Title>Blog</Card.Title>
              <Card.Text>
                Placeholder
             </Card.Text>
            </Card.Body>
          </Card></Col>
        <Col xs={4} md={3}>
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
