import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import MedicalStoreCard from "../components/MedicalStoreCard";

const MedicalStore = () => {
  document.documentElement.scrollTop = 0;

  const [medicalstores, setMedicalStores] = useState([]);
  console.log(medicalstores);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const medicalstoreName = searchParams.get("name");
  const address = searchParams.get("address");
  console.log(address);

  useEffect(() => {
    if (medicalstoreName) {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/medicalstore?name=${medicalstoreName}`,
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data.data));
          setMedicalStores(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (address) {
      let config2 = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/medicalstore?address=${address}`,
        headers: {},
      };

      axios
        .request(config2)
        .then((response) => {
          console.log(JSON.stringify(response.data.data));
          setMedicalStores(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/medicalstore`,
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data.data));
          setMedicalStores(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [medicalstoreName, address]);

  return (
    <div>
      <Breadcrumb
        title={"Medical Stores"}
        length={
          medicalstores.length
            ? medicalstores.length + "  Medical Stores In " + address
            : " "
        }
      />
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

export default MedicalStore;
