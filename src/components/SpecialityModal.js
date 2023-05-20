import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const SpecialityModal = () => {
  const [specialists, setSpecialists] = useState([]);

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
      <div
        class="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header text-white text-center bg-success">
              <h5 class="modal-title" id="exampleModalLabel">
                Book Appointment with PMC verified Doctors
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Row gutter={16}>
                {specialists.map((item, key) => (
                  <Col span={8} className="my-2">
                    <Link>
                      <Card
                        bordered={true}
                        key={key}
                      >
                        <img
                          src={`assets/img/speciality/head-with-brain${key+1}.png`}
                          className="rounded-circle"
                          alt="..."
                          width={50}
                          height={50}
                        />&nbsp;&nbsp;
                        <Link to={`/doctor?speciality=${item.speciality}`}>{item.speciality}</Link>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialityModal;
