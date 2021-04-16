import React, { useState } from 'react'
import { Form,  Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { carsRemoved } from './carsSlice'
import AddCarForm from './AddCarForm'
import SingleCar from './SingleCar'



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
    }

    const editCar = (car) => {
        setSelectedCar(car)
        handleShow()
    }

    const renderedCars = displayedList.map(car => (
        <SingleCar key={ car.id } car={ car } editHandler={ editCar } deleteHandler={ deleteCar } />
    ))

    return (
        <>
            <h3>Car overview</h3>
            <div className={ "car-list-container" }>
                <Form.Control className={ "car-search-box" } type="text" value={nameFilter} onChange={onNameFilterChanged} placeholder="Search by name" />
                {renderedCars.length ? renderedCars : <h3 className={ "no-cars-info" }>No cars to display, add some!</h3>}
            </div>

            {/* Modal currently causes a deprecation error if opened.
                This is a known issue which - as of now - has yet to be
                fixed. See https://github.com/react-bootstrap/react-bootstrap/issues/5075 
                TODO: Either find workaround or disable strict mode (not really an option imho) */}

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit car
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {show && <AddCarForm edit={ true } car={ selectedCar } onSave={ handleClose }/>}
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
