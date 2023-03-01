import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ShowProducts from './components/ShowProducts'
import {  Route, Routes } from 'react-router-dom'
import CreateProducts from './components/CreateProducts'
import EditProducts from './components/EditProducts'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  
  const mitoken = sessionStorage.getItem('token');

  return (
    <>
    
    <Routes>
      <Route path='login' element={<Login />} />

      {mitoken  && <Route path="home" element={<Home />} /> }
      <Route path='/create' element={<CreateProducts />} />
      <Route path='/edit/:id' element={<EditProducts />} />
      <Route path='/show' element={<ShowProducts />} />
      <Route path="/" element={<Login />} />
    </Routes>
    
    </>
  )
}

export default App
