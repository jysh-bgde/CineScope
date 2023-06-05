import React, {useEffect, useState} from 'react'
import Header from "../../components/Header";
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import './MovieScreen.css'
import { useLocation } from 'react-router-dom';
import { client } from "@gradio/client";
import { LinkContainer } from 'react-router-bootstrap';
import { AiOutlineHeart , AiFillHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';



const MovieScreen = () => {
  const {userInfo} = useSelector((state) => state.auth);

  const location = useLocation()
  const movie = location.state
  const endpoint = "https://jyshbgde-cinescope.hf.space";
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loadingSimilarMovies, setLoadingSimilarMovies] = useState(false)

  useEffect(() => {
    setLoadingSimilarMovies(true)
    async function moreRecommendations(){
      
      const app = await client(endpoint);
      const result = await app.predict("/predict", [movie.movieTitle]);
      
      setSimilarMovies(result.data[0])
      setLoadingSimilarMovies(false)
      
    }
    moreRecommendations()
    
  },[movie.movieTitle])
  
  
  return (
    <>
    <Header/>
    <Container  fluid className='movieScreen ' >
      <Row>
        
        <Col>
        
    <Container className='movieContainer my-2 ' >
      <Row className='movieTitleRow'>
        <Col>
        <h1 style={{borderBottom: '2px solid #636464'}}>{movie.movieTitle} </h1>
        
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
        </Col>
        <Col>
        
        <Container className='similarMoviesContainer my-2' >
{loadingSimilarMovies ? (<Row>
  <Col style={{color: "#ff6f00", fontWeight: "bold"}}>
  <h2>Loading similar movies...</h2>
  </Col>
</Row>): (<><Row style={{borderBottom: "2px solid rgb(99, 100, 100)"}}>
  <Col style={{color: "#ff6f00", fontWeight: "bold"}}>
  <h2>Similar Movies:</h2>
  </Col>
  </Row>

  {similarMovies.map((similarMovie, index)=>{
    return (<LinkContainer key={similarMovie[0]} style = {{height: "auto", cursor: "pointer", borderBottom: (index===4) ? ("") : ("2px solid rgb(99, 100, 100)")}} to={`/movies/${similarMovie[0]}`} state={{
      movieId: similarMovie[0],
      movieTitle: similarMovie[1],
      overview: similarMovie[2],
      genres: similarMovie[3],
      casts: similarMovie[4],
      director: similarMovie[5],
    }}><Row >
        <Col>
        {similarMovie[1]}
        </Col>
      </Row></LinkContainer>)
  })}
  </>
 
                
             )}
          
        
      
    </Container>
        </Col>
        </Row>
    
    </Container>
    
    </>
  )
}

export default MovieScreen