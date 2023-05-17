import React, { useEffect, useState } from "react";
import DoctorCard from "./../components/DoctorCard";
import Breadcrumb from "./../components/Breadcrumb";
import { Link } from "react-router-dom";
import axios from 'axios';
const Doctor = () => {
  const [specialists, setSpecialists] = useState([]);

  console.log(specialists)
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/doctor/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setSpecialists(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Breadcrumb />
      <div id="doctor" className="section-bg mt-3">
        <div className="container">
          <div className="row">
          {specialists.map((item, key) => (
              <div key={key}>
                <DoctorCard key={item._id} id={item._id} name={item.name} speciality={item.speciality} />
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
