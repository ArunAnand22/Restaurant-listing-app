import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/242/242452.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        Blueberry Cafe
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header