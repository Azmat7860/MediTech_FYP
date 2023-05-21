import React from "react";
import { Link } from "react-router-dom";

const MedicalStoreCard = ({ id, name, address, certification }) => {
  return (
    <div>
      <div class="card h-100 my-3">
        <img src={"image"} class="" alt="" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            {address}
            <br />
            <span>{certification}</span>
          </p>
        </div>
        <div
          class="d-flex justify-content-start rounded-3 p-2 m-2"
          style={{ backgroundColor: "#efefef", maxWidth: "300px" }}
        >
          <div>
            <p class="small text-muted mb-1">Reviews</p>
            <p class="mb-0">13</p>
          </div>
          <div class="px-4">
            <p class="small text-muted mb-1">Experience</p>
            <p class="mb-0">2 years</p>
          </div>
          <div>
            <p class="small text-muted mb-1">Service</p>
            <p class="mb-0">24 hours</p>
          </div>
        </div>
        <div class="card-footer">
          <Link
            to="/"
            class="login-form-button btn btn-success w-100 p-2 text-white"
          >
            Read More
          </Link>
          <Link to="/" class="login-form-button btn btn-primary w-100 p-2">
            View Medicine
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MedicalStoreCard;
