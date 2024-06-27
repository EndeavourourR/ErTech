import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import About_Us from "./About_Us";
import Ourservices from "./Ourservices";
import Contact from './Contact';
import Footer from './Footer';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About_Us />} />
          <Route path="/services" element={<Ourservices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
