import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen/HomeScreen.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <ToastContainer/>


    <Outlet />
    </>
  )
}

export default App