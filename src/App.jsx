// App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import './App.css';
import ProductDetailView from './pages/ProductDetailView';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>  {/* Layout component wrapper */}
          <Route index element={<Home />} />  {/* Home page */}
          <Route path="products/:id" element={<ProductDetailView />} />  {/* Product detail page */}
          <Route path="login" element={<Login />} />  {/* Login page */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
