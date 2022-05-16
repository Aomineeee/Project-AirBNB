import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import Quanlyvitri from "../../../Service/QuanLyViTri.service";

function ModalQuanLyViTri(props) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    handleAddLocation(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleAddLocation = (data) => {
    Quanlyvitri.TaoViTri_7(data)
      .then((res) => {
        console.log(res);
        props.handleAddLocation(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="my-5 uppercase">
        Thêm vị trí
      </Button>
      <Modal
        title="THÊM VỊ TRÍ"
        visible={visible}
        onCancel={() => setVisible(false)}
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
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tỉnh"
            name="province"
            rules={[{ required: true, message: "Please input your province!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Quốc Gia"
            name="country"
            rules={[{ required: true, message: "Please input your country!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Đánh Giá"
            name="valueate"
            rules={[{ required: true, message: "Please input your valueate!" }]}
          >
            <Input placeholder="Ex:8/10" />
          </Form.Item>
          {/* <Form.Item label="Hình Ảnh" name="image">
            <Fragment>
              <img
                className="max-w-sm h-20 flex justify-center items-center"
                src={imgSrc ? imgSrc : props.Record.image}
              />
              <div className="max-w-lg">
                <label
                  htmlFor="files"
                  className="mt-2 p-2 bg-gray-100 cursor-pointer"
                >
                  Chọn hình ảnh
                </label>
                <input
                  id="files"
                  style={{ visibility: "hidden" }}
                  type="file"
                  onChange={changeImg}
                />
              </div>
            </Fragment>
          </Form.Item> */}
          <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 4 }}>
            <div className="flex items-center justify-between">
              <Button
                type="text"
                htmlType="submit"
                className="text-white bg-gradient-to-r flex justify-center items-center  from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg text-center m-auto px-10 py-5"
              >
                Thêm
              </Button>
              <Button
                type="text"
                htmlType="submit"
                className="text-white bg-gradient-to-r flex justify-center items-center from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg text-center m-auto px-10 py-5"
                onClick={() => setVisible(false)}
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

export default ModalQuanLyViTri;
