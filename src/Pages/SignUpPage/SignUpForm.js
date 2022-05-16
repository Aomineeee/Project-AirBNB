import React from "react";
import { Form, Input, Button, Select, message } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../reduxStore/userAction";
const { Option } = Select;
// const provinceData = ["Zhejiang", "Jiangsu"];
// const cityData = {
//   Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
//   Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
// };
export default function SignUpForm() {
  let dispatch = useDispatch();
  let showErr = (err) => {
    message.error(err);
  };

  const handleSignUp = (values) => {
    console.log(values);
    dispatch(registerUserAction(values, showErr));
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    handleSignUp(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const genders = [
    ["Nam", true],
    ["Nữ", false],
  ];
  const [gender, setGender] = React.useState(genders[0]);
  // const [secondCity, setSecondCity] = React.useState(
  //   cityData[provinceData[0]][0]
  // );

  const handleGenderChange = (value) => {
    setGender(value === "nam" ? genders[0] : genders[1]);
  };

  // const onSecondCityChange = (value) => {
  //   setSecondCity(value);
  // };

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
            <div className="bg-white shadow-lg py-10 px-20 rounded-xl">
              <h1 className="text-4xl text-gray-700 font-bold text-center mb-6">
                Đăng ký
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
                className="flex space-x-12"
              >
                <div className="w-1/2">
                  <Form.Item
                    label="Tài khoản"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên tài khoản!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="Họ tên"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên tài khoản!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số điện thoại!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <div className="w-1/2">
                  <Form.Item
                    label="Ngày sinh"
                    name="birthday"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập ngày sinh",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Giới tính"
                    name="gender"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn giới tính!",
                      },
                    ]}
                  >
                    <Select
                      defaultValue={gender}
                      style={{ width: 120 }}
                      onChange={handleGenderChange}
                    >
                      {genders.map((item) => (
                        <Option key={item[0]} value={item[1]}>
                          {item[0]}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập địa chỉ!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 4 }}>
                    <div className="flex items-center justify-between mt-6">
                      <Button
                        type="text"
                        htmlType="submit"
                        className="w-32 text-white bg-gradient-to-r flex justify-center items-center  bg-primary-color hover:bg-opacity-80 font-medium rounded-full text-center m-auto px-8 py-5"
                      >
                        Đăng ký
                      </Button>
                      <NavLink to="/signin">
                        <Button
                          type="text"
                          htmlType="submit"
                          className="w-32 text-primary-color  flex justify-center items-center  border-2 border-primary-color hover:bg-opacity-80 font-medium rounded-full text-center m-auto px-8 py-5"
                        >
                          Đăng nhập
                        </Button>
                      </NavLink>
                    </div>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
