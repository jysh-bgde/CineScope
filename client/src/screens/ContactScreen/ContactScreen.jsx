import React, { useState } from 'react'
import Header from '../../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './ContactScreen.css'
import {SiGmail} from 'react-icons/si';
import {FaTwitter} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';

const ContactScreen = () => {
   


   

  return (
    <>
    <Header/>
    <Container className='contactScreen my-2 py-2'>
        <Row>
            <Col>
           
            <h1><a className='feedbackForm' target= "_blank" href = "https://forms.gle/1eRTa8nWwgtvW8bt5"> Click here to give feedback</a></h1>
           
            </Col>
        </Row>
        <Row  >
            <Col >
               <a target="_blank" href="https://www.instagram.com/jayeshbagde/" className = "instagramConnect connect" >
               <AiFillInstagram size={25}/>Instagram 
               </a>
            </Col>
            <Col >
            <a href="https://twitter.com/CineScope420" target="_blank" className = "twitterConnect connect">
               <FaTwitter size={25}/>Twitter 
               </a>
            </Col>
            <Col  >
            <a href = "mailto: cinescope420@gmail.com" className = "gmailConnect connect"><SiGmail size={25}/> Email</a>
            </Col>
            
        </Row>
    </Container>
    </>
  )
}

export default ContactScreen