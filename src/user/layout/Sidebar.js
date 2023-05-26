import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "./../../context/authContext";

const Sidebar = () => {
  const auth = useContext(authContext);
  console.log(auth.userData.data.check);
  return (
    <div>
      {/* 
   <!-- ======= Sidebar ======= --> */}
      <aside id="sidebars" className="sidebars">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/user-dashboard">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          {/* <!-- End Dashboard Nav --> */}

          {/* <li className="nav-heading">Pages</li> */}

          {auth.userData.data.check === "Doctor" ||
          auth.userData.data.check === "Caretaker" ? (
            <span>
              <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-appointment">
                  <i className="bi bi-person"></i>
                  <span>Appointments</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-patient">
                  <i className="bi bi-person"></i>
                  <span>Patients</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-blog">
                  <i className="bi bi-file-earmark"></i>
                  <span>Blogs</span>
                </NavLink>
              </li>
            </span>
          ) : (auth.userData.data.check === "Lab") ? (
            <span>
               <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-appointment">
                  <i className="bi bi-person"></i>
                  <span>Booked Tests</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-blog">
                  <i className="bi bi-file-earmark"></i>
                  <span>Blogs</span>
                </NavLink>
              </li>
            </span>
          ) : (auth.userData.data.check === "Medical Store") ? (
          <span>
               <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-appointment">
                  <i className="bi bi-person"></i>
                  <span>Manage Medicines</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-blog">
                  <i className="bi bi-file-earmark"></i>
                  <span>Blogs</span>
                </NavLink>
              </li>
            </span>
          ):
          (
            <span>
              <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-appointment">
                  <i className="bi bi-person"></i>
                  <span>Appointments</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-patient">
                  <i className="bi bi-person"></i>
                  <span>Doctors</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-medicalstore">
                  <i className="bi bi-box-arrow-in-right"></i>
                  <span>Medical Stores</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-lab">
                  <i className="bi bi-dash-circle"></i>
                  <span>Labs</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link collapsed" to="/user-blog">
                  <i className="bi bi-file-earmark"></i>
                  <span>Blogs</span>
                </NavLink>
              </li>
            </span>
          )
        }

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/user-profile">
              <i class="bi bi-person"></i>
              <span>Profile</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/user-logout">
              <i class="bi bi-box-arrow-right"></i>
              <span onClick={auth.logout}>Logout</span>
            </NavLink>
          </li>
          {/* <!-- End Blank Page Nav --> */}
        </ul>
      </aside>
      {/* <!-- End Sidebar--> */}
    </div>
  );
};

export default Sidebar;
