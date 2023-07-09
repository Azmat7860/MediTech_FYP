import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppointmentModal from "./AppointmentModal";

const DoctorCard = ({ id, name, address, speciality }) => {
  const [type, setType] = useState();

  return (
    <div>
      <AppointmentModal id={id} name={name} type={type} />
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
                  <h6 class="card-title">{name}</h6>
                </NavLink>
                <p class="card-text fw-bold">
                  {speciality} <br />
                  {address}
                </p>
                <div
                  class="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{ backgroundColor: "#efefef", maxWidth: "300px" }}
                >
                  <div>
                    <p class="small text-muted mb-1">Reviews</p>
                    <p class="mb-0">41</p>
                  </div>
                  <div class="px-4">
                    <p class="small text-muted mb-1">Experience</p>
                    <p class="mb-0">3 years</p>
                  </div>
                  <div>
                    <p class="small text-muted mb-1">Satisfaction</p>
                    <p class="mb-0">88.5%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-4">
              <div>
                <NavLink
                  className="btn-appointment"
                  to={`/${id}`}
                  onClick={() => {
                    setType("physical");
                  }}
                  data-bs-toggle="modal"
                  data-bs-target={`#appointmentModal${id}`}
                >
                  Book Appointment
                </NavLink>
              </div>
              <br />
              <div>
                <NavLink
                  className="btn-getstarted"
                  to={`/${id}`}
                  onClick={() => {
                    setType("video");
                  }}
                  data-bs-toggle="modal"
                  data-bs-target={`#appointmentModal${id}`}
                >
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
