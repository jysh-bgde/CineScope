import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLikeMovieMutation, useUnlikeMovieMutation} from '../slices/usersApiSlice';
import { Col, Container, Row} from 'react-bootstrap';
import { AiOutlineHeart , AiFillHeart } from 'react-icons/ai';
import { setCredentials } from '../slices/authSlice'
import {toast} from 'react-toastify'
const MovieDetails = ({ movie, likesCount , setLikesCount}) => {
    const {userInfo} = useSelector((state) => state.auth);
  const dispatch = useDispatch()

   

    const [unlikeMovie] = useUnlikeMovieMutation()
    const [likeMovie] = useLikeMovieMutation()

    async function handleUnlike(e, movie){
        e.preventDefault()
        try {
          
          const response = await unlikeMovie({
            movie : movie
          }).unwrap();
          dispatch(setCredentials({...response}))
          setLikesCount(prev => prev-1)
          navigate('/movies') 
          
          toast.success("movie unliked")
        } catch (err) {
          toast.error(err?.data?.message || err?.error)
        }
    
      
      }
      async function handleLike(e, movie)
      {
        e.preventDefault()
        
        try {
       
          const response = await likeMovie({
            movie : movie
          }).unwrap();
          setLikesCount(prev => prev+1)

          dispatch(setCredentials({...response}))
        
          
          navigate('/movies') 
          toast.success("movie liked")
        } catch (err) {
          toast.error(err?.data?.message || err?.error)
        }
      }

  return (
    <>
    <Container className='movieContainer my-2 ' >
      <Row className='movieTitleRow'>
        <Col>
        <h1 style={{borderBottom: '2px solid #636464'}}>{movie.movieTitle} </h1>
        <span style={{cursor: "pointer"}}>{userInfo ?
        (
          userInfo.likedMovies?.includes(movie.movieId) ?
          ( <>
          <AiFillHeart  color='red'  onClick={(e)=>handleUnlike(e, movie)}/>
          <span> {likesCount}</span>
          </>
            

          ) :
         
          
          ( 
              <>
            <AiOutlineHeart color='red' onClick = {(e)=>handleLike(e, movie)}/>
            <span>{likesCount}</span>
            </>
            )
        )
          : ("")}</span>
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
    </>
  )
}

export default MovieDetails