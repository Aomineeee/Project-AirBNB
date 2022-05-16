import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuanLyViTri from "../../Service/QuanLyViTri.service";
import QuanLyPhongChoThue from "../../Service/QuanLyPhongChoThue.service";

export default function ListRoom({ match, location, history, ...props }) {
  const [roomArray, setroomArray] = useState([]);
  let locationId = match.params.id;
  useEffect(() => {
    // randomID theo danh gia [1-10] API 13 or API 17
    if (locationId <= 10 && locationId >= 1) {
      QuanLyViTri.LayDSViTriTheoDanhGia_13(locationId).then((res) => {
        setroomArray(res.data);
      });
    }
    QuanLyPhongChoThue.LayDSPhongTheoViTri_17(locationId).then((res) => {
      setroomArray(res.data);
    });
  }, [locationId]);
  let renderRooms = () => {
    return roomArray.map((room, index) => {
      if (room.image) {
        return (
          <div className="mt-3 col-auto" key={index}>
            <hr className="mb-5 w-full" />
            <div className="row">
              <Link to={`/booking/${room._id}`} className="col-lg-6 h-full">
                <img
                  className=" h-full object-cover rounded-4xl cursor-pointer"
                  src={room.image}
                  alt="..."
                />
              </Link>
              <div className="col-lg-6">
                <div>
                  <div className="text-gray-400">{room.locationId?.name}</div>
                  <p className="text-lg font-semibold">{room.name}</p>
                </div>
                <div className="w-12 h-1 border-1 bg-gray-200" />
                <div className="mt-3">
                  <span className="text-gray-400">{room.guests} khách</span>
                  <span className="text-gray-400"> · </span>
                  <span className="text-gray-400">
                    {room.bedRoom} phòng ngủ
                  </span>
                  <span className="text-gray-400"> · </span>
                  <span className="text-gray-400">{room.bath} phòng tắm</span>
                </div>
                <div className="flex justify-end mt-16">
                  <div className="text-lg">
                    <span className="font-bold text-red-500">
                      {room.price?.toLocaleString()} đ
                    </span>{" "}
                    / đêm
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  };
  return (
    <div className="flex container">
      {/* left */}
      <div className="col-lg-12">
        {/* filter section */}
        <div>
          <p>{roomArray.length} phòng</p>
          <div>
            <button className="p-2 border-1 text-xs rounded-l-xl rounded-r-xl mr-1">
              Loại nơi ở
            </button>
            <button className="p-2 border-1 text-xs rounded-l-xl rounded-r-xl ml-1 mr-1">
              Giá
            </button>
            <button className="p-2 border-1 text-xs rounded-l-xl rounded-r-xl ml-1 mr-1">
              Đặt ngay
            </button>
            <button className="p-2 border-1 text-xs rounded-l-xl rounded-r-xl ml-1 mr-1">
              Phòng và phòng ngủ
            </button>
            <button className="p-2 border-1 text-xs rounded-l-xl rounded-r-xl ml-1 mr-1">
              Bộ lọc khác
            </button>
          </div>
        </div>
        {/* rooms */}
        <div className="mt-5 w-full h-screen overflow-y-scroll">
          {renderRooms()}
        </div>
      </div>
      {/* right google api */}
    </div>
  );
}
