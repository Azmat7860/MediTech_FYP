import React from "react";
import { Link } from "react-router-dom";

const MedicineCard = () => {
  return (
    <div>
      <div class="card h-100 my-3">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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

export default MedicineCard;
