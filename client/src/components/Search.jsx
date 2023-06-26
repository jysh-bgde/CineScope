import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import movieTitles from '../screens/RecommendationsScreen/utils'
import Cards from './Cards'
import { client } from "@gradio/client";


const Search = (props) => {
    const [movie, setMovie] = useState("")
    const [recommendations, setReccomendations] = useState([])
    const [movieTitlesList, setMovieTitlesList] = useState(movieTitles)
    const [loading, setLoading] = useState(false)
    
  const endpoint = "https://jyshbgde-cinescope.hf.space";

  

    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
      
        const app = await client(endpoint);
        const result = await app.predict("/predict", [movie]);
        
        setReccomendations(result.data[0])

          setLoading(false)
      }
            
  

  return (
    <>
    <Container fluid className='pt-2 ' >
    <Row >
        <Col >
        <Form className="d-flex" onSubmit={submitHandler}>
        <input type='search'
        list='movies'
          name='movies'
          placeholder="Enter movie name"
          className="me-2 movieInput"
          aria-label="Search"
          value={movie}
          onChange={(e)=>setMovie( e.target.value)}
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
        <Button type='submit' variant="one">Search</Button>
      </Form>
        </Col>
    </Row>
</Container>

{loading ? (<h1 style={{color: 'white'}}>Loading recommendations</h1>) : (<Container fluid className='cardContainer'>

<Cards recommendations = {(movie==="") ? (props.profileRecommendations):(recommendations) }/>
</Container>)}
 
 </>
  )
}

export default Search