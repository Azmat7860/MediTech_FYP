import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header fixed-top" data-scrollto-offset="0">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="logo d-flex align-items-center scrollto me-auto me-lg-0"
        >
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
          {/* <img src="assets/img/MediTech_Logo.png" alt="..."/>  */}
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
                  <h5 className="text-success">Find doctor by speciality</h5>

                  <Link to="/">Neuro Surgeon</Link>

                  <Link to="/">Dermatologist</Link>

                  <Link to="/">Neurologist</Link>

                  <Link to="/">Gynecologist</Link>

                  <Link to="/">Urologist</Link>

                  <Link to="/">Gastroenterologist</Link>

                  <Link to="/">General Physician</Link>

                  <Link to="/">Sexologist</Link>

                  <Link to="/">Eye Surgeon</Link>

                  <Link to="/">View All Specialities</Link>
                </li>
                <li>
                  <h5 className="text-success">Find Doctor by Disease</h5>
                  <Link to="https://www.marham.pk/all-diseases/male-sexual-dysfunction">
                    Male Sexual Dysfunction
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/polycystic-ovary-syndrome">
                    Polycystic Ovary Syndrome
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/migraine">
                    Migraine
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/hernia">Hernia</Link>
                  <Link to="https://www.marham.pk/all-diseases/fungal-nail-infection">
                    Fungal Nail Infection
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/premature-ejaculation">
                    Premature Ejaculation
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/growth-disorders">
                    Growth Disorders
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/anal-fissurefistula">
                    Anal Fissurefistula
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/male-sexual-dysfunction">
                    Male Sexual Dysfunction{" "}
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases">View All</Link>
                </li>
                <li>
                  <h5 className="text-success">Find Doctor via City</h5>
                  <Link to="https://www.marham.pk/all-diseases/male-sexual-dysfunction">
                    Best Doctors in Lahore
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/male-sexual-dysfunction">
                    Best Doctors in Rawalpindi
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/polycystic-ovary-syndrome">
                    Best Doctors in Quetta
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/migraine">
                    Best Doctors in Peshawar
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/hernia">Best Doctors in Gujrat</Link>
                  <Link to="https://www.marham.pk/all-diseases/fungal-nail-infection">
                    Best Doctors in Hyderabad
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/premature-ejaculation">
                    Best Doctors in Bahawalpur
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/growth-disorders">
                    Best Doctors in Karachi
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases/anal-fissurefistula">
                    Best Doctors in Multan
                  </Link>
                  <Link to="https://www.marham.pk/all-diseases">View All</Link>
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
                  <Link to="https://www.marham.pk/hospitals/lahore">
                    Medical Stores in Lahore
                  </Link>

                  <Link to="https://www.marham.pk/hospitals/karachi">
                    Medical Stores in Karachi
                  </Link>

                  <Link to="https://www.marham.pk/hospitals/islamabad">
                    Medical Stores in Islamabad
                  </Link>

                  <Link to="https://www.marham.pk/hospitals/rawalpindi">
                    Medical Stores in Rawalpindi
                  </Link>

                  <Link to="https://www.marham.pk/hospitals/faisalabad">
                    Medical Stores in Faisalabad
                  </Link>

                  <Link to="https://www.marham.pk/hospitals/multan">
                    Medical Stores in Multan
                  </Link>

                  <Link to="https://www.marham.pk/hospitals/peshawar">
                    Medical Stores in Peshawar
                  </Link>

                  <Link to="https://www.marham.pk/hospitals/quetta">
                    Medical Stores in Quetta
                  </Link>

                  <Link to="https://www.marham.pk/hospitals/bahawalpur">
                    Medical Stores in Bahawalpur
                  </Link>
                  <Link to="https://www.marham.pk/hospitals">View All</Link>
                </li>
                <li>
                  <h5 className="text-success">Medical Stores in Rahim Yar Khan</h5>
                  <Link to="https://www.marham.pk/hospitals/gujranwala">
                    Fazaldin Pharmacy
                  </Link>
                  <Link to="https://www.marham.pk/hospitals/bahawalpur">
                    Asad Pharmacy
                  </Link>
                  <Link to="https://www.marham.pk/hospitals/gujranwala">
                    Sawar Medical Store
                  </Link>
                  <Link to="https://www.marham.pk/hospitals/bahawalpur">
                    Hammad Medical Store
                  </Link>
                  <Link to="https://www.marham.pk/hospitals/bahawalpur">
                    Al-Shifa Medical Store
                  </Link>
                  <h5>Medical Stores in Islamabad</h5>
                  <Link to="https://www.marham.pk/hospitals/gujranwala">
                    Fazaldin Pharmacy
                  </Link>
                  <Link to="https://www.marham.pk/hospitals/bahawalpur">
                    Asad Pharmacy
                  </Link>
                  <Link to="https://www.marham.pk/hospitals/gujranwala">
                    Sawar Medical Store
                  </Link>
                  <Link to="https://www.marham.pk/hospitals/bahawalpur">
                    Hammad Medical Store
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
            <li class="dropdown"><NavLink href="/"><span>More</span> <i class="bi bi-chevron-down dropdown-indicator"></i></NavLink>
                <ul>
                  <li><Link href="/">Join as Doctor</Link></li>
                  <li><Link href="/">Join as Caretaker</Link></li>
                  <li><Link href="/">Register Medical Lab</Link></li>
                  <li><Link href="/">Register Medical Store</Link></li>
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
  );
};

export default Header;
