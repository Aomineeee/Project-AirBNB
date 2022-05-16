import AxiosServ from "./axios.service";

class quanLyDanhGia {
    LayDSDanhGiaTheoPhong_24 = (id) => {
        const uri = `/api/reviews/byRoom?roomId=${id}`;
        return AxiosServ.getMethod(uri);
    }
}

const QuanLyDanhGia = new quanLyDanhGia();
export default QuanLyDanhGia;