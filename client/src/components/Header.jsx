import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';
import '../components/Header.css'
const Header = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>

    <style type = "text/css">
      {`
      .navbar-brand
      {
        color: #ff6f00;
        font-weight: bold
      }

      .btn-one {
        background-color: #ff6f00;
        color: #f9f7f8;
       
      }
      .btn-two {
        background-color: #f9f7f8 ;
        color: #ff6f00;
      
      }
      .btn-one:hover, .btn-two:hover
      { background-color: black;
        border: 1px solid white
      }
      .card-header{
        color: #ff6f00;
        font-weight: bold;
        border-bottom: 1px solid rgb(255 255 255 / 82%);
      }
      .nav-link
      {
        color: white
      }
      `}
    </style>


    <header className='header'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
        <Container>
          <LinkContainer to='/movies'>
            <Navbar.Brand className='logo' >CineScope</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>

              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item > Profile </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/about">
                      <NavDropdown.Item > About us </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                      <NavDropdown.Item > Contact Us </NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item onClick={logoutHandler}> Logout</NavDropdown.Item>
                  </NavDropdown>

                </>
              ) : (
                <>
                  <NavDropdown title={"Hello"} >
                    <LinkContainer to="/about">
                      <NavDropdown.Item > About us </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                      <NavDropdown.Item > Contact Us </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </>
  )
}

export default Header