import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { Form, Button } from 'react-bootstrap'


const AddCarForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }

    return (
        <div>
            <h2>Add new car</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCarName">
                    <Form.Label>Car Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name of car" />
                </Form.Group>

                <Form.Group controlId="formCarHorsepower">
                    <Form.Label>Horsepower</Form.Label>
                    <Form.Control type="text" placeholder="Enter horsepower" />
                </Form.Group>

                <Form.Group controlId="formCarPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter car price" />
                </Form.Group>

                <Form.Group controlId="formCarCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter car category" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add car
                </Button>
            </Form>
        </div>
    )
}

export default AddCarForm
