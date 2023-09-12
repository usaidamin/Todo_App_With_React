import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const MyNavbar = () => {
  return (
    <>
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className='text-light'>TODO APP</Navbar.Brand>
        </Container>
    </Navbar>
    </>
  )
}

export default MyNavbar
