import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./ContenLayout.css";

export default function ContentLayout() {
  return (
    <div className="layout-content">
      <div className="bg-black ">
        <div className="bg-layout-content container">
          <div className="bg-content flex flex-col justify-center items-center rounded-xl ">
            <div className="text-4xl font-bold text-white text-center mb-5 ">
              <p>
                Giúp đỡ chỗ ở cho 100.000 người tị nạn đang chạy trốn <br />{" "}
                khỏi Ukraine
              </p>
            </div>
            <div className="text-white border rounded-lg px-4 py-2">
              <button>Tỉm hiểu thêm</button>
            </div>
          </div>
        </div>
        <div className="bg-img container bg-black flex flex-col justify-center items-center">
          <img
            className="h-full w-full object-cover border-none rounded-xl"
            src="./images/33130c63_original-1.jpg"
            alt="..."
          />
          <div className="title-img text-white text-4xl font-bold absolute flex flex-col items-center">
            <p>Hãy để trí tò mò của bạn dẫn lối</p>
            <Link
              to={`/location/${Math.floor(Math.random() * 10) + 1}`}
              className="border rounded-full px-5 py-3 mt-5 bg-white text-lg font-semibold"
            >
              Tìm kiếm linh hoạt
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 container">
        <div className="row">
          <div className="card col-lg-3">
            <img
              className="w-full h-40"
              src="./images/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.webp"
              alt=""
            />
            <div className="card-content h-28 text-xl text-left px-3 bg-blue-500">
              <h1 className="text-white">Hải Phòng</h1>
              <p>1.5 giờ lái xe</p>
            </div>
          </div>
          <div className="card col-lg-3">
            <img
              className="w-full h-40 "
              src="./images/99eb5993-4277-4c1e-8db1-b639a96758a0.webp"
              alt=""
            />
            <div className="card-content h-28 text-xl text-left px-3 bg-green-500">
              <h1 className="text-white">Thành Phố Hạ Long</h1>
              <p>2 giờ lái xe</p>
            </div>
          </div>
          <div className="card col-lg-3">
            <img
              className="w-full h-40 "
              src="./images/64530077-ffc7-481b-8cca-50ec8c5f3324.webp"
              alt=""
            />
            <div className="card-content h-28 text-xl text-left px-3 bg-purple-500">
              <h1 className="text-white">Thành Phố Ninh Bình</h1>
              <p>1 giờ lái xe</p>
            </div>
          </div>
          <div className="card col-lg-3">
            <img
              className="w-full h-40 "
              src="./images/aff9e173-b551-44e4-80f3-bd9b9d632f8b.webp"
              alt=""
            />
            <div className="card-content h-28 text-xl text-left px-3 bg-red-500">
              <h1 className="text-white">Thành Phố Hà Giang</h1>
              <p>3.5 giờ lái xe</p>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-airbnb mt-10 container">
        <h1 className="text-3xl font-bold">Khám phá Trải nghiệm Airbnb</h1>
        <div className="experience row mt-5">
          <div className="experience-card col-lg-6">
            <img
              className="w-full rounded-lg object-cover"
              src="./images/gpin9ljw_800x1000__637169936055198612.webp"
              alt=""
            />
            <div className="experience-content text-4xl font-bold">
              <p>Những điều nên trải nghiệm trong chuyến đi của bạn</p>
              <button className="text-sm font-semibold text-black rounded-lg bg-white mt-5 px-5 py-3">
                Trải Nghiệm
              </button>
            </div>
          </div>
          <div className="experience-card  col-lg-6">
            <img
              className="w-full rounded-lg object-cover"
              src="./images/Trải-nghiệm-làm-việc-tại-nhà-Nhàm-chán-hay-thú-vị-683x1024.jpg"
              alt=""
            />
            <div className="experience-content text-4xl font-bold">
              <p>Những điều nên trải nghiệm trong chuyến đi của bạn</p>
              <button className="text-sm font-semibold text-black rounded-lg bg-white mt-5 px-5 py-3">
                Trải Nghiệm Trực Tuyến
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 container">
        <div className="host">
          <img
            className="w-full rounded-lg object-cover"
            src="./images/20031216-3c70c385c16fd10026a2e54b29179935.webp"
            alt=""
          />
          <div className="host-content">
            <h1 className=" text-white">
              Bạn có thắc mắc về việc đón tiếp khách?
            </h1>
            <button className="bg-white rounded-lg py-4 px-5 mt-20 font-bold">
              Hỏi Ý Kiến Chủ Nhà Siêu Cấp
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
