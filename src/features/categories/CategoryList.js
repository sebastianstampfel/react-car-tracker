import React, { useState } from 'react'
import { ListGroup, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { categoriesRemoved } from './categoriesSlice'
import { clearCategory } from '../cars/carsSlice'



const CategoryList = () => {
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const toggleShowDeleteAlert = () => setShowDeleteAlert(!showDeleteAlert);

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

    const renderedCategories = categories.map(category => (
        <ListGroup.Item key={ category.id }>
            <Row>
                <Col sm={10}>
                    { category.name }
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
