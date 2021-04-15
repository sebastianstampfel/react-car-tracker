import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { Form, Button } from 'react-bootstrap'
import { carsAdded } from './carsSlice'


const AddCarForm = () => {
    const [name, setName] = useState('')
    const [horsepower, setHorsepower] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const onNameChanged = e => setName(e.target.value)
    const onHorsepowerChanged = e => setHorsepower(e.target.value)
    const onPriceChanged = e => setPrice(e.target.value)
    const onCategoryChanged = e => setCategory(e.target.value)

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(
            carsAdded({
                id: nanoid(),
                name,
                horsepower,
                price,
                category
            })
        )
    }

    return (
        <div>
            <h2>Add new car</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCarName">
                    <Form.Label>Car Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={onNameChanged} placeholder="Enter name of car" />
                </Form.Group>

                <Form.Group controlId="formCarHorsepower">
                    <Form.Label>Horsepower</Form.Label>
                    <Form.Control type="text" value={horsepower} onChange={onHorsepowerChanged} placeholder="Enter horsepower" />
                </Form.Group>

                <Form.Group controlId="formCarPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" value={price} onChange={onPriceChanged} placeholder="Enter car price" />
                </Form.Group>

                <Form.Group controlId="formCarCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" value={category} onChange={onCategoryChanged} placeholder="Enter car category" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add car
                </Button>
            </Form>
        </div>
    )
}

export default AddCarForm
