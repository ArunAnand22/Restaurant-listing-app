import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop(props) {
console.log(props.operate);//display the time

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="light" onClick={handleShow}>
      Working Hours
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Working Hours</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <ListGroup>
      <ListGroup.Item>Monday : {props.operate.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {props.operate.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {props.operate.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday : {props.operate.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday : {props.operate.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday : {props.operate.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday : {props.operate.Sunday}</ListGroup.Item>
      
      </ListGroup>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Restop