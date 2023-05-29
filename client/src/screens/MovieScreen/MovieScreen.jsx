import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { Container, Row , Col, Form, Button} from 'react-bootstrap'
import '../MovieScreen/MovieScreen.css'
import Cards from '../../components/Cards'
import { toast } from 'react-toastify'
import { client } from "@gradio/client";
import movieTitles from './utils'



const MovieScreen = () => {
  
  const endpoint = "https://jyshbgde-cinescope.hf.space";
  
  const [movie, setMovie] = useState("")

  const [recommendations, setReccomendations] = useState("")
  
  const [movieTitlesList, setMovieTitlesList] = useState(movieTitles)
  

 
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
            <input type='search'
            list='movies'
              name='movies'
              placeholder="Enter movie name"
              className="me-2 movieInput"
              aria-label="Search"
              value={movie}
              onChange={(e)=>setMovie(e.target.value)}
              autoComplete='on'
            /> 

             <datalist id="movies" className='movieTitlesList'>
              
          {
           movieTitlesList.map((movie,index) => {
            return (
              <option value={movie} key={index} />
            )
           })
          }
          
</datalist>
            

            
            
           
           
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