import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CarList from './features/cars/CarList'
import AddCarForm from './features/cars/AddCarForm'


import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12}>
            <h1>React Car Tracker</h1>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <AddCarForm />
          </Col>
          <Col md={4}>
            <CarList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
