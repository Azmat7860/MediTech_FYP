import axios from "axios";
import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";

const AppointmentModal = ({ id, name, type }) => {
  console.log(id);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form2323: ", type);
    const formData = new FormData();
    formData.append("patient_name", values.patient_name);
    formData.append("appointment_type", type);
    formData.append("phone", values.phone);
    formData.append("doctor_id", id);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/appointment/",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate("/booked-appointment");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div
        class="modal fade"
        id={`appointmentModal${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header text-white text-center bg-success">
              <h5 class="modal-title" id="exampleModalLabel">
                Book Appointment with {name}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="patient_name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Enter Your Name"
                    type="text"
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Phone Number!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="e.g 03150470727"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button btn btn-primary w-100 p-2"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = e.target.href;
                    }}
                  >
                    Book Appointment
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
