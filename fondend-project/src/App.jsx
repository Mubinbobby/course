import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Course from './Component/Course'
import Nav from './Component/Nav'
import Add from './Component/Add'
import Login from './Component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
      <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/home' element={<Course/>}></Route>
    <Route path='/add' element={<Add/>}></Route>
    
    </Routes>
    </>
  )
}

export default App
