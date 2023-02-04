import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Careers from "./pages/careers";
import Locations from "./pages/locations";
import "./index.css";
import SignUpbanner from "./components/SignUpBanner";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
      <SignUpbanner />
      <Footer />
    </>
  );
}
