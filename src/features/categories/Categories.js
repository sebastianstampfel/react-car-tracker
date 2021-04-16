import React, { useState } from 'react'
import { Button, Modal, Row, Col } from 'react-bootstrap'
import CategoryList from './CategoryList'
import AddCategoryForm from './AddCategoryForm'


const Categories = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="info" size="sm" className={ "manage-categories-button" } onClick={ handleShow }>
                Manage categories
            </Button>

            <Modal size="lg" show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Manage categories
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col>
                            <CategoryList />
                        </Col>
                        
                        <Col>
                            <AddCategoryForm />
                        </Col>
                    </Row>
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
        </div>
    )
}

export default Categories
