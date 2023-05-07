import React, { useState } from "react";
import DoctorCard from "./../components/DoctorCard";
import Breadcrumb from "./../components/Breadcrumb";
import { Link } from "react-router-dom";

const Doctor = () => {
  const [cards, setCards] = useState(Array(10).fill(null));

  return (
    <div>
      <Breadcrumb />
      <div id="doctor" className="section-bg mt-3">
        <div className="container">
          <div className="row">
            {cards.map((_, index) => (
              <div key={index}>
                <DoctorCard />
              </div>
            ))}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
