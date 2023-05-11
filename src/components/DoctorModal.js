import React from "react";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Form, Input } from "antd";
import axios from "axios";

const DoctorModal = ({ apiEndpoint }) => {
  console.log(apiEndpoint);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("phone", values.phone);
    formData.append("address", values.address);
    // eslint-disable-next-line no-lone-blocks
    {
      apiEndpoint === "http://localhost:4000/doctorAuth/register" ||
      apiEndpoint === "http://localhost:4000/caretakerAuth/register"
        ? formData.append("speciality", values.speciality)
        : formData.append("certificate", values.certificate);
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: apiEndpoint,
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div
        class="modal fade"
        id="doctorModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-success text-white">
              <h5 class="modal-title" id="exampleModalLabel">
                Sign up as Doctor
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
                name="doctor_form"
                className="doctor-form"
                initialValues={{
                  remember: true,
                }}
                form={form}
                onFinish={onFinish}
              >
                <Form.Item
                  name="name"
                  //   label="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Enter your Name"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  //   label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="Enter Your Email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  //   label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Enter your Password"
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  //   label="Phone#"
                  rules={[
                    {
                      required: true,
                      message: "Enter your Phone Number",
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined className="site-form-item-icon" />}
                    placeholder="Enter your Phone Number"
                  />
                </Form.Item>
                <Form.Item
                  name="address"
                  //   label="City"
                  rules={[
                    {
                      required: true,
                      message: "Enter your City Name",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Enter your City name"
                  />
                </Form.Item>

                {apiEndpoint ===
                  "http://localhost:4000/doctorAuth/register" && (
                  <Form.Item
                    name="speciality"
                    //   label="City"
                    rules={[
                      {
                        required: true,
                        message: "Enter your Speciality Name",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Enter your Speciality"
                    />
                  </Form.Item>
                )}

                {apiEndpoint ===
                  "http://localhost:4000/caretakerAuth/register" && (
                  <Form.Item
                    name="speciality"
                    //   label="City"
                    rules={[
                      {
                        required: true,
                        message: "Enter your Speciality Name",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Enter your Speciality"
                    />
                  </Form.Item>
                )}

                {apiEndpoint === "http://localhost:4000/labAuth/register" && (
                  <Form.Item
                    name="cetificate"
                    //   label="City"
                    rules={[
                      {
                        required: true,
                        message: "Enter your Speciality Name",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Enter your Certificates"
                    />
                  </Form.Item>
                )}
                {apiEndpoint ===
                  "http://localhost:4000/medicalStoreAuth/register" && (
                  <Form.Item
                    name="cetificate"
                    //   label="City"
                    rules={[
                      {
                        required: true,
                        message: "Enter your Speciality Name",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Enter your Certificates"
                    />
                  </Form.Item>
                )}

                <div className="d-flex flex-row-reverse">
                  <button
                    type="submit"
                    class="btn btn-success mx-1 display-end"
                  >
                    Sign up
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal;
