import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { carsRemoved } from './carsSlice'
import { Filter } from 'react-lodash'


const CarList = () => {
    const [nameFilter, setNameFilter] = useState('')

    const cars = useSelector(state => state.cars)
    let displayedList = cars.filter(car => car.name.toLowerCase().includes(nameFilter.toLowerCase()))

    const dispatch = useDispatch()

    const deleteCar = (car) => {
        dispatch(
            carsRemoved(car)
        )
    }

    const onNameFilterChanged = e => {
        setNameFilter(e.target.value)
        /* displayedList = Filter(cars, function(car){
            return car.name.indexOf(nameFilter)>-1
        }) */

        /* cars.forEach(car => {
            if (car.name.includes(nameFilter)){
                displayedList.push(car)
            }
        }) */

        console.log(displayedList)
    }

    const renderedCars = displayedList.map(car => (
        <div key={car.id}>
            <h4>{car.name} <small>{car.category}</small></h4>
            <p className="car-specs">{car.horsepower} PS, {car.price} €</p>
            <Button variant="danger" size="sm" onClick={() => deleteCar(car)}>Delete</Button>
        </div>
    ))

    return (
        <div>
            <Form.Control type="text" value={nameFilter} onChange={onNameFilterChanged} placeholder="Search by name" />
            {renderedCars}
        </div>
    )
}

export default CarList
