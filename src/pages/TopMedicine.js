import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const TopMedicine = () => {
  const [medicines, setMedicines] = useState([]);
  console.log(medicines);

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
        setMedicines(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <section id="clients" class="clients">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center mt-3">
            <h3>Top Searched Medicines</h3>
          </div>
        </div>
        <div class="container" data-aos="zoom-out">
          <div className="our-services">
            <div className="row d-flex justify-contnet-center">
              <div class="clients-slider swiper">
                <div class="swiper-wrapper align-items-center">
                  {medicines &&
                    medicines.map((item, key) => {
                      return (
                        <div class="swiper-slide" key={key}>
                          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="text-center mb-30">
                              <div className="services-ion">
                                {/* <span className="flaticon-tour">
                                  <img src={item.medicine_image} alt="..." />
                                </span> */}
                              </div>

                              <div className="services-cap">
                                <h5>
                                  <Link to="/medicine">{capitalizeFirstLetter(item.title)}</Link>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center show-link mt-5">
          <NavLink to="/medicine" className="btn btn-primary btn-sm semi-round">
            View All Medicine
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default TopMedicine;
