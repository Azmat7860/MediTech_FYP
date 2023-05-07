import React from "react";
import { NavLink } from "react-router-dom";

const DoctorCard = () => {
  return (
    <div>
      <section id="doctor" className="doctor">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-2">
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <NavLink to="/">
                  <h6 class="card-title">Dr. Umer Mushtaq</h6>
                </NavLink>
                <p class="card-text">
                  This is a wider card <br />
                  This is a wider card <br />
                  This is a wider card
                </p>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{backgroundColor: "#efefef" , maxWidth:"300px"}}>
                  <div>
                    <p class="small text-muted mb-1">Articles</p>
                    <p class="mb-0">41</p>
                  </div>
                  <div class="px-4">
                    <p class="small text-muted mb-1">Followers</p>
                    <p class="mb-0">976</p>
                  </div>
                  <div>
                    <p class="small text-muted mb-1">Rating</p>
                    <p class="mb-0">8.5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-4">
              <div>
                <NavLink className="btn-appointment" to="/">
                  Book Appointment
                </NavLink>
              </div>
              <br />
              <div>
                <NavLink className="btn-getstarted" to="/">
                  Video Consultation
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorCard;
