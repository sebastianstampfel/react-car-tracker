import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
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
        defaultCategory = 1
        defaultCarId = 0
    }

    const [name, setName] = useState(defaultName)
    const [horsepower, setHorsepower] = useState(defaultHorsepower)
    const [price, setPrice] = useState(defaultPrice)
    const [category, setCategory] = useState(defaultCategory)

    // eslint-disable-next-line
    const [carId, setCarId] = useState(defaultCarId)

    const onNameChanged = e => setName(e.target.value)
    const onHorsepowerChanged = e => setHorsepower(e.target.value)
    const onPriceChanged = e => setPrice(e.target.value)
    const onCategoryChanged = e => {
        setCategory(e.target.value)
    }

    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories)

    const categoryDropdown = categories.map(category => (
        <option key={ category.id } value={ category.id }>{ category.name }</option>
    ))

    const handleSubmit = (event) => {
        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
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

                setName(defaultName)
                setHorsepower(defaultHorsepower)
                setPrice(defaultPrice)
                setCategory(defaultCategory)
                setValidated(false)
            }
        }
    }

    return (
        <div>
            {edit ? '' : <h3>Add new car</h3>}
            <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
                <Form.Group controlId="formCarName">
                    <Form.Label>Car Name</Form.Label>
                    <Form.Control required type="text" value={ name } onChange={ onNameChanged } placeholder="Enter name of car" />
                    <Form.Control.Feedback type="invalid">Please enter a valid car name</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formCarHorsepower">
                    <Form.Label>Horsepower</Form.Label>
                    <Form.Control required type="number" value={ horsepower } onChange={ onHorsepowerChanged } placeholder="Enter horsepower (e.g. 90)" />
                    <Form.Control.Feedback type="invalid">Please the cars horsepower</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formCarPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control required  type="number" value={ price } onChange={ onPriceChanged } placeholder="Enter car price in Euro (e.g. 90000)" />
                    <Form.Control.Feedback type="invalid">Please enter a price of the car</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formCarCategorySelect">
                    <Form.Label>Category</Form.Label>
                    <Form.Control required as="select" defaultValue={ defaultCategory } onChange={ onCategoryChanged }>
                        { categoryDropdown }
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">Please select a category for the car</Form.Control.Feedback>
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
