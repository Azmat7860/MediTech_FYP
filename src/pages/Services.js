import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <section id="faq" className="faq section-bg" data-aos="fade-up">
        <div className="container">
          <div className="section-title text-center">
            <h3>Common Services, Diseases, Medicines &amp; Medical Stores</h3>
          </div>
        </div>
        <div id="services">
          <div className="services-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 services-top-services">
                  <h4>Services</h4>
                  <ul>
                    <li>
                      <Link to="/blogs">Whitening Injections</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Clinical Breast Examination (CBE)</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Kidney Infections</Link>
                    </li>
                    <li>
                      <Link to="/blogs">MRI</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Teeth Cleaning</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Weight Gain</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Hair Transplant</Link>
                    </li>
                    <li>
                      <Link to="/blogs">HydraFacial</Link>
                    </li>
                    <li>
                      <Link to="/blogs">View All</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 services-top-services">
                  <h4>Diseases</h4>
                  <ul>
                    <li>
                      <Link to="/doctor">Male Sexual Dysfunction</Link>
                    </li>
                    <li>
                      <Link to="/doctor">Growth Disorders</Link>
                    </li>
                    <li>
                      <Link to="/doctor">Thyroid Gland Diseases</Link>
                    </li>
                    <li>
                      <Link to="/doctor">Fungal Nail Infection</Link>
                    </li>
                    <li>
                      <Link to="/doctor">Hernia</Link>
                    </li>
                    <li>
                      <Link to="/doctor">Migraine</Link>
                    </li>
                    <li>
                      <Link to="/doctor">Piles</Link>
                    </li>
                    <li>
                      <Link to="/doctor">Abortion</Link>
                    </li>
                    <li>
                      <Link to="/speciality">View All</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 services-top-services">
                  <h4>Medicines</h4>
                  <ul className="widget-list ">
                    <li>
                      <Link to="/medicine">Bariatric Surgery</Link>
                    </li>
                    <li>
                      <Link to="/medicine">Hernia Surgery</Link>
                    </li>
                    <li>
                      <Link to="/medicine">PRP Hair Treatment</Link>
                    </li>
                    <li>
                      <Link to="/medicine">Skin Whitening Treatment</Link>
                    </li>
                    <li>
                      <Link to="/medicine">Cholecystectomy</Link>
                    </li>
                    <li>
                      <Link to="/medicine">Endoscopy</Link>
                    </li>
                    <li>
                      <Link to="/medicine">Angioplasty</Link>
                    </li>
                    <li>
                      <Link to="/medicine">Appendectomy</Link>
                    </li>
                    <li>
                      <Link to="https://www.marham.pk/surgeries">View All</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 services-top-services">
                  <h4>Medical Stores</h4>
                  <ul>
                    <li>
                      <Link to="/medicalstore">
                        All Medical Stores in Lahore
                      </Link>
                    </li>
                    <li>
                      <Link to="/medicalstore">
                        All Medical Stores in Karachi
                      </Link>
                    </li>
                    <li>
                      <Link to="/medicalstore">
                        All Medical Stores in Islamabad
                      </Link>
                    </li>
                    <li>
                      <Link to="/medicalstore">
                        All Medical Stores in Rawalpindi
                      </Link>
                    </li>
                    <li>
                      <Link to="/medicalstore">
                        All Medical Stores in Multan
                      </Link>
                    </li>
                    <li>
                      <Link to="/medicalstore">
                        All Medical Stores in Peshawar
                      </Link>
                    </li>
                    <li>
                      <Link to="/medicalstore">
                        All Medical Stores in Quetta
                      </Link>
                    </li>
                    <li>
                      <Link to="/medicalstore">
                        All Medical Stores in Rahim Yar Khan
                      </Link>
                    </li>
                    <li>
                      <Link to="/medicalstore">View All</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
