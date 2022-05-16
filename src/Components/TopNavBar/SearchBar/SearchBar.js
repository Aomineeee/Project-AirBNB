import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import QuerryPlaces from "./QuerryPlaces";
import { DateRangePicker } from "rsuite";
import { setBookingDetail } from "../../../reduxStore/bookingSlicer";
import GuestNumber from "../../Booking/DetailStuffs/GuestNumber";
import { Link } from 'react-router-dom';

export default function SearchBar() {
  let { bookingDetail } = useSelector((root) => root.bookingSlicer);
  let dispatch = useDispatch()
  const [dateArr, setDateArr] = useState([bookingDetail.startDate, bookingDetail.endDate]);
  useEffect(() => {
    setDateArr([bookingDetail.startDate, bookingDetail.endDate]);
  }, [bookingDetail])

  var monthStart = dateArr[0]?.getUTCMonth() + 1;
  var dayStart = dateArr[0]?.getUTCDate();
  var yearStart = dateArr[0]?.getUTCFullYear();
  let startTime = dayStart + "/" + monthStart + "/" + yearStart;

  var monthEnd = dateArr[1]?.getUTCMonth() + 1;
  var dayEnd = dateArr[1]?.getUTCDate();
  var yearEnd = dateArr[1]?.getUTCFullYear();
  let endTime = dayEnd + "/" + monthEnd + "/" + yearEnd;

  return (
    <div className="bg-white rounded-full p-0 book-ticket w-full mx-auto px-2">
      <ul className="flex items-center">
        {/* Location */}
        <QuerryPlaces />
        {/* Calendar */}
        <label className="w-7/12 m-0" htmlFor="toggleDate">
          <div className="flex h-full justify-between items-center relative">
            <div className="w-1/2 py-2  h-full rounded-full cursor-pointer hover:bg-gray-100 transition duration-300">
              <div className="h-full">
                <span className="font-semibold">Ngày nhận phòng</span><br />
                <span className="">{startTime}</span>
              </div>
            </div>
            <DateRangePicker
              className="invisible absolute bottom-0 right-40"
              id="toggleDate"
              placeholder="Chọn ngày"
              placement="bottom"
              format={`dd 'tháng' MM 'năm' yyyy`}
              character={<>
                <br />
                <p>Ngày trả phòng: </p>
              </>}
              onOk={(date) => {
                setDateArr(date);
                dispatch(setBookingDetail(date))
              }}
            />
            <div className="w-1/2 py-2 h-full rounded-full cursor-pointer hover:bg-gray-100 transition duration-300 ">
              <div className="h-full">
                <span className="font-semibold">Ngày trả phòng</span><br />
                <span className="">{endTime}</span>
              </div>
            </div>
          </div>
        </label>
        {/* Guests */}
        <li className="w-3/12 h-full rounded-full hover:bg-gray-100 p-4 transition duration-300">
          <span className="font-semibold">Số lượng người</span> <GuestNumber />
        </li>
        {/* Search */}
        <li className="w-2/12 text-right">
          <Link
            to={`/location/${Math.floor(Math.random() * 10) + 1}`}
            className="bg-primary-color text-white rounded-full p-4"
          >
            <i className="fa fa-search mr-2"></i> Tìm kiếm
          </Link>
        </li>
      </ul>
    </div>
  );
}
