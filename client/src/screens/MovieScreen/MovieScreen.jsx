import React from 'react'
import Header from "../../components/Header";
import { Col, Container, Row } from 'react-bootstrap';
import './MovieScreen.css'
import { useLocation } from 'react-router-dom';

const MovieScreen = () => {

  const location = useLocation()
  const movie = location.state
 
  return (
    <>
    <Header/>
    <Container className='movieScreen ' >
    <Container className='movieContainer my-2 ' >
      <Row className='movieTitleRow'>
        <Col>
        <h1 style={{borderBottom: '2px solid #636464'}}>{movie.movieTitle}</h1>
        </Col>  
      </Row>
      <Row className='pt-2'>
      <Col>
        <p><span style = {{color: "#ff6f00", fontWeight:'bold'}}>Genres: </span>{movie.genres.map((genre,index) => (
          <span key ={index}>{genre} </span>
        ))}
        </p>
        </Col>  
      </Row>
      <Row >
      <Col >
      <p><span style = {{color: "#ff6f00", fontWeight:'bold'}}>Casts: </span>{movie.casts.map((cast, index) => (
          <span key = {index}>{cast} </span>
        ))}
        </p>
        </Col>
        </Row>
        <Row>
        <Col>
        <p><span style = {{color: "#ff6f00", fontWeight:'bold'}}>Director:</span> {movie.director[0]}</p>
        </Col>    
      </Row>
      <Row>
      <Col>
        <p style={{borderTop:'2px solid #636464'}}>{movie.overview}</p>
        </Col>  
      </Row>
    </Container>
    </Container>
    </>
  )
}

export default MovieScreen