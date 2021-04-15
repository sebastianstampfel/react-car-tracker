import React, { useState, useEffect } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { carsRemoved } from './carsSlice'
import { Filter } from 'react-lodash'
import AddCarForm from './AddCarForm'



const CarList = () => {
    const [nameFilter, setNameFilter] = useState('')
    const [show, setShow] = useState(false);
    const [selectedCar, setSelectedCar] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cars = useSelector(state => state.cars)

    // TODO: Implement search for price, horsepower and category
    // could be achieved using "if no name matches the query, check against
    // price, if nothing matches check against category" or so...

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

    let selectedCarForUpdate = {}

    const handleCarDoubleClick = (car) => {
        setSelectedCar(car)
        handleShow()
    }

    const renderedCars = displayedList.map(car => (
        <div key={car.id} onDoubleClick={() => handleCarDoubleClick(car)}>
            <h4>{car.name} <small>{car.category}</small></h4>
            <p className="car-specs">{car.horsepower} PS, {car.price} €</p>
            <Button variant="danger" size="sm" onClick={() => deleteCar(car)}>Delete</Button>
        </div>
    ))

    return (
        <>
            <div>
                <Form.Control type="text" value={nameFilter} onChange={onNameFilterChanged} placeholder="Search by name" />
                {renderedCars}
            </div>

            {/* Modal currently causes a deprecation error if opened.
                This is a known issue which - as of now - has yet to be
                fixed. See https://github.com/react-bootstrap/react-bootstrap/issues/5075 
                TODO: Either find workaround or disable strict mode (not preffered imho) */}

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit car
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {show && <AddCarForm edit={ true } car={ selectedCar }/>}
                </Modal.Body>

                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default CarList
