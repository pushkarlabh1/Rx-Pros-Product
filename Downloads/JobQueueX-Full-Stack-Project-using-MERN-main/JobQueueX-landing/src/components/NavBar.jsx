import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-deep">
        <Link to="/">JobQueueX</Link>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-deep font-medium hover:text-blue-600">Home</Link>
        <Link to="/features" className="text-deep font-medium hover:text-blue-600">Features</Link>
        <Link to="/dashboard" className="text-deep font-medium hover:text-blue-600">Dashboard</Link>
        <Link to="/docs" className="text-deep font-medium hover:text-blue-600">Docs</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/signin" className="text-deep font-medium hover:text-blue-600">Login</Link>
        <Link to="/register" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;