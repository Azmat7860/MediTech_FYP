import React from "react";
import { Row, Col, Button } from "antd";
import { Typography } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";
// import axios from "axios";
const { Title } = Typography;

function Register() {
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [size, setSize] = useState('large');
  const onFinish = (values) => {
    console.log("Success:", values);
  }
    // var config = {
      // console.log("first");
    //   method: "POST",
    //   url: "http://localhost:3500/user/register",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: values,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response));
    //     setIsRegistered(true);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  // };
  
  return (
    <>
      {/* {isRegistered && (
        <Alert
          message="User Registered Successfully"
          type="success"
          showIcon
          onClose={() => setIsRegistered(false)}
          closable
          closeIcon={<CloseOutlined />}
        />
      )} */}
      <div id="register">
        <Row>
          <Col span={12} className="register-form">
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
                name="username"
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
                <Form.Item name="remember" className="termsandconditions" valuePropName="checked" noStyle>
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
