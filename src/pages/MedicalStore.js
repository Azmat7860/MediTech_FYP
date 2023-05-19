import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import MedicalStoreCard from "../components/MedicalStoreCard";

const MedicalStore = () => {
  document.documentElement.scrollTop = 0;

  const [medicalstores, setMedicalStores] = useState([]);
  console.log(medicalstores);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/medicalStore/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setMedicalStores(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Breadcrumb title={"Medical Stores"}/>
      <section id="medicine" className="medicine section-bg mt-3">
        <div className="container">
          <div className="row">
            {medicalstores.map((item, key) => (
              <div key={key} className="col-sm-6 col-md-4 col-lg-3">
                <MedicalStoreCard
                 key={item._id}
                 id={item._id}
                 name={item.name}
                 address={item.address}
                 certification={item.certificate}
                />
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

export default MedicalStore;
