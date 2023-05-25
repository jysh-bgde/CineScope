import React from 'react'
import { Container,Card, Col, Row } from 'react-bootstrap';

const Cards = ({recommendations}) => {
  
  return (
    <Container>
      {/* <Row xs={1} md={2} className="g-4">
    {Array.from({ length: recommendations.length }).map((_, idx) => (
      <Col key={idx}>
        <Card border='secondary' >
          
          <Card.Body>
            <Card.Title>{recommendations[idx][0]}</Card.Title>
            <Card.Text>
              {recommendations[idx][1]}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
    </Row> */}
    {Array.from({ length: recommendations.length }).map((_, idx) => (
    <Row key={idx} className="my-4 ">
      <Col >
    <Card border = "secondary">
      <Card.Header>{recommendations[idx][0]}</Card.Header>
      <Card.Body>
        <Card.Text>
        {recommendations[idx][1]}
        </Card.Text>
      
      </Card.Body>
    </Card>
    </Col>
    </Row> 
    ))}
  </Container>
);
  
}

export default Cards