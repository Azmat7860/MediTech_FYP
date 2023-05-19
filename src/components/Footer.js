import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <h3>MediTech</h3>
                <p>
                  MediTech is the digital healthcare platform in Pakistan.
                  MediTech helps you find and instantly book appointments or
                  online video consultations with the best doctors in Pakistan.
                  Our transparent and intuitive platform helps you choose the
                  right doctors by letting you check up on patient reviews,
                  consultation fees, satisfaction scores, and wait times etc.
                </p>
                <div className="col-lg-12 col-md-12 footer-links mt-3">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> 
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <NavLink to="/about">About us</NavLink>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <NavLink to="/contact">Contact us</NavLink>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <Link to="/">Services</Link>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <Link to="/">Terms of service</Link>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <Link to="/">Privacy policy</Link>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> 
                      <Link to="/faq">FAQ's</Link>
                    </li>
                  </ul>
                </div>
                <div className="social-links mt-3">
                  <Link to="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to="/" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link to="/" className="youtube">
                    <i className="bi bi-youtube"></i>
                  </Link>
                  <Link to="/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-top-cities">
                <h4>Top Cities</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Islamabad</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <Link to="/">Lahore</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <Link to="/">Karachi</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <Link to="/">Peshawar</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Rawalpindi</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Faisalabad</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Quetta</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Multan</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Gujranwala</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Hyderabad</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Bahawalpur</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Rahim Yar Khan</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Sialkot</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">View All Cities</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-top-cities">
                <h4>Top Specialities</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Neuro Surgeon</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Orthopedic Surgeon</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Dermatologist</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Neurologist</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Gynecologist</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Urologist</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Gastroenterologist</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Pediatrician</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">General Physician</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Nephrologist</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Sexologist</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Ent Specialist</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">Eye Surgeon</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/">View All Specialities</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact text-white">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright text-white">
            &copy; Copyright <strong>MediTech</strong>. All Rights Reserved
          </div>
          <div className="credits pb-3">
            Designed by
            <Link to="/" className="text-white">
              &nbsp;Azmat
            </Link>
            &nbsp;&
            <Link to="/" className="text-white">
              &nbsp;Ali
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
