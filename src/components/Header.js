import React from 'react'

const Header = () => {
  return (
   
    <header id="header" className="header fixed-top" data-scrollto-offset="0">
      <div className="container-fluid d-flex align-items-center justify-content-between">
  
        <a href="index.html" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
          {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
          <h1>MediTech</h1>
        </a>
  
        <nav id="navbar" className="navbar">
          <ul>
  
          <li className="dropdown megamenu"><a href="/"><span>Doctors</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li>
                  <h5>Find doctor by speciality</h5>
                  <a href="/">Column 1 link 1</a>
                  <a href="/">Column 1 link 2</a>
                  <a href="/">Column 1 link 3</a>
                </li>
                <li>
                  <a href="/">Column 2 link 1</a>
                  <a href="/">Column 2 link 2</a>
                  <a href="/">Column 3 link 3</a>
                </li>
                <li>
                  <a href="/">Column 3 link 1</a>
                  <a href="/">Column 3 link 2</a>
                  <a href="/">Column 3 link 3</a>
                </li>
                <li>
                  <a href="/">Column 4 link 1</a>
                  <a href="/">Column 4 link 2</a>
                  <a href="/">Column 4 link 3</a>
                </li>
              </ul>
            </li>
  
            <li><a className="nav-link scrollto" href="index.html#about">About</a></li>
            <li><a className="nav-link scrollto" href="index.html#services">Services</a></li>
            <li className="dropdown megamenu"><a href="/"><span>Medical Stores</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li>
                  <a href="/">Column 1 link 1</a>
                  <a href="/">Column 1 link 2</a>
                  <a href="/">Column 1 link 3</a>
                </li>
                <li>
                  <a href="/">Column 2 link 1</a>
                  <a href="/">Column 2 link 2</a>
                  <a href="/">Column 3 link 3</a>
                </li>
                <li>
                  <a href="/">Column 3 link 1</a>
                  <a href="/">Column 3 link 2</a>
                  <a href="/">Column 3 link 3</a>
                </li>
                <li>
                  <a href="/">Column 4 link 1</a>
                  <a href="/">Column 4 link 2</a>
                  <a href="/">Column 4 link 3</a>
                </li>
              </ul>
            </li>
            <li className="dropdown"><a href="/"><span>Lab Tests</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <h5>Book Lab Tests</h5>
                <li><a href="/">Drop Down 1</a></li>
                <li><a href="/">Drop Down 2</a></li>
                <li><a href="/">Drop Down 3</a></li>
                <li><a href="/">Drop Down 4</a></li>
                <li><a href="/">Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="/blogs">Health Blogs</a></li>
            <li><a className="nav-link scrollto" href="index.html#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle d-none"></i>
        </nav>
        {/* <!-- .navbar --> */}
  
        <a className="btn-getstarted scrollto" href="index.html#about">Get Started</a>
  
      </div>
    </header>
  )
}

export default Header