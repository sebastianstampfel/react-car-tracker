import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { categoriesAdded } from './categoriesSlice'



const AddCategoryForm = () => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('')

    const onNameChanged = e => setName(e.target.value)

    const dispatch = useDispatch()


    const handleSubmit = (event) => {
        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true)
        } else {
            event.preventDefault();
            event.stopPropagation();
            dispatch(
                categoriesAdded({
                    id: nanoid(),
                    name
                })
            )
            setName('')
            setValidated(false)
        }
    }

    return (
        <div>
            <h4>Add new category</h4>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formCategoryName">
                    <Form.Label>Category name</Form.Label>
                    <Form.Control required type="text" value={name} onChange={onNameChanged} placeholder="Enter name for category" />
                    <Form.Control.Feedback type="invalid">Please enter a valid category name</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add category
                </Button>
            </Form>
        </div>
    )
}

export default AddCategoryForm
