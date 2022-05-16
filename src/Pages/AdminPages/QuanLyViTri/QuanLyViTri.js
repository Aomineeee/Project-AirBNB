import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Quanlyvitri from "../../../Service/QuanLyViTri.service";
import { getLocationInfor } from "../../../utilities/locationutils";
import ModalQuanLyViTri from "./ModalQuanLyVitri";

export default function QuanLyViTri() {
  let [dataLocation, setDataLocation] = useState();
  useEffect(() => {
    handleGetLocation();
  }, []);
  const handleGetLocation = () => {
    Quanlyvitri.LayDSViTri_9()
      .then((res) => {
        setDataLocation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <ModalQuanLyViTri handleAddLocation={handleGetLocation} />
      <Table
        columns={getLocationInfor()}
        dataSource={dataLocation}
        rowKey={(record) => record._id}
      />
    </>
  );
}
