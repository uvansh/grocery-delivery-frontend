import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard.js';
import Home from './pages/Home.js';
import ProductList from './ProductList.js';
import AddProduct from './AddProducts.js';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/shop" element={<ProductList/>} />
        <Route path="api/products" element={<ProductList/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
