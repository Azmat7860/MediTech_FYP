import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from './../../context/authContext';

const Sidebar = () => {
  const auth = useContext(authContext);
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

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/user-appointment">
              <i className="bi bi-person"></i>
              <span>Appointments</span>
            </NavLink>
          </li>
          {/* <!-- End Profile Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/user-patient">
            <i className="bi bi-person"></i>
              <span>Patients</span>
            </NavLink>
          </li>
          {/* 
      // <!-- End F.A.Q Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/user-doctor">
            <i className="bi bi-person"></i>
              <span>Doctors</span>
            </NavLink>
          </li>
          {/* <!-- End Contact Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/user-caretaker">
            <i className="bi bi-person"></i>
              <span>Caretakers</span>
            </NavLink>
          </li>
          {/* <!-- End Register Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/user-medicalstore">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Medical Stores</span>
            </NavLink>
          </li>
          {/* <!-- End Login Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/user-lab">
              <i className="bi bi-dash-circle"></i>
              <span>Labs</span>
            </NavLink>
          </li>
          {/* <!-- End Error 404 Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/user-blog">
              <i className="bi bi-file-earmark"></i>
              <span>Blog</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/user-profile">
            <i class="bi bi-person"></i>
              <span>Profile</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/user-logout">
            <i class="bi bi-box-arrow-right"></i>
              <span onClick={auth.logout} >Logout</span>
            </NavLink>
          </li>
          {/* <!-- End Blank Page Nav --> */}
        </ul>
      </aside>
      {/* <!-- End Sidebar--> */}
    </div>
  )
}

export default Sidebar