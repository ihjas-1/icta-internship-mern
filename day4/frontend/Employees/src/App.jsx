import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Add from './components/Add'
import NavBar from './components/NavBar'
import View from './components/View'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Add/>}/>
        <Route path="/view" element={<View/>}/>
      </Routes>
    </>
  )
}

export default App
