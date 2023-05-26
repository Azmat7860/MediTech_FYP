import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DoctorModal from "./DoctorModal";

const Header = ({ apiEndpoint, setApiEndpoint }) => {
  const [doctor, setDoctor] = useState(false);

  console.log(setApiEndpoint);

  function handleButtonDoctor() {
    setApiEndpoint("http://localhost:4000/doctorAuth/register");
  }

  function handleButtonCaretaker() {
    setApiEndpoint("http://localhost:4000/caretakerAuth/register");
  }

  function handleButtonLab() {
    setApiEndpoint("http://localhost:4000/labAuth/register");
  }

  function handleButtonMedicalStore() {
    setApiEndpoint("http://localhost:4000/medicalStoreAuth/register");
  }

  return (
    <>
      <DoctorModal
        doctor={doctor}
        setDoctor={setDoctor}
        apiEndpoint={apiEndpoint}
      />
      <header id="header" className="header fixed-top" data-scrollto-offset="0">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link
            to="/"
            className="logo d-flex align-items-center scrollto me-auto me-lg-0"
          >
            {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
            {/* <img src="assets/img/Logo.png" alt="..."/>  */}
            <h1>MediTech</h1>
          </Link>

          <nav id="navbar" className="navbar">
            <ul>
              <li className="dropdown megamenu">
                <Link to="/">
                  <span>Doctors</span>
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </Link>
                <ul>
                  <li>
                    <h5 className="text-success">Find Doctor by Speciality</h5>

                    <Link to="/doctor?speciality=Neuro surgeon">
                      Neuro Surgeon
                    </Link>

                    <Link to="/doctor?speciality=Dermatologist">
                      Dermatologist
                    </Link>

                    <Link to="/doctor?speciality=Neurologist">Neurologist</Link>

                    <Link to="/doctor?speciality=Urologist">Urologist</Link>

                    <Link to="/doctor?speciality=EyeSurgeon">Eye Surgeon</Link>

                    <Link to="/speciality">View All Specialities</Link>
                  </li>
                  <li>
                    <h5 className="text-success">Find Doctor via City</h5>
                    <Link to="/doctor?address=Lahore">
                      Best Doctors in Lahore
                    </Link>
                    <Link to="/doctor?address=Quetta">
                      Best Doctors in Quetta
                    </Link>
                    <Link to="/doctor?address=Peshawar">
                      Best Doctors in Peshawar
                    </Link>
                    <Link to="/doctor?address=Karachi">
                      Best Doctors in Karachi
                    </Link>
                    <Link to="/doctor?address=Rahim Yar Khan">
                      Best Doctors in Rahim Yar Khan
                    </Link>
                    <Link to="/speciality">View All</Link>
                  </li>
                  <li>
                    <h5 className="text-success">Find Best Caretakers</h5>
                    <Link to="/caretaker?address=Lahore">
                      Best Caretakers in Lahore
                    </Link>
                    <Link to="/caretaker?address=Quetta">
                      Best Caretakers in Quetta
                    </Link>
                    <Link to="/caretaker?address=Peshawar">
                      Best Caretakers in Peshawar
                    </Link>
                    <Link to="/caretaker?address=Karachi">
                      Best Caretakers in Karachi
                    </Link>
                    <Link to="/caretaker?address=Rahim Yar Khan">
                      Best Caretakers in Rahim Yar Khan
                    </Link>
                    <Link to="/speciality">View All</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown megamenu">
                <Link to="/">
                  <span>Medical Stores</span>
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </Link>
                <ul>
                  <li>
                    <h5 className="text-success">Medical Stores in Pakistan</h5>
                    <Link to="/medicalstore?address=Lahore">
                      Medical Stores in Lahore
                    </Link>

                    <Link to="/medicalstore?address=Karachi">
                      Medical Stores in Karachi
                    </Link>

                    <Link to="/medicalstore?address=Islamabad">
                      Medical Stores in Islamabad
                    </Link>

                    <Link to="/medicalstore?address=Peshawar">
                      Medical Stores in Peshawar
                    </Link>

                    <Link to="/medicalstore?address=Rahim Yar Khan">
                      Medical Stores in Rahim Yar Khan
                    </Link>

                    <Link to="/medicalstore">View All</Link>
                  </li>
                  <li>
                    <h5 className="text-success">
                      Medical Stores in Rahim Yar Khan
                    </h5>
                    <Link to="/medicalstore?name=Fazal Din Pharmacy">
                      Fazal Din Pharmacy
                    </Link>
                    <Link to="/medicalstore?name=Asad Pharmacy">
                      Asad Pharmacy
                    </Link>
                    <Link to="/medicalstore?name=Sawar Medical Store">
                      Sawar Medical Store
                    </Link>
                    <Link to="/medicalstore?name=Hammad Medicos">
                      Hammad Medical Store
                    </Link>
                    <Link to="/medicalstore?name=Al-Shifa Medical Store">
                      Al-Shifa Medical Store
                    </Link>
                    <Link to="/medicalstore">View All</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown megamenu">
                <Link to="/">
                  <span>Lab Tests</span>
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </Link>
                <ul>
                  <li>
                    <h5 className="text-success">Book Lab Tests</h5>
                    <Link to="/lab?name=Chughtai Lab">Chughtai Lab</Link>

                    <Link to="/lab?name=CLINLAB">CLINLAB</Link>

                    <Link to="/lab?name=One Health Labs">One Health Labs</Link>

                    <Link to="/lab?name=Dr. Essa's Lab">Dr. Essa’s Lab</Link>

                    <Link to="/lab?name=Citilab">Citilab</Link>
                    <Link to="/lab">View All</Link>
                  </li>
                  <li>
                    <h5 className="text-success">Labs in Pakistan</h5>
                    <Link to="/lab?address=Lahore">Best Labs in Lahore</Link>
                    <Link to="/lab?address=Quetta">Best Labs in Quetta</Link>
                    <Link to="/lab?address=Peshawar">
                      Best Labs in Peshawar
                    </Link>
                    <Link to="/lab?address=Karachi">Best Labs in Karachi</Link>
                    <Link to="/lab?address=Rahim Yar Khan">
                      Best Labs in Rahim Yar Khan
                    </Link>
                    <Link to="/lab">View All</Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/blogs">Health Blogs</NavLink>
              </li>
              <li class="dropdown">
                <NavLink href="/">
                  <span>Register</span>
                  <i class="bi bi-chevron-down dropdown-indicator"></i>
                </NavLink>
                <ul>
                  <li>
                    <Link
                      to={"/"}
                      onClick={handleButtonDoctor}
                      data-bs-toggle="modal"
                      data-bs-target="#doctorModal"
                    >
                      As Doctor
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      onClick={handleButtonCaretaker}
                      data-bs-toggle="modal"
                      data-bs-target="#doctorModal"
                    >
                      As Caretaker
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      onClick={handleButtonLab}
                      data-bs-toggle="modal"
                      data-bs-target="#doctorModal"
                    >
                      Medical Lab
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      onClick={handleButtonMedicalStore}
                      data-bs-toggle="modal"
                      data-bs-target="#doctorModal"
                    >
                      Medical Store
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className="btn-auth scrollto" to="/login">
                  Login/Signup
                </NavLink>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle d-none"></i>
          </nav>
          {/* <!-- .navbar --> */}
          <Link className="btn-getstarted scrollto" to="/">
            3150470727
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
