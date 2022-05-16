import React, { useEffect, useState } from "react";
import { DateRangePicker } from "rsuite";
import { useDispatch, useSelector } from 'react-redux'
import { setBookingDetail } from "../../../reduxStore/bookingSlicer";

function CalendarComponent() {
    const { beforeToday } = DateRangePicker;
    let { bookingDetail } = useSelector((root) => root.bookingSlicer);
    const [value, setValue] = useState([bookingDetail.startDate, bookingDetail.endDate]);

    useEffect(() => {
        setValue([bookingDetail.startDate, bookingDetail.endDate]);
    }, [bookingDetail])

    let dispatch = useDispatch()
    let handleOnchange = (date) => {
        setValue(date)
        dispatch(setBookingDetail(date));
    }
    return (
        <DateRangePicker
            className="mt-4 w-full"
            format={`'ngày' dd 'tháng' MM 'năm' yyyy`}
            placeholder={
                <div className="flex">
                    <div className="w-1/2">
                        <h1 className="text-red-500">Nhận phòng</h1>
                        {value[0]?.toLocaleDateString()}
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-red-500">Trả phòng</h1>
                        {value[1]?.toLocaleDateString()}
                    </div>
                </div>
            }
            disabledDate={beforeToday()}
            character={
                <>
                    <br />
                    <p>đến</p>
                </>
            }
            placement="bottomEnd"
            value={value}
            ranges={value}
            onChange={(date) => handleOnchange(date)}
        />
    )
}

export default CalendarComponent