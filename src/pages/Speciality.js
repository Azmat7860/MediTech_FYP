import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import SpecialityCard from '../components/SpecialityCard'
import { useState } from 'react';
import axios from 'axios';

const Speciality = () => {
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
      <section id="medicine" className="medicine section-bg mt-3">
        <div className="container">
          <div className="row">
            {specialists.map((item, key) => (
              <div key={key} className="col-sm-6 col-md-4 col-lg-3">
                <SpecialityCard key={item._id} id={item._id} name={item.name} speciality={item.speciality} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Speciality