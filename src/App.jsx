import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Stores from "./Pages/Stores";
import About from "./Pages/About";
import ShopDetails from "./Pages/ShopDetails";
import Login from "./Pages/Login";
import Register from "./pages/Register";
import Dashboard from "./Pages/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
        {/* <Route path="/shop-details" element={<ShopDetails />} /> */}
        <Route path="/shop/:id" element={<ShopDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
