import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div>
        <Card className="text-center bg-dark">
      <Card.Header>Address</Card.Header>
      <Card.Body>
        <Card.Title>Trivandrum,Kerala</Card.Title>
        <Card.Text>
          Monday-Saturday 9:30am-8:30pm, Sunday Holiday
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-light">Copyright © 2023 Blueberry Cafe. All Rights Reserved</Card.Footer>
    </Card>
    </div>
  )
}

export default Footer