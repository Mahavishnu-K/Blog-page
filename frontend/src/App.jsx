import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Navbar from './components/navbar/navbar';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product" element={<Product/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
