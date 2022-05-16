import React from "react";

export default function Footer() {
  return (
    <div className="mt-10 container">
      <div className="row">
        <div className="menu col-sm-12 col-lg-3">
          <div>
            <h1>Hỗ trợ</h1>
          </div>
          <div className="menu-list">
            <ul>
              <li>Trung tâm trợ giúp</li>
              <li>Thông tin an toàn</li>
              <li>Các tùy chọn hủy</li>
              <li>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</li>
              <li>Hỗ trợ người khuyết tật</li>
              <li>Báo cáo lo ngại của hàng xóm</li>
            </ul>
          </div>
        </div>
        <div className="menu col-sm-12 col-lg-3">
          <div>
            <h1>Cộng đồng</h1>
          </div>
          <div className="menu-list">
            <ul>
              <li>Airbnb.org: nhà ở cứu trợ</li>
              <li>Hỗ trợ dân tị nạn Afghanistan</li>
              <li>Chống phân biệt đối xử</li>
            </ul>
          </div>
        </div>
        <div className="menu col-sm-12 col-lg-3">
          <div>
            <h1>Đón tiếp khách</h1>
          </div>
          <div className="menu-list">
            <ul>
              <li>Thử đón tiếp khách</li>
              <li>AirCover: bảo vệ cho Host</li>
              <li>Xem tài nguyên đón tiếp khách</li>
              <li>Truy cập diễn đàn cộng đồng</li>
              <li>Đón tiếp khách có trách nhiệm</li>
            </ul>
          </div>
        </div>
        <div className="menu col-sm-12 col-lg-3">
          <div>
            <h1>Giới thiệu</h1>
          </div>
          <div className="menu-list">
            <ul>
              <li>
                <a href="">Trang tin tức</a>
              </li>
              <li>Tìm hiểu các tính năng mới</li>
              <li>Thư ngỏ từ các nhà sáng lập</li>
              <li>Cơ hội nghề nghiệp</li>
              <li>Nhà đầu tư</li>
              <li>Airbnb Luxe</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="m-auto" style={{ width: "100%" }} />
      <div className="mt-5 infor row">
        <div className="infor-content col-lg-8">
          <div className="text-sm">
            <h1>© 2022 Airbnb, Inc.</h1>
          </div>
          <div className="infor-list">
            <ul>
              <li>Quyền riêng tư</li>
              <li>Điều khoản</li>
              <li>Sơ đồ trang web</li>
            </ul>
          </div>
        </div>
        <div className="icon col-lg-4 flex items-center ">
          <a href="">
            <i className="fa fa-language"></i>
            <span>Tiếng Việt (VN)</span>
          </a>
          <a href="">
            <i className="fa fa-dollar-sign"></i>
            <span>USD</span>
          </a>
          <a href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
