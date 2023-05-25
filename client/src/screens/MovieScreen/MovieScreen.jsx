import React, { useState } from 'react'
import Header from '../../components/Header'
import { Container, Row , Col, Form, Button} from 'react-bootstrap'
import '../MovieScreen/MovieScreen.css'
import Cards from '../../components/Cards'
import { toast } from 'react-toastify'
import { client } from "@gradio/client";


const MovieScreen = () => {
  
  const endpoint = "https://jyshbgde-cinescope.hf.space";
  
  const [movie, setMovie] = useState("")
  const [recommendations, setReccomendations] = useState("")
  const submitHandler = async (e) => {
    
    e.preventDefault()
  
    const app = await client(endpoint);
    const result = await app.predict("/predict", [movie]);
      setReccomendations(result.data[0])
     

        }
        
        
        
        
      
    
    
   
  

  return (
    <>
 
    <Header/>
    <Container fluid className='pt-2 movieScreen' >
        <Row>
            <Col>
            <Form className="d-flex" onSubmit={submitHandler}>
            <Form.Control
              type="search"
              placeholder="Enter movie name"
              className="me-2"
              aria-label="Search"
              value={movie}
              onChange={(e)=>setMovie(e.target.value)}
            />
            <Button type='submit' variant="outline-light">Search</Button>
          </Form>
            </Col>
        </Row>
    </Container>
    <Container fluid className='cardContainer'>

    <Cards recommendations = {recommendations}/>
    </Container>
 
    </>
  )
}

export default MovieScreen