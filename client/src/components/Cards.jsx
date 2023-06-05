import React from 'react'
import { Container,Card, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Cards = ({recommendations}) => {



  const {userInfo} = useSelector((state) => state.auth);
  let length = 0

   async function handleUnlike(e, movieId){
      const response = await fetch("/api/users/movies/unlike", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({movieId : movieId})
      });

      const data = await response.json()
      console.log(data)
  }

  async function handleLike(e, movieId)
  {
    const response = await fetch("/api/users/movies/like", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({movieId : movieId})
    });

    const data = await response.json()
    console.log(data)
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
          {/* <span>{userInfo ?
        (
          userInfo.likedMovies.includes(recommendations[idx][0]) ?
          (
            <AiFillHeart onClick={(e)=>handleUnlike(e, recommendations[idx][0])}/>

          ) :
         
          
          (  <AiOutlineHeart onClick = {(e)=>handleLike(e, recommendations[idx][0])}/>)
          )
          : ("")}</span> */}
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

// movieId, movieTitle, overview, genres, cast , director