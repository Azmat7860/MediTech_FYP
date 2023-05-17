import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      {/* 
   <!-- ======= Sidebar ======= --> */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          {/* <!-- End Dashboard Nav --> */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="/"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>Appointment</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/accrodian">
                  <i className="bi bi-circle"></i>
                  <span>Accordion</span>
                </Link>
              </li>

              <li>
                <Link to="/admin-breadcrumb">
                  <i className="bi bi-circle"></i>
                  <span>Breadcrumbs</span>
                </Link>
              </li>
              <li>
                <Link to="/buttons">
                  <i className="bi bi-circle"></i>
                  <span>Buttons</span>
                </Link>
              </li>
              <li>
                <Link to="/cards">
                  <i className="bi bi-circle"></i>
                  <span>Cards</span>
                </Link>
              </li>
              <li>
                <Link to="/modals">
                  <i className="bi bi-circle"></i>
                  <span>Modal</span>
                </Link>
              </li>

              <li>
                <Link to="/tabs">
                  <i className="bi bi-circle"></i>
                  <span>Tabs</span>
                </Link>
              </li>
              <li>
                <Link to="/pagination">
                  <i className="bi bi-circle"></i>
                  <span>Pagination</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* 
      // <!-- End Components Nav --> */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="/"
            >
              <i className="bi bi-journal-text"></i>
              <span>Forms</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/layout">
                  <i className="bi bi-circle"></i>
                  <span>Form Layouts</span>
                </Link>
              </li>
              <li>
                <Link to="/editor">
                  <i className="bi bi-circle"></i>
                  <span>Form Editors</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* 
      // <!-- End Forms Nav --> */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="/"
            >
              <i className="bi bi-layout-text-window-reverse"></i>
              <span>Tables</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/tables">
                  <i className="bi bi-circle"></i>
                  <span>General Tables</span>
                </Link>
              </li>
              <li>
                <Link to="/details">
                  <i className="bi bi-circle"></i>
                  <span>Data Tables</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* <!-- End Tables Nav --> */}

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/appointment">
              <i className="bi bi-person"></i>
              <span>Appointments</span>
            </NavLink>
          </li>
          {/* <!-- End Profile Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/patient">
              <i className="bi bi-question-circle"></i>
              <span>Patients</span>
            </NavLink>
          </li>
          {/* 
      // <!-- End F.A.Q Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/doctor">
              <i className="bi bi-envelope"></i>
              <span>Doctors</span>
            </NavLink>
          </li>
          {/* <!-- End Contact Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/caretaker">
              <i className="bi bi-card-list"></i>
              <span>Caretakers</span>
            </NavLink>
          </li>
          {/* <!-- End Register Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/medicalstore">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Medical Stores</span>
            </NavLink>
          </li>
          {/* <!-- End Login Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/lab">
              <i className="bi bi-dash-circle"></i>
              <span>Labs</span>
            </NavLink>
          </li>
          {/* <!-- End Error 404 Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/blog">
              <i className="bi bi-file-earmark"></i>
              <span>Blog</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/profile">
            <i class="bi bi-person"></i>
              <span>Profile</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/logout">
            <i class="bi bi-box-arrow-right"></i>
              <span>Logout</span>
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