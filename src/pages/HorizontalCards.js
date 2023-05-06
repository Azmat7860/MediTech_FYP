import React, { useState } from "react";
import SpecialityModal from "../components/SpecialityModal";

const HorizontalCards = () => {
  const [appointment, setAppoinment] = useState(false)
  return (
    <div>
      <SpecialityModal appointment={appointment}/>
      <section id="team" class="team section-bg">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Find and Book Appointment</h4>
                  <span>1000+ PMC Verified Doctors</span>
                  <p>
                    <a className="btn-appointment" href="/" onClick={()=>{setAppoinment(true)}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Book Appointment
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Book Video Consultation</h4>
                  <span>Instant Video Consultation with Top Doctors</span>
                  <p>
                    <a
                      className="btn-video-consultation"
                      href="/"
                      data-bs-toggle="modal" data-bs-target="#exampleModal"
                    >
                      Video Consultation
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Book Lab Test</h4>
                  <span>Book Lab Test from the Top Laboraties of Pakistan</span>
                  <p>
                    <a className="btn-lab-test" href="/" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Search Medicine</h4>
                  <span>Search and found the Medicine</span>
                  <p>
                    <a
                      className="btn-video-consultation"
                      href="/medicine"
                    >
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HorizontalCards;
