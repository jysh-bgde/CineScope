import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { Container, Row , Col, Form, Button} from 'react-bootstrap'
import '../MovieScreen/MovieScreen.css'
import Cards from '../../components/Cards'
import { toast } from 'react-toastify'
import { client } from "@gradio/client";
import movieTitles from './utils'
import { useSelector } from 'react-redux'
import Search from '../../components/Search'



const MovieScreen = () => {
  
  const {userInfo} = useSelector((state) => state.auth);
 
  const endpoint = "https://jyshbgde-cinescope.hf.space";
  
  const [movie, setMovie] = useState( "" )

  const [recommendations, setReccomendations] = useState([])
  
  const [movieTitlesList, setMovieTitlesList] = useState(movieTitles)
  
 
 
  useEffect(() => {
   
    async function fetchRecommendations()
    {
      const app = await client(endpoint);
      var result0 = await app.predict("/predict", [userInfo.movies['movie0']]);
      result0 = result0.data[0]
      var result1 = await app.predict("/predict", [userInfo.movies['movie1']]);
      result1 = result1.data[0]
      var result2 = await app.predict("/predict", [userInfo.movies['movie2']]);
      result2 = result2.data[0]
     
   

  for (let i = 0; i < result0.length; i++) {
    
    if(result0[i][0] == "Check movie name again")
    {
      result0.splice(i, 1);
    }
    
    
  }
  for (let i = 0; i < result1.length; i++) {
    
    if(result1[i][0] == "Check movie name again")
    {
      result1.splice(i, 1);
    }
    
    
  }
  for (let i = 0; i < result2.length; i++) {
    
    if(result2[i][0] == "Check movie name again")
    {
      result2.splice(i, 1);
    }
    
    
  }
   
  var results = []
      
  results = result0.concat(result1, result2)

  let uniqueArray = Array.from(new Set(results.map(JSON.stringify)), JSON.parse);

  setReccomendations(uniqueArray)
    
    
    
   
   
 
      
     
    } 
    
    fetchRecommendations()

     
    
    
  }, [])
  





 
  const submitHandler = async (e) => {
    
    e.preventDefault()
  
    const app = await client(endpoint);
    const result = await app.predict("/predict", [movie]);
      setReccomendations(result.data[0])
     

        }
        
        
        
        
      
    
    
   
  

  return (
    <>
 
    <Header/>
    <Search profileRecommendations={recommendations}/>
    {/* <Container fluid className='pt-2 movieScreen' >
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
    </Container> */}
 
    </>
  )
}

export default MovieScreen