import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SpecialityCard = ({ id, name, speciality }) => {
  return (
    <div>
      <div className="container m-3">
        <div className="row">
          <Row>
            <Col>
              <Link>
                <Card bordered={true}>
                  {/* <i class="bi bi-android2"></i>&nbsp; */}
                  <b>{name}</b>
                  <br />
                  {speciality}
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default SpecialityCard;
