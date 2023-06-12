import React, { useState, useEffect } from 'react'
import Header from "../../components/Header";
import { Col, Container, Row } from 'react-bootstrap';
import './MovieScreen.css'
import { useLocation } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails';
import SimilarMovies from '../../components/SimilarMovies';
import MovieComments from '../../components/MovieComments';
import { useSelector } from 'react-redux';
import axios from 'axios'
import {toast} from 'react-toastify'



const MovieScreen = () => {

  const {userInfo} = useSelector(state => state.auth)

  const location = useLocation()
  const movie = location.state


  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  // const [loadingComments, setLoadingComments] = useState(true)
  const [likesCount, setLikesCount] = useState(0)


  useEffect(() => {

      async function loadComments() {
          try {
              const response = await axios.post(`/api/movies/${movie.movieId}/movieComments`, {movie: movie})
              // console.log(32, response)
              const comments = response.data.comments
              setLikesCount(response.data.likes.length)
              setComments(comments)
              // console.log(comments)
              //no comments is also ok
              // setLoadingComments(false)

          } catch (err) {
            // console.log(err)
              // setLoadingComments(false)
              toast.error(err?.data?.message || err?.error)
          }
      }

      loadComments()

      return () => {
          setComment("")
         
      }

  }, [movie.movieId])






  return (
    <>
      <Header />
      <Container fluid className='movieScreen ' >
        <Row>
          <Col sm={12} md={6} className='my-2'>
            <MovieDetails movie={movie} likesCount = {likesCount}  setLikesCount={setLikesCount}/>
          </Col>
          <Col sm={12} md={6} className='my-2' >
            <SimilarMovies movie={movie} />
          </Col>
        </Row>
        <Row className=' my-2'>

          {userInfo ? (
            <MovieComments movie={movie} comments = {comments} setComment={setComment} setComments={setComments} />
          ) : ("")}
          
        </Row>
      </Container>
    </>
  )
}

export default MovieScreen