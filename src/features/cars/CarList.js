import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { carsRemoved } from './carsSlice'


const CarList = () => {
    const cars = useSelector(state => state.cars)

    const dispatch = useDispatch()

    const deleteCar = (car) => {
        dispatch(
            carsRemoved(car)
        )
    }

    const renderedCars = cars.map(car => (
        <div key={car.id}>
            <h4>{car.name} <small>{car.category}</small></h4>
            <p className="car-specs">{car.horsepower} PS, {car.price} €</p>
            <Button variant="danger" size="sm" onClick={() => deleteCar(car)}>Delete</Button>
        </div>
    ))

    return (
        <div>
            {renderedCars}
        </div>
    )
}

export default CarList
