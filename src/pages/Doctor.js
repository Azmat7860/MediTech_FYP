import React, { useEffect, useState } from "react";
import DoctorCard from "./../components/DoctorCard";
import Breadcrumb from "./../components/Breadcrumb";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
const Doctor = () => {
  document.documentElement.scrollTop = 0;
  
  const [specialists, setSpecialists] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const specialityName = searchParams.get('speciality');
  const address = searchParams.get('address');
  console.log(address)

  useEffect(() => {
    if (specialityName) {
      
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:4000/api/doctor?speciality=${specialityName}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
          setSpecialists(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }else{

      let config2 = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/doctor?address=${address}`,
        headers: {},
      };
  
      axios
        .request(config2)
        .then((response) => {
          console.log(JSON.stringify(response.data.data));
            setSpecialists(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
      }

  }, [specialityName,address]);

  return (
    <div>
      <Breadcrumb title={"Doctors"} length={specialists.length ? specialists.length + " " + (specialityName ? (specialists.length > 1 ? specialityName + " Doctors " : specialityName + " Doctor ")  : specialists.length > 1 ? " Doctors In " + address : " Doctor In " + address ) : " " }/>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
