import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const LabModal = () => {
  const [labs, setLabs] = useState([]);
  console.log(labs);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/lab/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setLabs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div
        class="modal fade"
        id="labModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header text-white text-center bg-success">
              <h5 class="modal-title" id="exampleModalLabel">
                Book Lab Test
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
                {labs.map((item, key) => (
                  <Col span={8} className="my-2">
                    <Card bordered={true} key={key}>
                      {/* <FontAwesomeIcon icon={item.icon} />&nbsp; */}
                      <img
                        src="assets/img/speciality/covid.png"
                        className="rounded-circle"
                        alt="..."
                        width={50}
                        height={50}
                      />
                      &nbsp;&nbsp;
                      <Link
                        to={`/lab?name=${encodeURIComponent(
                          item.name
                        )}`}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = e.target.href;
                        }}
                      >
                        {item.name}
                      </Link>
                    </Card>
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

export default LabModal;
