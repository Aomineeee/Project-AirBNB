import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class quanLyPhongChoThue {
  constructor() { }
  TaoPhongChoThue_16 = () => {
    const uri = "api/locations";
    return AxiosServ.postMethod(uri);
  };
  LayDSPhongTheoViTri_17 = (id) => {
    const uri = `/api/rooms?locationId=${id}`;
    return AxiosServ.getMethod(uri);
  };
  LayThongTinPhong_18 = (id) => {
    const uri = `/api/rooms/${id}`;
    return AxiosServ.getMethod(uri);
  };
  CapNhatPhong_19 = () => {
    const uri = "/api/locations/";
    return AxiosServ.getMethod(uri);
  };
  XoaPhong_20 = () => {
    const uri = "/api/locations/60c3220c9e2c3233f436e9e7";
    return AxiosServ.putMethod(uri);
  };
  DatPhong_21 = (data) => {
    const uri = "/api/rooms/booking";
    return AxiosServ.postMethod(uri, data);
  };
  CapNhatHinhAnhPhong_22 = (id, data) => {
    const uri = `/api/rooms/upload-image/${id}`;
    return AxiosServ.postMethod(uri, data);
  };
}

const QuanLyPhongChoThue = new quanLyPhongChoThue();

export default QuanLyPhongChoThue;
