import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Stores from "./Pages/Stores";
import About from "./Pages/About";
import ShopDetails from "./Pages/ShopDetails";
import Login from "./Pages/Login";
import Register from "./Pages/register";
import Dashboard from "./Pages/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import ChatPage from "./Pages/ChatPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stores" element={<Stores />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop/:id" element={<ShopDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
