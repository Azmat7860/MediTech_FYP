import React from "react";
import { Link } from "react-router-dom";

const LabCard = ({id,name,address,certification}) => {
  return (
    <div>
      <div class="card h-100 my-3">
        <img src={"image"} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{address}
          <br/>
          <span>{certification}</span>
          </p>
        </div>
        <div class="card-footer">
          <Link to="/" class="btn btn-success">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LabCard;
