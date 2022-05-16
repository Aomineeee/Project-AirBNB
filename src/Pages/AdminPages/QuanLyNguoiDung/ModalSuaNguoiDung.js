import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import Quanlynguoidung from "../../../Service/QuanLyNguoiDung.service";
import { useDispatch, useSelector } from "react-redux";
import { getUserUpdate } from "../../../reduxStore/userAction";

function ModalSuaNguoiDung({ id }) {
  const { Option } = Select;
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const { userUpdate } = useSelector((root) => root.userSlice);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(userUpdate);
  }, [form, userUpdate]);

  let dispatch = useDispatch();

  const showModal = () => {
    // dispatch lên store cái asynaction để useseloector về bind lên form
    dispatch(getUserUpdate(id));
    setVisible(true);
  };

  const handleOk = () => { };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    handleEdit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleEdit = (values) => {
    Quanlynguoidung.CapNhatNguoiDung_5(id, values)
      .then((res) => {
        Modal.success({
          title: "Thành công",
          content: "Cập nhật thành công",
          onOk() {
            window.location.reload();
          },
        });
      })
      .catch((err) => {
        Modal.error({
          title: "Thất bại",
          content: "Cập nhật thất bại",
        });
      });
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="my-5 uppercase">
        Sửa
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
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 24 }}
          initialValues={userUpdate}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tên"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
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
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Địa Chỉ"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Giới Tính"
            rules={[{ required: true, message: "Please input your gender!" }]}
          >
            <Input.Group compact>
              <Form.Item name={["gender"]} noStyle>
                <Select placeholder="Select gender">
                  <Option value={true}>Nam</Option>
                  <Option value={false}>Nữ</Option>
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item
            label="Vai Trò"
            rules={[{ required: true, message: "Please input your type!" }]}
          >
            <Input.Group compact>
              <Form.Item name={["type"]} noStyle>
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
              >
                Cập Nhật
              </Button>
              <Button
                type="text"
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

export default ModalSuaNguoiDung;
