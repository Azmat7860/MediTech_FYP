import React, { useEffect, useState } from "react";
import MedicineCard from "./../components/MedicineCard";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import axios from "axios";

const Medicine = () => {
  document.documentElement.scrollTop = 0;
  const [medicinesdetail, setMedicinesDetail] = useState([]);
  console.log(medicinesdetail);

  const capitalizeFirstLetter = (str) => {
    return  str.slice(1,-1);
    // + str.charAt(0).toUpperCase();
};

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/medicine/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setMedicinesDetail(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Breadcrumb title={"Medicines"}/>
      <section id="medicine" className="medicine section-bg mt-3">
        <div className="container">
          <div className="row">
            {medicinesdetail.map((item, key) => (
              <div key={key} className="col-sm-6 col-md-4 col-lg-3">
                <MedicineCard key={item._id} id={item._id} title={capitalizeFirstLetter(item.title)} description={item.description} image={item.medicine_image} />
              </div>
            ))}
          </div>
        </div>
        <div class="blog-pagination">
              <ul class="justify-content-center">
                <li class="active">
                  <Link to="/">1</Link>
                </li>
                <li>
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
