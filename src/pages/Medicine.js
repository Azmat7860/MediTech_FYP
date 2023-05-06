import React, { useState } from "react";
import MedicineCard from "./../components/MedicineCard";
import Breadcrumb from "../components/Breadcrumb";

const Medicine = () => {
  const [cards, setCards] = useState(Array(10).fill(null));
  return (
    <div>
      <Breadcrumb />
      <section id="medicine" className="medicine section-bg mt-3">
        <div className="container">
          <div className="row">
            {cards.map((_, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                <MedicineCard />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-12 text-center show-link mt-2">
          <a
            href="https://www.marham.pk/all-diseases"
            className="btn btn-primary btn-sm semi-round"
          >
            View All Medicines
          </a>
        </div>
      </section>
    </div>
  );
};

export default Medicine;
