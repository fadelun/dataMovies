import React from "react";
import {Modal, Button, Row, Col, Image} from 'react-bootstrap';


const ModalMovie = ({showModal, title,year,genre,poster, director, handleClose}) => {
    if(title){
        return(
            <Modal size="lg" show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Row>
                     <Col className="p-5">
                          <Image src={poster} rounded />
                    </Col>
                    <Col>
                        <Modal.Body className="col">
                    <ul>
                        <li>{year}</li>
                        <li>{genre}</li>
                        <li>{director}</li>
                    </ul>
                        </Modal.Body>
                    </Col>
                </Row>
               
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
    else{
        return(
            <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        )
    }
}

export default ModalMovie;

