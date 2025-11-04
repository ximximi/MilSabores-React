import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import { HomePage } from './pages/HomePage'
import { CatalogoPage } from './pages/CatalogoPages'

// Para probar cositas
//const CatalogoPage = () => <h1 className="p-8 text-3xl">PÁGINA DE CATÁLOGO</h1>;
const BlogPage = () => <h1 className="p-8 text-3xl">PÁGINA DE BLOG</h1>;
const LoginPage = () => <h1 className="p-8 text-3xl">PÁGINA DE LOGIN</h1>;
const CarritoPage = () => <h1 className="p-8 text-3xl">PÁGINA DE CARRITO</h1>;

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      {/* para que el footer se quede abajo a */}
      <main style={{minHeight: '80vh'}}>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/catalogo' element={<CatalogoPage />}/>
          <Route path='/blog' element={<BlogPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/carrito" element={<CarritoPage />} />      
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>

  )
}
export default App


/*
QUÉ
okey
primero
{{}}
por quÉ los corchetes están así basta dios 
lo otro, ya tenía esta duda desde hace rato, por qué <Navbar/>, o sea lo de los <> y el /, por qué sólo uno, si normalemnte son duplicados
QUÉ PUTAS ES EL REACT ROUTER DOM y por qué me trae lo del browserrouter
otra más, afecta en algo si ponog con '' o ""?

useState<Producto[]>([]); QUÉ ES ESO 
también aclara lo del await, entiendo pero no entiendo

Yass si lees esto es porque se me olvidó borrarlo, bórralo de la faz de la tierra
porque no debería estar ahí mi crisis ajskajsk
*/