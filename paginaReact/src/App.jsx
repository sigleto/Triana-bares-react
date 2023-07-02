import { useState } from 'react'
import Home from './componentes/Home'
import Establecimientos from './componentes/Establecimientos'
import Bares from './componentes/Bares'
import Restaurantes from './componentes/Restaurantes'
import Formulario from './componentes/Formulario'
import Nav from './Nav'

import './App.css'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/establecimientos' element={<Establecimientos/>}/>
    <Route path='/bares' element={<Bares/>}/>
    <Route path='/restaurantes' element={<Restaurantes/>}/>
    <Route path='/formulario' element={<Formulario/>}/>
    
    </Routes>
    
    </BrowserRouter>
    
 
    </>
  )
}

export default App
