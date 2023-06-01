import React from 'react'
import { Container,Card, Col, Row } from 'react-bootstrap';

const Cards = ({recommendations}) => {
  let length = 0
  if(recommendations)
  {
    length=recommendations.length
  }
  else
  {
    length = 0
  }
  return (
    <Container>
     
    {Array.from({ length: length }).map((_, idx) => (
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