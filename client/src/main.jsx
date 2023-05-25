import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import HomeScreen from './screens/HomeScreen/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen/LoginScreen.jsx'
import SignUpScreen from './screens/SignUpScreen/SignUpScreen.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import MovieScreen from './screens/MovieScreen/MovieScreen.jsx'
import ErrorScreen from './screens/ErrorScreen/ErrorScreen.jsx'
import ContactScreen from './screens/ContactScreen/ContactScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = { <App/>}>
      <Route path="/" element = {<HomeScreen/>} index = {true}/>
      <Route path="/login" element = {<LoginScreen/>} />
      <Route path="/signup" element = {<SignUpScreen/>} />
      <Route path="*" element = {<ErrorScreen/>} />

      <Route path = '' element = {<PrivateRoute/>} >
      <Route path="/movies" element = {<MovieScreen/>} />
      <Route path="/contact" element = {<ContactScreen/>} />
      <Route path="/profile" element = {<ProfileScreen/>} />
      </Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
  </Provider>
)
