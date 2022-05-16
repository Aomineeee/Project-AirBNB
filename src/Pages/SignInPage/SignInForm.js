import React from "react";
import { Form, Input, Button, message } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../reduxStore/userAction";
export default function SignInForm() {
  let dispatch = useDispatch();
  let showErr = (err) => {
    message.error(err);
  };

  const handleSignIn = (values) => {
    dispatch(setUserAction(values, showErr));
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    handleSignIn(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className="container-fluid flex items-center justify-center"
      style={{
        height: "100%",
        backgroundImage:
          "url(https://images.pexels.com/photos/2796627/pexels-photo-2796627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className=" offset-2 col-8 ">
            <div className="bg-white shadow-lg p-20 rounded-xl">
              <h1 className="text-4xl text-gray-700 font-bold text-center mb-12">
                Đăng nhập
              </h1>
              <Form
                name="basic"
                layout="vertical"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Tài khoản"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Mật khẩu"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 4 }}>
                  <div className="flex items-center justify-between mt-10">
                    <Button
                      type="text"
                      htmlType="submit"
                      className="w-32 text-white bg-gradient-to-r flex justify-center items-center  bg-primary-color hover:bg-opacity-80 font-medium rounded-full text-center m-auto px-8 py-5"
                    >
                      Đăng nhập
                    </Button>
                    <NavLink to="/signup">
                      <Button
                        type="text"
                        htmlType="submit"
                        className="w-32 text-primary-color  flex justify-center items-center  border-2 border-primary-color hover:bg-opacity-80 font-medium rounded-full text-center m-auto px-8 py-5"
                      >
                        Đăng ký
                      </Button>
                    </NavLink>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
