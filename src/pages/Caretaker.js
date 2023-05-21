import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import CaretakerCard from "./../components/CaretakerCard";

const Caretaker = () => {
  document.documentElement.scrollTop = 0;

  const [caretakers, setCaretakers] = useState([]);
  console.log(caretakers);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const address = searchParams.get("address");
  console.log(address);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:4000/api/caretaker?address=${address}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setCaretakers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [address]);

  return (
    <div>
      <Breadcrumb
        title={"Caretakers"}
        length={
          caretakers.length
            ? caretakers.length + "  Caretakers In " + address
            : " "
        }
      />
      <div id="doctor" className="section-bg mt-3">
        <div className="container">
          <div className="row">
            {caretakers.map((item, key) => (
              <div key={key}>
                <CaretakerCard
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  speciality={item.speciality}
                />
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

export default Caretaker;
