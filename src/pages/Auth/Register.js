import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { Typography } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Alert, Form, Input, Checkbox } from "antd";
import {
  // PlusOutlined,
  MailOutlined,
  LockOutlined,
  // UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import axios from "axios";
import Breadcrumb from "../../components/Breadcrumb";
const { Title } = Typography;

function Register() {
  const [isRegistered, setIsRegistered] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);

    let config = {
      method: "post",
      url: "http://localhost:4000/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setIsRegistered(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <Breadcrumb />
      </div>
      <div id="register">
        <Row>
          <Col span={12} className="register-form">
            {isRegistered && (
              <Alert
                message="User Registered Successfully"
                type="success"
                showIcon
                onClose={() => setIsRegistered(false)}
                closable
                closeIcon={<CloseOutlined />}
              />
            )}
            <Title level={1}>REGISTER</Title>
            <Form
              name="normal_register"
              id="register-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <label>
                <b>Name</b>
              </label>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Enter Your Name"
                />
              </Form.Item>
              <label>
                <b>Email</b>
              </label>
              <Form.Item
                name="email"
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
              <label>
                <b>Password</b>
              </label>
              <Form.Item
                name="password"
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
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item
                  name="remember"
                  className="termsandconditions"
                  valuePropName="checked"
                  noStyle
                >
                  <Checkbox>I Agree Terms and Conditions</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type="success"
                  shape="round"
                  htmlType="submit"
                  className="register-form-button"
                  // size={size}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={8} id="register-content">
            <Title level={1}>HELLO, FRIEND! </Title>
            <p>Enter Your Details To Register</p>
            <Title level={3}>OR</Title>
            <NavLink to={"/login"}>
              <Button
                type="light"
                className="btn-reg"
                shape="round"
                icon={<LoginOutlined />}
              >
                Login
              </Button>
            </NavLink>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Register;
