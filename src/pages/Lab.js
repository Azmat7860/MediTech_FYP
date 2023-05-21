import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";
import LabCard from "../components/LabCard";

const Lab = () => {
  document.documentElement.scrollTop = 0;

  const [lab, setLab] = useState([]);
  console.log(lab);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const labName = searchParams.get("name");
  const address = searchParams.get("address");
  console.log(address);

  useEffect(() => {
    if (labName) {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/lab?name=${labName}`,
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data.data));
          setLab(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (address) {
      let config2 = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/lab?address=${address}`,
        headers: {},
      };

      axios
        .request(config2)
        .then((response) => {
          console.log(JSON.stringify(response.data.data));
          setLab(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/lab`,
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data.data));
          setLab(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [labName, address]);

  return (
    <div>
      <Breadcrumb
        title={"Labs"}
        length={lab.length ? lab.length + "  Labs In " + address : " "}
      />
      <section id="medicine" className="medicine section-bg mt-3">
        <div className="container">
          <div className="row">
            {lab.map((item, key) => (
              <div key={key} className="col-sm-6 col-md-4 col-lg-3">
                <LabCard
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

export default Lab;
