import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SpecialityCard = ({ id, speciality }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Link>
            <Card
              bordered={true}
              style={{
                width: 350,
              }}
            >
              <img
                src={`assets/img/speciality/head-with-brain1.png`}
                className="rounded-circle"
                alt=""
                width={50}
                height={50}
              />
              &nbsp;&nbsp;
              <Link
                to={`/doctor?speciality=${encodeURIComponent(speciality)}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = e.target.href;
                }}
              >
                {speciality}
              </Link>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialityCard;
