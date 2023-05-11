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
import Blogs from "./pages/Health Blog/Blogs";
import BlogItems from "./pages/Health Blog/BlogItems";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { useState } from "react";
import { authContext } from "./context/authContext";
import Medicine from "./pages/Medicine";
import Speciality from "./pages/Speciality";
import Doctor from "./pages/Doctor";

function App() {
  useEffect(() => {
    // Call a function from the imported script
    init();
  }, []);

  const [apiEndpoint, setApiEndpoint] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function login() {
    setIsLoggedIn(true);
  }
  function logout() {
    setIsLoggedIn(false);
  }

  const [userData, setUserData] = useState(null);
  const setUser = (data) => {
    console.log("API RESPONSE: " + data);
    setUserData(data);
  };
  const clearUser = () => {
    setUserData(null);
  };

  return (
    <authContext.Provider
      value={{ isLoggedIn, login, logout, setUser, clearUser, userData }}
    >
      <>
        <Link
          id="scrollBtn"
          class="scroll-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </Link>

        <div id="preloader"></div>

        <Header apiEndpoint={apiEndpoint} setApiEndpoint={setApiEndpoint}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-item" element={<BlogItems />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </>
    </authContext.Provider>
  );
}

export default App;
