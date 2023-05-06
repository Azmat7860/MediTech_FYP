import { Card, Col, Row } from "antd";
import React from "react";

const SpecialityCard = () => {
  return (
    <div>
      <div className="container m-3">
        <div className="row">
          <Row>
            <Col>
              <Card bordered={true}>
                <i class="bi bi-android2"></i>&nbsp; Card content
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default SpecialityCard;
