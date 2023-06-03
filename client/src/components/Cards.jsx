import React from 'react'
import { Container,Card, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
    <Row key={recommendations[idx][0]} className="my-4 ">
      <Col >
    <Card border = "secondary">
      <Card.Header>{recommendations[idx][1]}</Card.Header>
      <LinkContainer to = {`/movies/${idx}`} style = {{cursor: "pointer"}}>
      <Card.Body>
        <Card.Text>
        {recommendations[idx][2]}
        </Card.Text>
      
      </Card.Body>
    </LinkContainer>
    </Card>
    </Col>
    </Row> 
    ))}
  </Container>
);
  
}

export default Cards