import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

function App() {
  return (
    <div className="min-h-screen bg-light">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/enterprise" element={<Register />} />
        <Route path="/register/employee" element={<Register />} />
        <Route path="/features" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/docs" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;