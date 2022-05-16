import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class quanLyViTri {
  constructor() {}
  TaoViTri_7 = (data) => {
    const uri = "api/locations";
    return AxiosServ.postMethod(uri, data);
  };
  XoaViTri_8 = (id) => {
    const uri = `/api/locations/${id}`;
    return AxiosServ.deleteMethod(uri);
  };
  LayDSViTri_9 = () => {
    const uri = "/api/locations";
    return AxiosServ.getMethod(uri);
  };
  LayThongTinChiTiet_10 = (id) => {
    const uri = `/api/locations/${id}`;
    return AxiosServ.getMethod(uri);
  };
  CapNhatTTViTri_11 = (id, data) => {
    const uri = `/api/locations/${id}`;
    return AxiosServ.putMethod(uri, data);
  };
  CapNhatAnh_12 = (id,data) => {
    const uri = `/api/locations/upload-images/${id}`;
    return AxiosServ.postMethod(uri,data);
  };
  LayDSViTriTheoDanhGia_13 = (id) => {
    const uri = `/api/locations/by-valueate?valueate=${id}`;
    return AxiosServ.getMethod(uri);
  };
}

const Quanlyvitri = new quanLyViTri();

export default Quanlyvitri;
