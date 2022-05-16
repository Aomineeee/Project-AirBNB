import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Input, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getLocationUpdate, updateImageLocation } from "../../../reduxStore/locationAction";
import Quanlyvitri from "../../../Service/QuanLyViTri.service";

function ModalSuaViTri({ id }) {
  const [visible, setVisible] = useState(false);
  const { locationUpdate } = useSelector((root) => root.locationSlice);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(locationUpdate);
  }, [form, locationUpdate]);

  let dispatch = useDispatch();

  const showModal = () => {
    dispatch(getLocationUpdate(id));
    setVisible(true);
  };


  const onFinish = (values) => {
    console.log("Success:", values);
    handleEdit(values);
    setVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setVisible(false);
  };
  const handleEdit = (values) => {
    Quanlyvitri.CapNhatTTViTri_11(id, values)
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

  const [imageSRC, setImageSRC] = useState(false);
  const [uploadFile, setUploadFile] = useState(null)

  let changeImg = (image) => {
    setImageSRC(URL.createObjectURL(image));
    setUploadFile(image);
  }

  let handleUpdateImage = () => {
    let data = new FormData();
    data.append("location", uploadFile);
    dispatch(updateImageLocation({ id, data })).unwrap()
      .then((res) => {
        setImageSRC(null);
      })
  }

  return (
    <>
      <Button type="primary" onClick={showModal} className="my-5 uppercase">
        Sửa
      </Button>
      <Modal
        title="Chỉnh sửa vị trí"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form
          name="basic"
          form={form}
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
            <Input />
          </Form.Item>
          <Form.Item label="Hình Ảnh" name="image">
            <div className="w-full flex">
              <div className="w-1/2">
                <Image
                  className="w-40 h-3/4 object-cover"
                  src={locationUpdate.image}
                  alt="..."
                />
                <label
                  htmlFor="files"
                  className="inline-flex items-center rounded-full py-2 px-3 my-2 mx-2
                   text-sm font-medium text-center text-white bg-primary-color border hover:text-primary-color border-primary-color hover:bg-white transition duration-300 focus:outline-none cursor-pointer"
                >
                  Chọn hình ảnh cập nhật
                </label>
                <input
                  id="files"
                  style={{ display: "none" }}
                  type="file"
                  accept=".jpg"
                  onChange={(e) => changeImg(e.target.files[0])}
                />
              </div>
              {imageSRC && (
                <div className=" w-1/2">
                  <Image
                    className="w-40 h-3/4 object-cover"
                    src={imageSRC}
                    alt="..."
                  />
                  <button
                    className="inline-flex items-center rounded-full py-2 px-3 my-2 mx-2
                     text-sm font-medium text-center text-white bg-primary-color border hover:text-primary-color border-primary-color hover:bg-white transition duration-300 focus:outline-none cursor-pointer"
                    onClick={handleUpdateImage}
                  >
                    Cập nhật hình ảnh
                  </button>
                </div>
              )}
            </div>
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
                className="text-white bg-gradient-to-r flex justify-center items-center from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg text-center m-auto px-10 py-5"
                onClick={(e) => onFinishFailed(e)}
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

export default ModalSuaViTri;
