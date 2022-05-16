import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select, message } from "antd";
import { updateAvatar } from "../../reduxStore/userAction";
const { Option } = Select;
export default function ThongTinCaNhanPage() {
  let dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.userInfor.user);
  const genders = [
    ["Nam", true],
    ["Nữ", false],
  ];
  const [file, setFile] = useState(null);
  const [fileDisplay, setFileDisplay] = useState(null);
  let showErr = (err) => {
    message.error(err);
  };

  const onchange = (chosenFile) => {
    setFile(chosenFile);
    var reader = new FileReader();
    reader.onload = function (e) {
      setFileDisplay(e.target.result);
    };
    reader.readAsDataURL(chosenFile);
  };

  const handleChangeAvatar = () => {
    const formData = new FormData();
    formData.append("avatar", file);
    dispatch(updateAvatar(formData, showErr));
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {/* huy hiệu */}
          <div className="py-12 md:w-1/3 flex flex-col items-center">
            <div className="w-2/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5">
              <div className="flex flex-col items-center pb-10">
                {!user.avatar ? (
                  <>
                    <img
                      className="mb-3 w-24 h-24 object-cover rounded-full shadow-lg"
                      src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
                      alt=""
                    ></img>
                  </>
                ) : (
                  <>
                    <img
                      className="mb-3 w-24 h-24 object-cover rounded-full shadow-lg"
                      src={user.avatar}
                      alt=""
                    ></img>
                  </>
                )}
                {/* <img
                  className="mb-3 w-24 h-24 object-cover rounded-full shadow-lg"
                  src="https://i.pinimg.com/564x/08/e2/9f/08e29f19d6f03dbc37c5f540d3401fbc.jpg"
                  alt="Bonnie image"
                /> */}
                {/* API cập nhật ảnh cho 1 icon */}
                <label
                  htmlFor="file"
                  className="cursor-pointer"
                  style={{ textDecorationLine: "underline" }}
                >
                  Chọn ảnh
                </label>
                {fileDisplay && (
                  <img
                    className="mb-3 w-24 h-24 object-cover rounded-full shadow-lg"
                    src={fileDisplay}
                    alt=""
                  ></img>
                )}
                <input
                  type="file"
                  id="file"
                  className="d-none"
                  onChange={(e) => onchange(e.target.files[0])}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {user.name}
                </h5>
                {file && (
                  <button
                    className="inline-flex items-center rounded-full py-2 px-3 my-2 text-sm font-medium text-center text-white bg-primary-color border hover:text-primary-color border-primary-color hover:bg-white transition duration-300 focus:outline-none"
                    onClick={handleChangeAvatar}
                  >
                    Cập nhật avatar
                  </button>
                )}
                {/* <p className="text-sm text-left text-gray-500 dark:text-gray-400">
                  Thành viên kim cương
                </p>
                <div className="flex mt-4 space-x-3 lg:mt-6">mô tả</div> */}
              </div>
            </div>
          </div>
          {/* Giới thiệu */}
          <div className="p-12 md:w-2/3 flex flex-col items-start">
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              Xin chào, "{user.name}"
            </h2>
            {/* <p className="leading-relaxed mb-8 text-xs">
              Bắt đầu tham gia vào "ngày"
            </p> */}
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2border-b-2border-gray-100 mt-auto w-full">
              {/* <p> Mô tả</p> */}
              <Form
                name="basic"
                layout="vertical"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="flex space-x-12"
              >
                <div className="w-1/2">
                  <Form.Item
                    label="Tài khoản"
                    name="email"
                    initialValue={user.email}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input disabled={true} style={{ color: "#333" }} />
                  </Form.Item>

                  <Form.Item
                    label="Họ tên"
                    name="name"
                    initialValue={user.name}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input disabled={true} style={{ color: "#333" }} />
                  </Form.Item>
                  <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    initialValue={user.phone}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input disabled={true} style={{ color: "#333" }} />
                  </Form.Item>
                </div>
                <div className="w-1/2">
                  <Form.Item
                    label="Ngày sinh"
                    name="birthday"
                    initialValue={user.birthday.substring(0, 10)}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input disabled={true} style={{ color: "#333" }} />
                  </Form.Item>
                  <Form.Item
                    label="Giới tính"
                    name="gender"
                    initialValue={user.gender}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      defaultValue={user.gender ? genders[0] : genders[1]}
                      style={{ width: 120 }}
                    // onChange={handleGenderChange}
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
                    initialValue={user.address}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input disabled={true} style={{ color: "#333" }} />
                  </Form.Item>

                  {/* <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 4 }}>
                    <div className="flex items-center justify-between mt-6">
                      <Button
                        type="text"
                        htmlType="submit"
                        className="w-32 text-white bg-gradient-to-r flex justify-center items-center  bg-primary-color hover:bg-opacity-80 font-medium rounded-full text-center m-auto px-8 py-5"
                      >
                        Cập nhật
                      </Button>
                    </div>
                  </Form.Item> */}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
