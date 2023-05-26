import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import HorizontalCards from "./HorizontalCards";
// import TopSpecialist from './TopSpecialist';
// import TopDisease from './TopDisease';
import CallToAction from "./CallToAction";
import Step from "./Step";
import Feedback from "./Feedback";
import Partner from "./Partner";
import RecentBlogs from "./Health Blog/RecentBlogs";
import Services from "./Services";
import TopMedicine from "./TopMedicine";
import { useNavigate } from "react-router";
import axios from "axios";
// import { Link, useLocation } from "react-router-dom";

const Home = () => {
  document.documentElement.scrollTop = 0;

  const [specialists, setSpecialists] = useState([]);
  console.log(specialists);

  const navigate = useNavigate();

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);
  };

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:4000/api/doctor?limit=8`,
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
  }, []);

  const uniqueLocations = [...new Set(specialists.map((item) => item.address))];
  console.log(uniqueLocations);
  const uniqueSpecialities = [
    ...new Set(specialists.map((item) => item.speciality)),
  ];

  const handleSearch = () => {
    // navigate("/speciality");
    navigate(`/doctor?address=${selectedLocation}&speciality=${selectedSpeciality}`);
  };
  return (
    <div>
      <section
        className="filter overflow-visible bg-tertiary with-header"
        id="start"
      >
        <div className="d-flex flex-column" data-aos="zoom-in">
          <div className="container order-1 order-md-1 pt-5 pb-md-5 mt-5">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1">
                <div className="text-center text-white">
                  <h2 className="display-6">
                    <span className="opacity-75">Find and Book</span>
                    <br />
                    <Typewriter
                      options={{
                        strings: ["The Best Doctors Near You!"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h2>
                </div>
              </div>
            </div>

            <div className="filter_form bg-white shadow-lg">
              <form method="Post">
                <div className="row mx-n2 d-flex align-items-center">
                  <div className="col-12 col-md col-lg-5 d-flex flex-column my-1 px-3">
                    <div className="form-group-overlay first">
                      <label htmlFor="locations">Location</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={handleLocationChange}
                        value={selectedLocation}
                      >
                        <option value="">Select Location</option>
                        {uniqueLocations.map((location, key) => (
                          <option key={key} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md col-lg-5 d-flex flex-column my-1 px-3">
                    <div className="form-group-overlay">
                      <label htmlFor="doctors">Doctor</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={handleSpecialityChange}
                        value={selectedSpeciality}
                      >
                        <option value="">Select Speciality</option>
                        {uniqueSpecialities.map((speciality, key) => (
                          <option key={key} value={speciality}>
                            {speciality}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 col-lg-2 px-2">
                    <button
                      className="btn btn-success btn-block h-100 btn-search"
                      type="submit"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <HorizontalCards />
      {/* <TopSpecialist /> */}
      <TopMedicine />
      {/* <TopDisease /> */}
      <CallToAction />
      <Step />
      <Feedback />
      <Partner />
      <RecentBlogs />
      <Services />
    </div>
  );
};

export default Home;
