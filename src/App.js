import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Request from './pages/Request';
import Puzzles from './pages/Puzzles';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/request" element={<Request />} />
        <Route path="/puzzles" element={<Puzzles />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;