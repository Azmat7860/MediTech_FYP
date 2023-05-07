import React, { useState } from "react";
import MedicineCard from "./../components/MedicineCard";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

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
        <div class="blog-pagination">
              <ul class="justify-content-center">
                <li>
                  <Link to="/">1</Link>
                </li>
                <li class="active">
                  <Link to="/">2</Link>
                </li>
                <li>
                  <Link to="/">3</Link>
                </li>
              </ul>
            </div>
      </section>
    </div>
  );
};

export default Medicine;