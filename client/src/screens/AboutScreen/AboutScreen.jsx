import React from 'react'
import './AboutScreen.css'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
const AboutScreen = () => {
    return (
        <>  
            <Header/>
            <Container className='aboutScreen'>
                <Row>
                    <Col>
                        <h1 ><span style={{borderBottom: '2px solid #636464'}}> About Us </span></h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Welcome to CineScope, your go-to destination for personalized movie recommendations! We are a passionate team of film enthusiasts dedicated to revolutionizing the way you discover and enjoy movies.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1> <span style={{borderBottom: '2px solid #636464'}}>Our Story</span></h1>
                        <p>
                            The idea for Cinescope was born out of a shared love for cinema and a desire to simplify the movie-watching experience. We realized that with the vast number of movies available today, finding the perfect film that aligns with your unique preferences can be a daunting task. That's why we set out to create an app that takes the guesswork out of movie recommendations and helps you find the films you'll love effortlessly.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h1><span style={{borderBottom: '2px solid #636464'}}> Our Mission</span></h1>
                        <p>
                            At CineScope, our mission is to empower movie lovers by delivering personalized movie recommendations that truly resonate. We believe that everyone should have access to tailored film suggestions that cater to their individual tastes, whether they're passionate about classic films, indie gems, or the latest blockbusters. We are dedicated to making your movie nights memorable, exciting, and filled with cinematic wonders.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h1><span style={{borderBottom: '2px solid #636464'}}> How it Works</span></h1>
                        <p>
                            Using cutting-edge algorithms and machine learning techniques, CineScope analyzes your movie preferences, including genres, actors, directors, and more. Our advanced recommendation engine then generates a curated list of movies that perfectly align with your unique taste. Say goodbye to endless scrolling and hello to a personalized movie discovery experience that brings you closer to films that truly captivate you.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h1><span style={{borderBottom: '2px solid #636464'}}> Features and Benefits</span></h1>
                       
                        <ListGroup >
      <ListGroup.Item variant = "light"><span style={{fontWeight: "bold", color: "#ff6f00" }}>Personalized Recommendations:</span> Discover movies tailored to your specific preferences, ensuring that every film you watch is a delightful experience.</ListGroup.Item>
      <ListGroup.Item variant = "light"> <span style={{fontWeight: "bold", color: "#ff6f00" }}>Extensive Movie Library: </span>Explore a vast collection of movies spanning various genres, decades, and languages, including hidden gems and timeless classics.</ListGroup.Item>
      <ListGroup.Item variant = "light"> <span style={{fontWeight: "bold", color: "#ff6f00" }}>User Community:</span> Connect with a thriving community of film enthusiasts, share recommendations, and engage in lively discussions about your favorite movies.</ListGroup.Item>
      <ListGroup.Item variant = "light"> <span style={{fontWeight: "bold", color: "#ff6f00" }}>Watchlist and Ratings: </span> Create a personal watchlist to keep track of movies you want to watch, and rate films to help improve future recommendations.</ListGroup.Item>
 
    </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1><span style={{borderBottom: '2px solid #636464'}}> Join CineScope Today</span></h1>
                        <p>
                        We invite you to <Link to = '/signup' style = {{textDecoration: "none"}}><span style = {{fontWeight: "bold", color: "#ff6f00"}}>JOIN </span></Link> our ever-growing community of movie lovers and unlock a world of cinematic wonders with CineScope. Whether you're seeking a heartwarming drama, an adrenaline-pumping action flick, or an intellectually stimulating indie film, we have something for everyone. Start your personalized movie journey today and experience the magic of CineScope.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>
                    Lights, camera, and let the movie magic begin!
                    </p>
                    <p>
                    The <span style = {{fontWeight: "bold", color: "#ff6f00"}}>CineScope </span> Team
                    </p>
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default AboutScreen