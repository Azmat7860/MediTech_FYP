import React from "react";
import { Card, Col, Row } from "antd";

const SpecialityModal = () => {
  return (
    <div>
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
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
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true}>
                  <i class="bi bi-android2"></i>&nbsp;
                    Card content
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialityModal;
