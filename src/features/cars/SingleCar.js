import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'




const SingleCar = ({ car, editHandler, deleteHandler }) => {
    const categories = useSelector(state => state.categories)
    // eslint-disable-next-line
    const category = (car.category !== 0) ? categories.filter(category => category.id == car.category)[0] : {name: ''}

    return (
        <div className={"car-entry"}>
            <h4>{ car.name } <small>{ category.name }</small></h4>
            <p className="car-specs">{ car.horsepower } PS, { car.price } €</p>
            <Button variant="info" className={ "edit-button" } size="sm" onClick={ () => editHandler(car) }>Edit</Button>
            <Button variant="danger" size="sm" onClick={ () => deleteHandler(car) }>Delete</Button>
        </div>
    )
}

export default SingleCar
