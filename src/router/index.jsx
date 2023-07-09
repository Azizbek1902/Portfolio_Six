import React from "react";
import Home from "../pages/Home";
import Feature from "../pages/Features";
import Pricing from "../pages/Pricing";
import Servises from "../pages/Servises";
import Blog from "../pages/Blog";
import Details from "../pages/Details";
import Element from "../pages/Element";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/services" element={<Servises />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail" element={<Details />} />
        <Route path="/element" element={<Element />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
