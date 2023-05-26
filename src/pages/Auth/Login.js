import React, { useContext, useState } from "react";
import { Row, Col, Button } from "antd";
import { Typography } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { LockOutlined, MailOutlined, CloseOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Alert } from "antd";
import Breadcrumb from "../../components/Breadcrumb";
import { authContext } from '../../context/authContext';
import axios from "axios";
const { Title } = Typography;

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const auth = useContext(authContext);
  console.log(auth);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const formData = new FormData();
    formData.append('email', values.email);
    formData.append('password', values.password);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        auth.setUser(response.data);
        auth.login();
      })
      .catch((error) => {
        console.log(error);
        setIsLoggedIn(true);
      });
  };

  return (
    <>
      <div>
        <Breadcrumb />
      </div>
      <div id="login">
        <Row>
          <Col span={8} className="login-content">
            <Title level={1}>WELCOME BACK</Title>
            <p>Enter Your Crediential To Login</p>
            <Title level={3}>OR</Title>
            <NavLink to={"/register"}>
              <Button
                type="light"
                className="btn-reg"
                shape="round"
                icon={<UserAddOutlined />}
              >
                Register
              </Button>
            </NavLink>
          </Col>

          <Col span={11} className="login-form">
            {isLoggedIn && (
              <Alert
                message="Invalid Email and Password"
                type="error"
                showIcon
                onClose={() => setIsLoggedIn(false)}
                closable
                closeIcon={<CloseOutlined />}
              />
            )}
            <Title level={1}>LOGIN</Title>
            <Form
              name="normal_login"
              // className="login-form"
              id="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
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
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
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
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <NavLink className="login-form-forgot" to="/">
                  Forgot password?
                </NavLink>
              </Form.Item>

              <Form.Item>
                <Button
                  type="success"
                  shape="round"
                  htmlType="submit"
                  className="login-form-button"
                  // size={size}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;
