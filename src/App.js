import "./App.css";
import Header from "./components/Header";
import { useEffect } from "react";
import { init } from "./js/main";
import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";
// import PlatinumDoctors from "./pages/PlatinumDoctors";
import TopDisease from "./pages/TopDisease";
import TopSpecialist from "./pages/TopSpecialist";
import CallToAction from "./pages/CallToAction";
import HorizontalCards from "./pages/HorizontalCards";
import Step from "./pages/Step";
import Partner from "./pages/Partner";
import Feedback from "./pages/Feedback";
import Services from "./pages/Services";
import Blogs from "./pages/Health Blog/Blogs";
import RecentBlogs from "./pages/Health Blog/RecentBlogs";
import BlogItems from "./pages/Health Blog/BlogItems";

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
      <Home />
      <Routes>
        <Route path="/about" Component={About} />
        <Route path="/faq" Component={Faq} />
        <Route path="/blogs" Component={Blogs} />
        <Route path="/blog-item" Component={BlogItems} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={<Navigate to="/" replace />} />
      </Routes>
      <HorizontalCards />
      <TopSpecialist />
      <TopDisease />
      <CallToAction />
      <Step />
      <Feedback />
      <Partner />
      {/* <PlatinumDoctors/> */}
      <RecentBlogs />
      <Services />
      <Footer />
    </>
  );
}

export default App;
