import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { Form, Button } from 'react-bootstrap'
import { carsAdded, carsUpdated } from './carsSlice'


const AddCarForm = ({ edit, car, onSave }) => {
    const [validated, setValidated] = useState(false);

    let defaultName, defaultHorsepower, defaultPrice, defaultCategory, defaultCarId

    if(edit && !(Object.keys(car).length === 0 && car.constructor === Object)){
        defaultName = car.name
        defaultHorsepower = car.horsepower
        defaultPrice = car.price
        defaultCategory = car.category
        defaultCarId = car.id
    } else {
        defaultName = ''
        defaultHorsepower = ''
        defaultPrice = ''
        defaultCategory = ''
        defaultCarId = 0
    }

    const [name, setName] = useState(defaultName)
    const [horsepower, setHorsepower] = useState(defaultHorsepower)
    const [price, setPrice] = useState(defaultPrice)
    const [category, setCategory] = useState(defaultCategory)
    const [carId, setCarId] = useState(defaultCarId)

    const onNameChanged = e => setName(e.target.value)
    const onHorsepowerChanged = e => setHorsepower(e.target.value)
    const onPriceChanged = e => setPrice(e.target.value)
    const onCategoryChanged = e => setCategory(e.target.value)

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            event.stopPropagation();
            if (edit) {
                dispatch(
                    carsUpdated({
                        id: carId,
                        name,
                        horsepower,
                        price,
                        category
                    })
                )

                onSave()
            } else {
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
        }

        setValidated(true);
    }

    return (
        <div>
            {edit ? '' : <h2>Add new car</h2>}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formCarName">
                    <Form.Label>Car Name</Form.Label>
                    <Form.Control required type="text" value={name} onChange={onNameChanged} placeholder="Enter name of car" />
                    <Form.Control.Feedback type="invalid">Please enter a valid car name</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formCarHorsepower">
                    <Form.Label>Horsepower</Form.Label>
                    <Form.Control required type="text" value={horsepower} onChange={onHorsepowerChanged} placeholder="Enter horsepower" />
                    <Form.Control.Feedback type="invalid">Please the cars horsepower</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formCarPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control required  type="text" value={price} onChange={onPriceChanged} placeholder="Enter car price" />
                    <Form.Control.Feedback type="invalid">Please enter a price of the car</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formCarCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control required  type="text" value={category} onChange={onCategoryChanged} placeholder="Enter car category" />
                    <Form.Control.Feedback type="invalid">Please enter a category for the car</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    {edit ? 'Save changes' : 'Add car'}
                </Button>
            </Form>
        </div>
    )
}

AddCarForm.defaultProps = {
    edit: false,
    car: {},
    onSave: null
}

AddCarForm.propTypes = {
    edit: PropTypes.bool,
    car: PropTypes.object,
    onSave: PropTypes.func
}

export default AddCarForm
