import React from "react";
import { NavLink } from "react-router-dom";

const CallToAction = () => {
  const toTop = () =>{
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <section id="cta" class="cta">
        <div class="container" data-aos="zoom-out">
          <div class="row g-5">
            <div class="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
              <h3>
              Book Appointment with <em>PMC verified</em> Doctors 
              </h3>
              <p>
              MediTech is the digital healthcare platform in Pakistan. MediTech helps you find and instantly book appointments or online video consultations with the best doctors in Pakistan.
              </p>
              <NavLink to="/" onClick={()=>{toTop()}} className="cta-btn align-self-start">
                Book Appointment
              </NavLink>
            </div>

            <div class="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
              <div class="img">
                <img src="assets/img/cta.jpg" alt="..." class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
