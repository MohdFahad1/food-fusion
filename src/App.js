import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart'
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import menuItemsData from './pages/Menu/data';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu list={menuItemsData}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
