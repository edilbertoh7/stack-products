import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ShowProducts from './components/ShowProducts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateProducts from './components/CreateProducts'
import EditProducts from './components/EditProducts'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='home' element={<Home />} />
      <Route path='/create' element={<CreateProducts />} />
      <Route path='/edit/:id' element={<EditProducts />} />
      <Route path='/show' element={<ShowProducts />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
