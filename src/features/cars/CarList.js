import React from 'react'
import { useSelector } from 'react-redux'

const CarList = () => {
    const cars = useSelector(state => state.cars)

    const renderedCars = cars.map(car => (
        <div key={car.id}>
            <h4>{car.name} <small>{car.category}</small></h4>
            <p className="car-specs">{car.horsepower} PS, {car.price} €</p>
        </div>
    ))

    return (
        <div>
            {renderedCars}
        </div>
    )
}

export default CarList
