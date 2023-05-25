import React from 'react';
import { Container, Card, Button, Row, Col, Stack } from 'react-bootstrap';
import '../HomeScreen/HomeScreen.css'
import { LinkContainer } from 'react-router-bootstrap';
const HomeScreen = () => {
  return (



    <Container className='hero' fluid >
      <Container>
      <Row >
        <Col>
          <h1>
            Discover Your Next Movie Masterpiece
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Welcome to CineScope, where cinematic wonders await! Prepare to be captivated, inspired, and entertained as we guide you through a vast universe of films, tailored to your unique tastes and preferences.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
        <LinkContainer to="/login" >
          <span >
          <Button variant="success"  >Log In</Button>
          </span>
          </LinkContainer>
          <LinkContainer to="/signup" >
          <span >
          <Button variant="success" className='m-2'>Sign Up</Button>
          </span>
          </LinkContainer>
        </Col>
      </Row>

    </Container>
    </Container>


  )
}

export default HomeScreen