import React from "react";

const MedicineCard = () => {
  return (
    <div>
      <div class="card h-100 my-5" style={{ width: "18rem"}}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-success">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
