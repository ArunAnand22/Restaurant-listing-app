import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function RestCard(props) {
  return (
            <Col sm={12} md={6} lg={4} xl={3}>
                <Link to={`viewrest/${props.data.id}`} style={{textDecoration:'none'}}>
            <Card className='p-3 m-2'>
      <Card.Img className='p-3' variant="top" src={props.data.photograph} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
          {props.data.neighborhood}<br/>
          {props.data.address}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
 </Col>
  )
}

export default RestCard