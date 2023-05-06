import React from "react";
import { Link, NavLink } from "react-router-dom";

const CallToAction = () => {
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
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <NavLink className="cta-btn align-self-start" to="/">
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
