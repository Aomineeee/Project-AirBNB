import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class quanLyNguoiDung {
  constructor() { }
  LayDanhSachNguoiDungPhanTrang_3 = () => {
    const uri = "/api/users/";
    return AxiosServ.getMethod(uri);
  };
  LayThongTinChiTietNguoiDung_2 = (id) => {
    const uri = `/api/users/${id}`;
    return AxiosServ.getMethod(uri);
  };
  TaoNguoidung_1 = (data) => {
    const uri = "/api/users";
    return AxiosServ.postMethod(uri, data);
  };
  XoaNguoiDung_4 = (id) => {
    const uri = `/api/users/${id}`;
    return AxiosServ.deleteMethod(uri);
  };
  CapNhatNguoiDung_5 = (id, data) => {
    const uri = `/api/users/${id}`;
    return AxiosServ.putMethod(uri, data);
  };
}

const Quanlynguoidung = new quanLyNguoiDung();

export default Quanlynguoidung;
