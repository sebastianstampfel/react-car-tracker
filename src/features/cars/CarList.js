import React from 'react'
import { useSelector } from 'react-redux'

const CarList = () => {
    const cars = useSelector(state => state.cars)

    const renderedCars = cars.map(car => (
        <div>
            <h4 key={car.id}>{car.name} <small>{car.type}</small></h4>
            <p className="car-specs">{car.horsepower}, {car.price} €</p>
        </div>
    ))

    return (
        <div>
            {renderedCars}
        </div>
    )
}

export default CarList
