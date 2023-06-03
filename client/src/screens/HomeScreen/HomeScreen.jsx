import React, {useState} from 'react';
import { Container, Card, Button, Row, Col, Stack, Form } from 'react-bootstrap';
import '../HomeScreen/HomeScreen.css'
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../../components/Header'
import movieTitles from '../RecommendationsScreen/utils'
import Cards from '../../components/Cards'
import { client } from "@gradio/client";
import Search from '../../components/Search';


const HomeScreen = () => {
  
  const [movie, setMovie] = useState( "" )

  const [recommendations, setReccomendations] = useState([])
  
  const [movieTitlesList, setMovieTitlesList] = useState(movieTitles)

  const endpoint = "https://jyshbgde-cinescope.hf.space";

  

  const submitHandler = async (e) => {
    
    e.preventDefault()
  
    const app = await client(endpoint);
    const result = await app.predict("/predict", [movie]);
      setReccomendations(result.data[0])
  }
        
  
  
  
  return (
    <>



    <Header/>
    <Container className='hero' fluid >
      <Container>
      <Row >
        <Col>
          <h1 style={{color: "#ff6f00", fontWeight: "bold"}}>
            Discover Your Next Movie Masterpiece
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Welcome to CineScope, where cinematic wonders await! Prepare to be captivated, inspired, and entertained as we guide you through a vast universe of films, tailored to your unique tastes and preferences.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
        <LinkContainer to="/login" >
          <span >
          <Button variant="one" >Log In</Button>
          </span>
          </LinkContainer>
          <LinkContainer to="/signup" >
          <span >
          <Button variant="two" className='m-2'>Sign Up</Button>
          </span>
          </LinkContainer>
        </Col>
      </Row>

    </Container>
    </Container>
    <Search/>
    </>
  )
}

export default HomeScreen