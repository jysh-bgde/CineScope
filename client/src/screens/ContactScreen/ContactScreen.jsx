import React, { useState } from 'react'
import Header from '../../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './ContactScreen.css'
const ContactScreen = () => {
   


   

  return (
    <>
    <Header/>
    <Container className='contactScreen'>
        <Row>
            <Col>
           
            <a className='feedbackForm' target= "_blank" href = "https://forms.gle/1eRTa8nWwgtvW8bt5"> Click here to give feedback</a>
           
            </Col>
        </Row>
        <Row  >
            <Col >
               <a target="_blank" href="https://www.instagram.com/jayeshbagde/" className = "instagramConnect connect" >
               <img
               src='insta.svg'
               alt= 'instagram icon'
               />Instagram 
               </a>
            </Col>
            <Col >
            <a href="https://twitter.com/CineScope420" target="_blank" className = "twitterConnect connect">
               <img
               src='twitter.svg'
               alt= 'twitter icon'
               />Twitter 
               </a>
            </Col>
            
            
        </Row>
    </Container>
    </>
  )
}

export default ContactScreen