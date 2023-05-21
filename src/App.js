import "./App.css";
import { useEffect, useState } from "react";
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
import MedicalStore from "./pages/MedicalStore";
import Lab from "./pages/Lab";
import Speciality from "./pages/Speciality";
import Doctor from "./pages/Doctor";
import Caretaker from './pages/Caretaker';
import ULogin from "./user/auth/Login";
import { userinit } from "./js/user-main";
import Dashboard from "./user/pages/Dashboard";
import Sidebar from "./user/layout/Sidebar";
import UserHeader from "./user/layout/Header";
import UserFooter from "./user/layout/Footer";
import UserAppointment from "./user/pages/Appointment";
import UserPatient from "./user/pages/Patient";
import UserDoctor from "./user/pages/Doctor";
import UserCaretaker from "./user/pages/Caretaker";
import UserMedicalStore from "./user/pages/MedicalStore";
import UserLab from "./user/pages/Lab";
import UserBlog from "./user/pages/Blog";
import UserProfile from "./user/pages/Profile";
import UserLogout from "./user/auth/Logout";
import BookAppointment from "./pages/BookAppointment";

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
  const [patientData, setPatientData] = useState(null);
  const setPatient = (data) => {
    console.log("API RESPONSE: " + data);
    setPatientData(data);
  };
  const clearPatient = () => {
    setUserData(null);
  };

  return (
    <authContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        setUser,
        clearUser,
        userData,
        patientData,
        setPatient,
        clearPatient,
      }}
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
              <Route path="/user-appointment" element={<UserAppointment />} />
              <Route path="/user-patient" element={<UserPatient />} />
              <Route path="/user-doctor" element={<UserDoctor />} />
              <Route path="/user-caretaker" element={<UserCaretaker />} />
              <Route path="/user-medicalstore" element={<UserMedicalStore />} />
              <Route path="/user-lab" element={<UserLab />} />
              <Route path="/user-blog" element={<UserBlog />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/user-logout" element={<UserLogout />} />
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
              <Route path="/booked-appointment" element={<BookAppointment />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/caretaker" element={<Caretaker />} />
              <Route path="/medicine" element={<Medicine />} />
              <Route path="/medicalstore" element={<MedicalStore />} />
              <Route path="/lab" element={<Lab />} />
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
