import React, { useContext, useState } from "react";
import { LockOutlined, UserOutlined ,CloseOutlined} from "@ant-design/icons";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import Breadcrumb from "../../components/Breadcrumb";
import { authContext } from "../../context/authContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = useContext(authContext);
  console.log(auth);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const formData = new FormData();
    formData.append('email', values.email);
    formData.append('password', values.password);

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:4000/caretakerAuth/login',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": "Bearer " + auth.userData.token
    },
    data : formData
  };

  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    auth.setUser(response.data);
    auth.login();
    navigate("/user-dashboard");
  })
  .catch((error) => {
    console.log(error);
    setIsLoggedIn(true);
  });
}

  return (
    <div>
      <Breadcrumb title={"Login"} />
      <main>
        <div class="container">
          <section class="section register min-vh-75 d-flex flex-column align-items-center justify-content-center py-3">
            <div class="container">
              <div className="container" data-aos="fade-up">
                <div className="section-header section-title">
                  <h2>Login</h2>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  {/* <div class="d-flex justify-content-center py-2">
                    <Link
                      to="/"
                      class="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logo192.png" alt="..." /> 
                      <h3 class="d-none d-lg-block">MediTech</h3>
                    </Link>
                  </div> */}
                  {/* <!-- End Logo --> */}

                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="pt-0 pb-0">
                        <h5 class="card-title text-center pb-0 fs-4">
                          Login to Your Account
                        </h5>
                        <p class="text-center small">
                          Enter your username & password to login
                        </p>
                      </div>
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
                      <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                       
                      >
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
                            prefix={
                              <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="example@gmail.com"
                            type="email"
                          />
                        </Form.Item>
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
                            prefix={
                              <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Item>
                        <Form.Item>
                          <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                          >
                            <Checkbox>Remember me</Checkbox>
                          </Form.Item>

                          <a className="login-form-forgot" href="/">
                            Forgot password
                          </a>
                        </Form.Item>

                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button btn btn-primary w-100 p-2"
                          >
                            Log in
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </div>

                  <div class="credits">
                    Designed by
                    <Link to="/">&nbsp;MediTech</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* <!-- End #main --> */}
    </div>
  );
};

export default Login;
