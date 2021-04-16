import React from 'react'
import { ListGroup, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { categoriesRemoved } from './categoriesSlice'
import { clearCategory } from '../cars/carsSlice'



const CategoryList = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)

    const handleCategoryDeleteClick = (category) => {
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
        </div>
    )
}

export default CategoryList
