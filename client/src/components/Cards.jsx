import React from 'react'
import { Container,Card, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useUnlikeMovieMutation, useLikeMovieMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import {toast} from 'react-toastify'

const Cards = ({recommendations}) => {



  const {userInfo} = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const [unlikeMovie] = useUnlikeMovieMutation()
  const [likeMovie] = useLikeMovieMutation()
  let length = 0

   async function handleUnlike(e, movieId){
    e.preventDefault()
    try {

      const response = await unlikeMovie({
        movieId : movieId
      }).unwrap();
      dispatch(setCredentials({...response}))
      navigate('/movies') 

      toast.success("movie unliked")
    } catch (err) {
      toast.error(err?.data?.message || err?.error)
    }

      // const data = await response.json()
      // console.log(data)
  }

  async function handleLike(e, movieId)
  {
    e.preventDefault()
    try {
   
      const response = await likeMovie({
        movieId : movieId
      }).unwrap();
      console.log(response)
      dispatch(setCredentials({...response}))
    
      navigate('/movies') 
      toast.success("movie liked")
    } catch (err) {
      toast.error(err?.data?.message || err?.error)
    }

      // const data = await response.json()
      // console.log(data)
  }
  
  if(recommendations && recommendations.length > 1)
  { 
   
    length=recommendations.length
   

    return (
      <Container >
       
      {Array.from({ length: length }).map((_, idx) => (
      <Row key={recommendations[idx][0]} className="my-4 " >
        <Col >
      <Card >
        <Card.Header style = {{borderBottom: '2px solid #636464'}}  >
          {recommendations[idx][1]} 
          <span>{userInfo ?
        (
          userInfo.likedMovies?.includes(recommendations[idx][0]) ?
          (
            <AiFillHeart color='red' onClick={(e)=>handleUnlike(e, recommendations[idx][0])}/>

          ) :
         
          
          (  <AiOutlineHeart color='red' onClick = {(e)=>handleLike(e, recommendations[idx][0])}/>)
        )
          : ("")}</span>
        </Card.Header>
      
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
