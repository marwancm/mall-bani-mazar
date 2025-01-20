import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopDetails from "./components/ShopDetails";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop/:id" element={<ShopDetails />} />
    </Routes>
    <Footer/>
    </>
  );
};

export default App;
