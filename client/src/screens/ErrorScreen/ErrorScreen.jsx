import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import './ErrorScreen.css'
import Header from '../../components/Header';

const ErrorScreen = () => {
  return (
    <>
    <Header/>
    <Container fluid className='errorScreen'>
        <Row>
            <Col>
            <h1>Error 404: Not Found</h1>
            <LinkContainer to = '/'>
        <div>
        <p>Click here to go to home page</p>
        </div>
        </LinkContainer>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default ErrorScreen