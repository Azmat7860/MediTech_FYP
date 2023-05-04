import React from "react";
import { Row, Col, Button } from "antd";
import { Typography } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";
import Breadcrumb from "../../components/Breadcrumb";
// import axios  from 'axios';
const { Title } = Typography;

function Login() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [size, setSize] = useState('large');

    const onFinish = (values) => {
      console.log("Received values of form: ", values);
      // var config = {
      //   method: "POST",
      //   url: "http://localhost:3500/user/login",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   data: values,
      // };

      // axios(config)
      //   .then(function (response) {
      //     console.log(JSON.stringify(response.data));
      //     // auth.setUser(response.data);
      //     // auth.login();
      //     if (response.response.status === 401) {
      //       setIsLoggedIn(true);
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    };
 
  return (
    <>
    <div>
      <Breadcrumb/>
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
              {/* {isLoggedIn && (
                <Alert
                  message="Unauthorized"
                  type="error"
                  onClose={() => setIsLoggedIn(false)}
                  closable
                  closeIcon={<CloseOutlined />}
                />
              )} */}
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
