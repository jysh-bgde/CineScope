import React from 'react'
import { Container,Card, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Cards = ({recommendations}) => {
  let length = 0
  
  if(recommendations && recommendations.length > 1)
  { 
   
    length=recommendations.length
   

    return (
      <Container >
       
      {Array.from({ length: length }).map((_, idx) => (
      <Row key={recommendations[idx][0]} className="my-4 " >
        <Col >
      <Card >
        <Card.Header style = {{borderBottom: '2px solid #636464'}}>{recommendations[idx][1]}</Card.Header>
        <LinkContainer to = {`/movies/${recommendations[idx][0]}`} style = {{cursor: "pointer"}} state = {{
          movieId: recommendations[idx][0],
          movieTitle: recommendations[idx][1],
          overview: recommendations[idx][2],
          genres: recommendations[idx][3],
          casts: recommendations[idx][4],
          director: recommendations[idx][5],
        }}>
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
  else
  {
    
    return ("")
  }
 
  
}

export default Cards

// movieId, movieTitle, overview, genres, cast , director