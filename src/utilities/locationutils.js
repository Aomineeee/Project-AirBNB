import { Fragment } from "react";
import Quanlyvitri from "../Service/QuanLyViTri.service";
import { Button } from "antd";
import ModalSuaViTri from "../Pages/AdminPages/QuanLyViTri/ModalSuaViTri";

export const getLocationInfor = () => {
  return [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "image",
      key: "image",
      render: (text, record) => {
        return <img className="h-20" src={record.image} alt="..." />;
      },
    },
    {
      title: "Tỉnh",
      dataIndex: "province",
      key: "province",
    },
    {
      title: "Quốc Gia",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Đánh Giá",
      dataIndex: "valueate",
      key: "valueate",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text, record) => (
        <Fragment>
          <ModalSuaViTri id={record._id} />
          <Button
            danger
            className="mx-2"
            onClick={() => {
              if (
                window.confirm(`Bạn có chắc chắn muốn xóa ${record.name} ?`)
              ) {
                Quanlyvitri.XoaViTri_8(record._id)
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
        </Fragment>
      ),
    },
  ];
};
