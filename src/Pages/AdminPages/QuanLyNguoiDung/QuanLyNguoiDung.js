import React, { useEffect, useState } from "react";
import { Table } from "antd";
import ModalQuanLyNguoiDung from "./ModalQuanLyNguoiDung";
import { getUserInfor } from "../../../utilities/userutils";
import Quanlynguoidung from "../../../Service/QuanLyNguoiDung.service";

export default function QuanLyNguoiDung() {
  let [dataUser, setDataUser] = useState();
  useEffect(() => {
    handleGetUser();
  }, []);
  const handleGetUser = () => {
    Quanlynguoidung.LayDanhSachNguoiDungPhanTrang_3()
      .then((res) => {
        setDataUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <ModalQuanLyNguoiDung handleAddUser={handleGetUser} />
      <Table columns={getUserInfor()} dataSource={dataUser} />
    </>
  );
}
