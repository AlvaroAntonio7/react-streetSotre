import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomeScreen from './routes/HomeScreen'

import ProductsScreen from './routes/ProductsScreen'
import  ContactScreen from './routes/ContactScreen'
import ProductDetailScreen from './routes/ProductDetailScreen'
function App() {
  

  return (
    <>
    <NavBar></NavBar>
    
     <Routes>
      <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
      <Route path='/products' element={<ProductsScreen></ProductsScreen>}></Route>
      <Route path='/product/:id' element={<ProductDetailScreen></ProductDetailScreen>}></Route>
      <Route path='/contact' element={<ContactScreen></ContactScreen>}></Route>
      <Route path="/*" element={<Navigate to='/' />}></Route>
     </Routes>
    </>
  )
}

export default App
