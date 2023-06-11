import React from 'react'
import Header from "../../components/Header";
import { Col, Container, Row } from 'react-bootstrap';
import './MovieScreen.css'
import { useLocation } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails';
import SimilarMovies from '../../components/SimilarMovies';
import MovieComments from '../../components/MovieComments';
import { useSelector } from 'react-redux';


const MovieScreen = () => {

  const {userInfo} = useSelector(state => state.auth)

  const location = useLocation()
  const movie = location.state

  return (
    <>
      <Header />
      <Container fluid className='movieScreen ' >
        <Row>
          <Col sm={12} md={6} className='my-2'>
            <MovieDetails movie={movie} />
          </Col>
          <Col sm={12} md={6} className='my-2' >
            <SimilarMovies movie={movie} />
          </Col>
        </Row>
        <Row className=' my-2'>

          {userInfo ? (
            <MovieComments movie={movie} />
          ) : ("")}
          
        </Row>
      </Container>
    </>
  )
}

export default MovieScreen