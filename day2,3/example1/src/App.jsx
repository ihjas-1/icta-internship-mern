import React from 'react'
import "./App.css"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Counter from './components/Counter'
import WelcomeNew from './components/WelcomeNew'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/welcomeNew' element={<WelcomeNew/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </>
  )
}

export default App