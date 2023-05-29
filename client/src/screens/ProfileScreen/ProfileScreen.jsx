import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';
import '../SignUpScreen/SignUpScreen.css'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import { useUpdateUserMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import Header from '../../components/Header';
import movieTitles from '../MovieScreen/utils';


const ProfileScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [movies, setMovies] = useState({
        movie0 : "",
        movie1: "",
        movie2: ""
    })

    const [movieTitlesList, setMovieTitlesList] = useState(movieTitles)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {userInfo} = useSelector((state) => state.auth);
    const [updateProfile, {isLoading}] = useUpdateUserMutation();

    useEffect(()=> {
        setName(userInfo.name)
        setEmail(userInfo.email)
        setMovies(userInfo.movies)
    }, [userInfo.email, userInfo.name, userInfo.movies]);



    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword)
        {
            toast.error('Passwords do not match')

        } 
        else
        {
            try {
                const res = await updateProfile({
                    _id: userInfo._id,
                    name,
                    email,
                    password,
                    movies,
                }).unwrap()

                dispatch(setCredentials({...res}))
                toast.success('Profile Update');
            } catch (err) {
                toast.error(err?.data?.message || err?.error)
            }
        }

    }
    return (
        <>
      
        <Header/>

        
        <FormContainer>
            <h1>Update Profile</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId='name' >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                       type = 'text'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password again'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='my-2' >
                    <Form.Label>Your top three movies</Form.Label>
                    <input 
                    list='movie0'
                    name='movie0'
                    className='mt-2 movieinput' 
                      
                      autoComplete='on'
                        placeholder='Enter movie name'
                        value={movies.movie0}
                        onChange={(e) => setMovies({
                            movie0: e.target.value,
                            movie1: movies.movie1,
                            movie2: movies.movie2
                            })}/>
                    
             <datalist id="movie0" className='movieTitlesList'>
              
              {
               movieTitlesList.map((movie,index) => {
                return (
                  <option value={movie} key={index} />
                )
               })
              }
              
    </datalist>
                    <input
                    list = "movie1"
                    name = "movie1"
                    key = "movie1"
                    className='mt-2 movieinput'
                     autoComplete='on'
                        placeholder='Enter movie name'
                        value={movies.movie1}
                        onChange={(e) => setMovies({
                            movie0: movies.movie0,
                            movie1: e.target.value,
                            movie2: movies.movie2
                            })} />
                                    
             <datalist id="movie1" className='movieTitlesList'>
              
              {
               movieTitlesList.map((movie,index) => {
                return (
                  <option value={movie} key={index} />
                )
               })
              }
              
    </datalist>
                    <input
                    list = "movie2"
                    name = "movie2"
                    key = "movie2"
                    className='mt-2 movieinput'
                     autoComplete='on'
                        placeholder='Enter movie name'
                        value={movies.movie2}
                        onChange={(e) => setMovies({
                            movie0: movies.movie0,
                            movie1: movies.movie1,
                            movie2: e.target.value,
                            })}/>
                                    
             <datalist id="movie2" className='movieTitlesList'>
              
              {
               movieTitlesList.map((movie,index) => {
                return (
                  <option value={movie} key={index} />
                )
               })
              }
              
    </datalist>
                    
                    
                </Form.Group>
                      
                <Button type='submit' variant = 'success' className='m-2'>
                Update 
                </Button>

                
            </Form>
        </FormContainer>
        
        </>
    )
}

export default ProfileScreen