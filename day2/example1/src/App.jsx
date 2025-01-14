import React from 'react'
import "./App.css"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App