import "./App.css";
import Header from "./components/Header";
import { useEffect } from "react";
import { init } from "./js/main";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";

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
      <About />
      <Faq />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
