import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Topbar from './components/Topbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {


  render() {
    return (
      <div className="App" style={{ width: '100vw' }}>

        <Topbar />

        <Row noGutters>
          <Col xs={12} md={9} className="p-0">
            <Card text='dark' style={{ height: '100vw' }} className="overflowing, blog" >
              <Card.Body className="p-0">
                <Card.Title>Blog</Card.Title>
                <Card.Text>
                  Placeholder
             </Card.Text>
              </Card.Body>
            </Card></Col>
          <Col xs={12} md={3} className="p-0">
            <Card className="stats" text='warning' >
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
}

export default App;
