import { Button, Tag } from "antd";
import { Fragment } from "react";
import Quanlynguoidung from "../Service/QuanLyNguoiDung.service";
import ModalSuaNguoiDung from "../Pages/AdminPages/QuanLyNguoiDung/ModalSuaNguoiDung";

export const getUserInfor = () => {
  return [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => {
        return <p>{gender ? "Nam" : "Nữ"}</p>;
      },
    },
    {
      title: "Hình Ảnh",
      dataIndex: "image",
      key: "image",
      render: (text, record) => {
        return <img className="h-12" src={record.avatar} alt="..." />;
      },
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Vai trò",
      key: "type",
      dataIndex: "type",
      render: (type) => (
        <>
          {type === "ADMIN" ? (
            <Tag className="border-red-800 border-2 bg-red-500">Quản lý</Tag>
          ) : (
            <Tag className="border-pink-800 border-2 bg-pink-500">
              Người dùng
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text, record) => (
        <Fragment>
          <>
            {/* <Button className="mx-2 bg-green-400 hover:text-black"> */}
            <ModalSuaNguoiDung id={record._id} />
            {/* </Button> */}
            <Button
              danger
              className="mx-2"
              onClick={() => {
                if (
                  window.confirm(`Bạn có chắc chắn muốn xóa ${record.name} ?`)
                ) {
                  Quanlynguoidung.XoaNguoiDung_4(record._id)
                    .then((res) => {
                      window.location.reload();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }}
            >
              Xóa
            </Button>
          </>
        </Fragment>
      ),
    },
  ];
};
