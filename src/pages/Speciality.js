import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import SpecialityCard from '../components/SpecialityCard'
import { useState } from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';

const Speciality = () => {
  document.documentElement.scrollTop = 0;
  const [specialists, setSpecialists] = useState([]);
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const specialityName = searchParams.get("speciality");
  // const address = searchParams.get("address");
  // console.log(location.state.city);

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
         <Breadcrumb title={"All Specialists"} length={specialists.length + " Specialists"} />
      <section id="medicine" className="medicine section-bg mt-3">
        <div className="container">
          <div className="row">
            {specialists.map((item, key) => (
              <div key={key} className="col-sm-6 col-md-4 col-lg-4 my-2">
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