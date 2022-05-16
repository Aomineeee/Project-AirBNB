import React from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import Quanlynguoidung from "../../../Service/QuanLyNguoiDung.service";

function ModalQuanLyNguoiDung(props) {
  const { Option } = Select;
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    handleAddUser(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleAddUser = (data) => {
    Quanlynguoidung.TaoNguoidung_1(data)
      .then((res) => {
        console.log(res);
        props.handleAddUser(true);
        console.log(props.handleAddUser);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };
  return (
    <>
      <Button type="primary" onClick={showModal} className="my-5 uppercase">
        Thêm quản trị viên
      </Button>
      <Modal
        title="THÊM QUẢN TRỊ VIÊN"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tên"
            name="name"
            rules={[{ required: true, message: "Please input your account!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Please input your phonenumber!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Địa Chỉ"
            name="address"
            rules={[
              { required: true, message: "Please input your phonenumber!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Giới Tính">
            <Input.Group compact>
              <Form.Item
                name={["gender"]}
                noStyle
                rules={[{ required: true, message: "Province is required" }]}
              >
                <Select placeholder="Select gender">
                  <Option value={true}>Nam</Option>
                  <Option value={false}>Nữ</Option>
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Vai Trò">
            <Input.Group compact>
              <Form.Item
                name={["type"]}
                noStyle
                rules={[{ required: true, message: "Province is required" }]}
              >
                <Select placeholder="Select type">
                  <Option value="ADMIN">Quản lý</Option>
                  <Option value="CLIENT">Người dùng</Option>
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 4 }}>
            <div className="flex items-center justify-between">
              <Button
                type="text"
                htmlType="submit"
                className="text-white bg-gradient-to-r flex justify-center items-center  from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg text-center m-auto px-10 py-5"
                onClick={handleOk}
              >
                Thêm
              </Button>
              <Button
                type="text"
                htmlType="submit"
                className="text-white bg-gradient-to-r flex justify-center items-center from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg text-center m-auto px-10 py-5"
                onClick={handleCancel}
              >
                Hủy
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalQuanLyNguoiDung;
