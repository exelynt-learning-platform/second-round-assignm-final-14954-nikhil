import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Payment from "./pages/payment";

// OPTIONAL: Navbar (recommended)
import Navbar from "./components/Navbar";

function App() {

  // Simple auth check
  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  return (
    <BrowserRouter>

      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>

        {/* MAIN PAGE */}
        <Route path="/" element={<Home />} />

        {/* CART */}
        <Route path="/cart" element={<Cart />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED ROUTES */}
        <Route 
          path="/orders" 
          element={isAuthenticated() ? <Orders /> : <Navigate to="/login" />} 
        />

        <Route 
          path="/payment" 
          element={isAuthenticated() ? <Payment /> : <Navigate to="/login" />} 
        />

        {/* DEFAULT FALLBACK */}
        <Route path="*" element={<h2 className="text-center mt-5">404 Page Not Found</h2>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;