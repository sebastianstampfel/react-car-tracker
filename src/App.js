import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CarList from './features/cars/CarList'
import AddCarForm from './features/cars/AddCarForm'
import Categories from './features/categories/Categories'


import './App.scss';

function App() {
  return (
    <div className="App">
      <Container className={ "app-container" }>
        <Row>
          <Col md={12}>
            <h1 className={ "header-text" }>Car Tracker</h1>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <AddCarForm />
            <Categories />
          </Col>
          <Col md={8}>
            <CarList />
          </Col>
        </Row>

        <Row>
          <Col>
          <div className={ "fake-footer" }>
            <p>
              Basic car tracker using React - 
              2021, <a href="https://github.com/sebastianstampfel/react-car-tracker">
              Sebastian Stampfel</a>
            </p>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
