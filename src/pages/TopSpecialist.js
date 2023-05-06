import React from 'react'
import {Card} from "antd";
import { Link } from 'react-router-dom';


const TopSpecialist = () => {
  return (
    <div>
        <div className="container-lg my-3" data-aos="zoom-in">
        <Card
        className="text-center fs-4"
          type="inner"
          title="Top Searched Specialists"
          //   extra={<a href="/">More</a>}
        >
          <section className="bg-white mt-2 pb-3 mb-2">
            <div className="col-12 text-center">
              <p className="fs-5">
              <span className="fw-bold">100+</span> Top Specialists
              </p>
            </div>
            <div className="our-services section-pad-t30">
              <div className="container" data-aos="fade-up">
                <div className="row d-flex justify-contnet-center">
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-tour"><i class="bi bi-android2"></i></span>
                      </div>
                      <div className="services-cap">
                        <h5>
                          <a href="job_listing.html">Design & Creative</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-cms"><i class="bi bi-android2"></i></span>
                      </div>
                      <div className="services-cap">
                        <h5>
                          <a href="job_listing.html">Design & Development</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-report"><i class="bi bi-android2"></i></span>
                      </div>
                      <div className="services-cap">
                        <h5>
                          <a href="job_listing.html">Sales & Marketing</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-app"><i class="bi bi-android2"></i></span>
                      </div>
                      <div className="services-cap">
                        <h5>
                          <a href="job_listing.html">Mobile Application</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-helmet"><i class="bi bi-android2"></i></span>
                      </div>
                      <div className="services-cap">
                        <h5>
                          <a href="job_listing.html">Construction</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-high-tech"><i class="bi bi-android2"></i></span>
                      </div>
                      <div className="services-cap">
                        <h5>
                          <a href="job_listing.html">Information Technology</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-real-estate"><i class="bi bi-android2"></i></span>
                      </div>
                      <div className="services-cap">
                        <h5>
                          <a href="job_listing.html">Real Estate</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        <span className="flaticon-content"><i class="bi bi-android2"></i></span>
                      </div>
                      <div className="services-cap">
                        <h5>
                          <a href="job_listing.html">Content Writer</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="col-md-12 text-center show-link mt-2">
            <Link
              to="/speciality"
              className="btn btn-primary btn-sm semi-round"
            >
              View All Specialists
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default TopSpecialist