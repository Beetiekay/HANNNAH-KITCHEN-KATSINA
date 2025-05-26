import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from './pages/Landing'
import Nav from './components/nav'

export default function App() {
  return (
    <BrowserRouter>
     <Nav/>
     <Routes>
        <Route path="/" element={<Landing/>}/>
     </Routes>
    </BrowserRouter>
  )
}
