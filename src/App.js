import "./App.css";
import { useEffect } from "react";
import { init } from "./js/main";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";
// import PlatinumDoctors from "./pages/PlatinumDoctors";
import Blogs from "./pages/Health Blog/Blogs";
import BlogItems from "./pages/Health Blog/BlogItems";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  useEffect(() => {
    // Call a function from the imported script
    init();
  }, []);
  return (
    <>
      <a
        href="/"
        class="scroll-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>

      <div id="preloader"></div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-item" element={<BlogItems />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
