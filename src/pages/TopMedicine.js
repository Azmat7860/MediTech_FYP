import React from "react";
import { NavLink } from "react-router-dom";

const TopMedicine = () => {
  return (
    <div>
      <section id="clients" class="clients">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center mt-3">
            <h3>Top Searched Medicines</h3>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit.
            </p>
          </div>
        </div>
        <div class="container" data-aos="zoom-out">
          <div className="our-services">
            <div className="row d-flex justify-contnet-center">
              <div class="clients-slider swiper">
                <div class="swiper-wrapper align-items-center">
                  <div class="swiper-slide">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                      <div className="text-center mb-30">
                        <div className="services-ion">
                          <span className="flaticon-tour">
                            <i class="bi bi-android2"></i>
                          </span>
                        </div>
                        <div className="services-cap">
                          <h5>
                            <a href="job_listing.html">Design & Creative</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                      <div className="text-center mb-30">
                        <div className="services-ion">
                          <span className="flaticon-tour">
                            <i class="bi bi-android2"></i>
                          </span>
                        </div>
                        <div className="services-cap">
                          <h5>
                            <a href="job_listing.html">Design & Creative</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                      <div className="text-center mb-30">
                        <div className="services-ion">
                          <span className="flaticon-tour">
                            <i class="bi bi-android2"></i>
                          </span>
                        </div>
                        <div className="services-cap">
                          <h5>
                            <a href="job_listing.html">Design & Creative</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                      <div className="text-center mb-30">
                        <div className="services-ion">
                          <span className="flaticon-tour">
                            <i class="bi bi-android2"></i>
                          </span>
                        </div>
                        <div className="services-cap">
                          <h5>
                            <a href="job_listing.html">Design & Creative</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                      <div className="text-center mb-30">
                        <div className="services-ion">
                          <span className="flaticon-tour">
                            <i class="bi bi-android2"></i>
                          </span>
                        </div>
                        <div className="services-cap">
                          <h5>
                            <a href="job_listing.html">Design & Creative</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                      <div className="text-center mb-30">
                        <div className="services-ion">
                          <span className="flaticon-tour">
                            <i class="bi bi-android2"></i>
                          </span>
                        </div>
                        <div className="services-cap">
                          <h5>
                            <a href="job_listing.html">Design & Creative</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                      <div className="text-center mb-30">
                        <div className="services-ion">
                          <span className="flaticon-tour">
                            <i class="bi bi-android2"></i>
                          </span>
                        </div>
                        <div className="services-cap">
                          <h5>
                            <a href="job_listing.html">Design & Creative</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center show-link mt-5">
          <NavLink to="/medicine" className="btn btn-primary btn-sm semi-round">
            View All Medicine
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default TopMedicine;
