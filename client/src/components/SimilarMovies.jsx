import React, {useEffect, useState} from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { client } from "@gradio/client";

const SimilarMovies = ({movie}) => {

    const [similarMovies, setSimilarMovies] = useState([]);
    const endpoint = "https://jyshbgde-cinescope.hf.space";

    const [loadingSimilarMovies, setLoadingSimilarMovies] = useState(false)

    useEffect(() => {
        setLoadingSimilarMovies(true)
        async function moreRecommendations(){
      
            const app = await client(endpoint);
            const result = await app.predict("/predict", [movie.title]);
            
            setSimilarMovies(result.data[0])
            setLoadingSimilarMovies(false)
            
          }
          moreRecommendations()
    
      
    }, [movie.title])
    

  return (
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
    return (<LinkContainer key={similarMovie._id} style = {{height: "auto", cursor: "pointer", borderBottom: (index===4) ? ("") : ("2px solid rgb(99, 100, 100)")}} to={`/movies/${similarMovie._id}`} state={similarMovie}><Row>
        <Col className='similarMovie'>
        {similarMovie.title}
        </Col>
      </Row></LinkContainer>)
  })}
  </>
 
                
             )}
          
        
      
    </Container>
    )
}

export default SimilarMovies