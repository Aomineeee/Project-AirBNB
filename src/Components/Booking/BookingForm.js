import React, { useState } from "react";
import { Modal, Button, Popover } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import GuestNumber from './DetailStuffs/GuestNumber';
import CalendarComponent from "./DetailStuffs/CalendarComponent";
import { bookRoomAction } from "../../reduxStore/bookingSlicer";

function BookingForm() {
  // nhận checkin, checkout từ thông tin phòng -> tính giá
  let { price, _id } = useSelector(state => state.roomSlicer.roomDetail);
  let { reviews } = useSelector(state => state.roomSlicer);
  let { service, nightsCount, tax } = useSelector(state => state.bookingSlicer.result);
  const dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookRoomAction(_id)).unwrap()
      .then((res) => {
        Modal.success({
          content: `${res.data.message}`,
          onOk: () => {
            window.location.href = "/profile";
          }
        });
      })
      .catch((err) => {
        Modal.error({
          title: 'Lỗi đặt phòng',
          content: `${err.data.message}`,
        });
      });;
  }
  let bangGiaPhiDV = (
    <div>
      <p>1 người : 100.000</p>
      <p>2 người : 200.000</p>
      <p>3 người : 400.000</p>
      <p>Nhóm người : 500.000</p>
    </div>
  )
  let thue = (
    <div>có làm thì có đóng thuế</div>
  )

  let renderBookingForm = () => {
    return (<form className="rounded-lg border-1 p-6 sticky top-6 shadow-xl">
      <div className="w-full flex justify-between items-center">
        <div className="text-2xl font-medium"> {price.toLocaleString()}đ/ngày </div>
        <div className="flex">
          <div className="font-medium">
            {" "}
            4.9 <i className="fa fa-star" aria-hidden="true"></i>{" "}
          </div>
          <div className="font-medium ml-2"> {reviews.length} đánh giá </div>
        </div>
      </div>
      {/* import calendar */}
      <div className="mt-3">Ngày nhận phòng và trả phòng</div>
      <CalendarComponent />
      <div className="mt-3">Số khách <GuestNumber /></div>
      {/* show giá */}
      <div className="my-10">
        <div className="w-full my-1  flex justify-between">
          <div className="text-lg cursor-pointer">
            {price.toLocaleString()} x {nightsCount} ngày
          </div>
          <div className="text-lg "> {(price * nightsCount).toLocaleString()} </div>
        </div>
        <div className="w-full my-2 flex justify-between">
          <Popover className="text-base underline cursor-pointer" content={bangGiaPhiDV} trigger="hover">
            Phí dịch vụ
          </Popover>
          <div className="text-lg "> {service.toLocaleString()} </div>
        </div>
        <div className="w-full my-2 flex justify-between">
          <Popover className="text-base underline cursor-pointer" content={thue} trigger="click">
            Thuế{" "}
          </Popover>
          <div className="text-lg "> {tax}% </div>
        </div>
        <hr />
        <div className="w-full mt-3 flex justify-between">
          <div className="text-lg underline cursor-pointer">Tổng thanh toán </div>
          <div className="text-3xl text-red-500 font-bold"> {((price * nightsCount + service) * (1 + tax / 100)).toLocaleString()} </div>
        </div>
      </div>
      <Button
        type="submit"
        className="text-white text-xl font-semibold 
        w-full h-max-content bg-primary-color rounded-lg py-2
        hover:text-yellow-200 hover:shadow-xl"
        onClick={handleSubmit}
      >
        Đặt phòng
      </Button>
    </form>)
  }
  return (
    <div className="w-1/3">
      {renderBookingForm()}
    </div>
  );
}

export default BookingForm;
