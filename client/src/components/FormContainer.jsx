import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const FormContainer = ({children}) => {
  return (

    <Container fluid className='formContainer'>
        <Row className='justify-content-md-center '>
            <Col xs = {12} md = {6} className='card p-5'>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default FormContainer