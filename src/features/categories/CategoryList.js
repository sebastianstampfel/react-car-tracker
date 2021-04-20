import React, { useState } from 'react'
import { ListGroup, Col, Row, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { FaTimes, FaPencilAlt, FaSave } from 'react-icons/fa'
import { categoriesRemoved, categoriesUpdated } from './categoriesSlice'
import { clearCategory } from '../cars/carsSlice'



const CategoryList = () => {
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const toggleShowDeleteAlert = () => setShowDeleteAlert(!showDeleteAlert);

    const [editMode, setEditMode] = useState(false)
    const toggleEditMode = () => setEditMode(!editMode)

    const [categoryToEdit, setCategoryToEdit] = useState({})
    const onNameChanged = e => setCategoryToEdit({id: categoryToEdit.id, name: e.target.value})


    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)

    const handleCategoryDeleteClick = (category) => {
        toggleShowDeleteAlert()

        dispatch(
            clearCategory({categoryId: category.id})
        )
        dispatch(
            categoriesRemoved(category)
        )
    }

    const handleCategoryEditClick = (category) => {
        setCategoryToEdit(category)
        toggleEditMode()
    }

    const handleCategoryEditSaveClick = (category) => {
        setCategoryToEdit({})
        toggleEditMode()
        dispatch(categoriesUpdated(categoryToEdit))
    }

    const renderedCategories = categories.map(category => (
        <ListGroup.Item key={ category.id }>
            <Row>
                <Col sm={9}>
                    { editMode && categoryToEdit.id === category.id ? 
                    <Form.Control required type="text" value={ categoryToEdit.name } onChange={ onNameChanged } placeholder="Enter name for category" /> :
                    category.name 
                    }
                </Col>

                <Col sm={1}>
                    {
                        editMode && categoryToEdit.id === category.id ? 
                        <FaSave style={{color: "#333", cursor: "pointer"}} onClick={() => handleCategoryEditSaveClick(category)}/> :
                        <FaPencilAlt style={{color: "#333", cursor: "pointer"}} onClick={() => handleCategoryEditClick(category)}/> 
                    }
                </Col>

                <Col sm={1}>
                    <FaTimes style={{color: "red", cursor: "pointer"}} onClick={() => handleCategoryDeleteClick(category)}/>
                </Col>
            </Row>
             
        </ListGroup.Item>
    ))

    return (
        <div>
            <ListGroup>
                { renderedCategories }
            </ListGroup>
            <p className={ "category-delete-info" }>Hint: If a category is deleted to which cars are currently assigned, the cars will be unassigned and show up with no category!</p>
        </div>
    )
}

export default CategoryList
