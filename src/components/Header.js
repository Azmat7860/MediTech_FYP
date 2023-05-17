import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DoctorModal from "./DoctorModal";

const Header = ({ apiEndpoint,setApiEndpoint }) => {
  const [doctor, setDoctor] = useState(false);

  console.log(setApiEndpoint)

  
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
      <DoctorModal doctor={doctor} setDoctor={setDoctor} apiEndpoint={apiEndpoint} />
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
                <Link to="/doctor">
                  <span>Doctors</span>
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </Link>
                <ul>
                  <li>
                    <h5 className="text-success">Find doctor by speciality</h5>

                    <Link to="/doctor">Neuro Surgeon</Link>

                    <Link to="/doctor">Dermatologist</Link>

                    <Link to="/doctor">Neurologist</Link>

                    <Link to="/doctor">Urologist</Link>

                    <Link to="/doctor">Eye Surgeon</Link>

                    <Link to="/doctor">View All Specialities</Link>
                  </li>
                  <li>
                    <h5 className="text-success">Find Doctor by Disease</h5>
                    <Link to="/doctor">
                      Migraine
                    </Link>
                    <Link to="/doctor">
                      Hernia
                    </Link>
                    <Link to="/doctor">
                      Fungal Nail Infection
                    </Link>
                    <Link to="/doctor">
                      Premature Ejaculation
                    </Link>
                    <Link to="/doctor">
                      Growth Disorders
                    </Link>
                    <Link to="/doctor">
                      View All
                    </Link>
                  </li>
                  <li>
                    <h5 className="text-success">Find Doctor via City</h5>
                    <Link to="/doctor">
                      Best Doctors in Lahore
                    </Link>
                    <Link to="/doctor">
                      Best Doctors in Quetta
                    </Link>
                    <Link to="/doctor">
                      Best Doctors in Peshawar
                    </Link>
                    <Link to="/doctor">
                      Best Doctors in Karachi
                    </Link>
                    <Link to="/doctor">
                      Best Doctors in Rahim Yar Khan
                    </Link>
                    <Link to="/doctor">
                      View All
                    </Link>
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
                    <Link to="/medicalstore">
                      Medical Stores in Lahore
                    </Link>

                    <Link to="/medicalstore">
                      Medical Stores in Karachi
                    </Link>

                    <Link to="/medicalstore">
                      Medical Stores in Islamabad
                    </Link>     

                    <Link to="/medicalstore">
                      Medical Stores in Peshawar
                    </Link>

                    <Link to="/medicalstore">
                      Medical Stores in Quetta
                    </Link>

                    <Link to="/medicalstore">View All</Link>
                  </li>
                  <li>
                    <h5 className="text-success">
                      Medical Stores in Rahim Yar Khan
                    </h5>
                    <Link to="/medicalstore">
                      Fazaldin Pharmacy
                    </Link>
                    <Link to="/medicalstore">
                      Asad Pharmacy
                    </Link>
                    <Link to="/medicalstore">
                      Sawar Medical Store
                    </Link>
                    <Link to="/medicalstore">
                      Hammad Medical Store
                    </Link>
                    <Link to="/medicalstore">
                      Al-Shifa Medical Store
                    </Link>
                    <Link to="/medicalstore">
                      View All
                    </Link>
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
                    <Link to="https://www.marham.pk/hospitals/lahore">
                      Chughtai Lab
                    </Link>

                    <Link to="https://www.marham.pk/hospitals/karachi">
                      CLINLAB
                    </Link>

                    <Link to="https://www.marham.pk/hospitals/islamabad">
                      One Health Labs
                    </Link>

                    <Link to="https://www.marham.pk/hospitals/rawalpindi">
                      Dr. Essa’s Lab
                    </Link>

                    <Link to="https://www.marham.pk/hospitals/faisalabad">
                      Citilab
                    </Link>
                  </li>
                  <li>
                    <h5 className="text-success">Labs in Pakistan</h5>
                    <Link to="https://www.marham.pk/hospitals/gujranwala">
                      Labs in Lahore
                    </Link>
                    <Link to="https://www.marham.pk/hospitals/bahawalpur">
                      Labs in Islamabad
                    </Link>
                    <Link to="https://www.marham.pk/hospitals/gujranwala">
                      Labs in Karachi
                    </Link>
                    <Link to="https://www.marham.pk/hospitals/bahawalpur">
                      Labs in Peshawar
                    </Link>
                    <Link to="https://www.marham.pk/hospitals/bahawalpur">
                      Labs in Quetta
                    </Link>
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
                    <Link to={"/"} onClick={handleButtonDoctor} data-bs-toggle="modal" data-bs-target="#doctorModal">
                      As Doctor
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} onClick={handleButtonCaretaker} data-bs-toggle="modal" data-bs-target="#doctorModal">
                      As Caretaker
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} onClick={handleButtonLab} data-bs-toggle="modal" data-bs-target="#doctorModal">
                      
                      Medical Lab
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} onClick={handleButtonMedicalStore} data-bs-toggle="modal" data-bs-target="#doctorModal">
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
