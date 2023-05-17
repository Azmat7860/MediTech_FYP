import "./App.css";
import { useEffect,useState } from "react";
import { init } from "./js/main";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { authContext } from "./context/authContext";
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
import Medicine from "./pages/Medicine";
import MedicalStore from './pages/MedicalStore';
import Speciality from "./pages/Speciality";
import Doctor from "./pages/Doctor";
import ULogin from "./user/auth/Login";
import { userinit } from './user/js/user-main';
import Dashboard from "./user/pages/Dashboard";
import Sidebar from "./user/layout/Sidebar";
import UserHeader from "./user/layout/Header";
import UserFooter from "./user/layout/Footer";
import Appointment from "./user/pages/Appointment";
import Patient from "./user/pages/Patient";
import UserDoctor from "./user/pages/Doctor";
import Caretaker from "./user/pages/Caretaker";
import UserMedicalStore from "./user/pages/MedicalStore";
import Lab from "./user/pages/Lab";
import Blog from "./user/pages/Blog";
import Profile from "./user/pages/Profile";
import Logout from "./user/auth/Logout";

function App() {
  useEffect(() => {
    // Call a function from the imported script
    init();

    userinit();
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

        {isLoggedIn ? (
          <>
            <UserHeader />
            <Sidebar />
            <Routes>
              <Route path="/user-dashboard" element={<Dashboard />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/patient" element={<Patient />} />
              <Route path="/doctor" element={<UserDoctor />} />
              <Route path="/caretaker" element={<Caretaker />} />
              <Route path="/user-medicalstore" element={<UserMedicalStore />} />
              <Route path="/lab" element={<Lab />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
              <Route
                path="*"
                element={<Navigate to="/user-dashboard" replace />}
              />
            </Routes>
            <UserFooter />
          </>
        ) : (
          <>
            <Header apiEndpoint={apiEndpoint} setApiEndpoint={setApiEndpoint} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog-item" element={<BlogItems />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/medicine" element={<Medicine />} />
              <Route path="/medicalstore" element={<MedicalStore />} />
              <Route path="/speciality" element={<Speciality />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/userlogin"
                element={<ULogin apiEndpoint={apiEndpoint} />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </>
        )}
      </>
    </authContext.Provider>
  );
}

export default App;
