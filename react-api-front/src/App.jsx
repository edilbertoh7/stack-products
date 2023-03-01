import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ShowProducts from './components/ShowProducts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateProducts from './components/CreateProducts'
import EditProducts from './components/EditProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ShowProducts />} />
      <Route path='/create' element={<CreateProducts />} />
      <Route path='/edit/:id' element={<EditProducts />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
