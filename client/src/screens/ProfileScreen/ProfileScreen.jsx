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
import FormInput from '../../components/FormInput';


const ProfileScreen = () => {
    const {userInfo} = useSelector((state) => state.auth);

    const [values, setValues] = useState(
        {
            name: userInfo.name,
            email: userInfo.email,
            password: "",
            confirmPassword: "",
           
        }
    )

    const inputs = [
        {
            id:1,
            name: "name",
            type : "text",
            placeholder: "Name",
            errorMessage:"Name should be 3-16 characters long and shouldn't include any special character",
            label: "Name",
            pattern: '[A-Za-z0-9]{3,16}$',
            required : true,
        },
        {
            id:2,
            name: "email",
            type : "email",
            placeholder: "Email",
            errorMessage:"It should be a valid email",
            label: "Email",
            required : true,
        },
        {
            id:3,
            name: "password",
            type : "password",
            placeholder: "Password",
            pattern: '[A-Za-z0-9]{8,16}$',
            errorMessage:"Password should be 8-16 characters long",
            label: "Password",
            required : true,
        },
        {
            id:4,
            name: "confirmPassword",
            type : "password",
            placeholder: "Confirm Password",
            pattern : values.password,
            errorMessage:"Passwords don't match",
            label: "Confirm Password",
            required : true,
        }
    ]
    const [movies, setMovies] = useState({
        movie0 : userInfo.movies['movie0'],
        movie1: userInfo.movies['movie1'],
        movie2: userInfo.movies['movie2']
    })

    const [movieTitlesList, setMovieTitlesList] = useState(movieTitles)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [updateProfile, {isLoading}] = useUpdateUserMutation();

  

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }



    const submitHandler = async (e) => {
        e.preventDefault();
        if(values.password !== values.confirmPassword)
        {
            toast.error('Passwords do not match')

        } 
        else
        {
            try {
                const res = await updateProfile({
                    _id: userInfo._id,
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    movies: movies,
                }).unwrap()

                dispatch(setCredentials({...res}))
                navigate('/profile') 
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
            {
                inputs.map((input) => (
                    <FormInput
                    key={input.id} 
                    label = {input.label}
                    {...input}
                     value = {values[input.name]} 
                     onChange={onChange}
                     />
                ))}
              
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