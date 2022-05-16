import React, { useEffect } from 'react';
import BookingForm from '../../Components/Booking/BookingForm';
import RoomDetailComponent from '../../Components/Booking/RoomDetailComponent';
import RoomBannerComponent from '../../Components/Booking/RoomBannerComponent';
import QuanLyPhongChoThue from '../../Service/QuanLyPhongChoThue.service';
import { setRoom } from '../../reduxStore/roomSlicer';
import { useDispatch } from 'react-redux';

function ThongTinPhong({ match }) {

    const dispatch = useDispatch()
    useEffect(() => {
        QuanLyPhongChoThue.LayThongTinPhong_18(match.params.id)
            .then((res) => {
                dispatch(setRoom(res.data))
            })
            .catch((err) => {
                window.alert('Xin lỗi, hiện tại không có phòng!')
                window.location.href = '/'
            });
    }, [])
    return (
        <div>
            <div className="container mt-5">
                <RoomBannerComponent />
            </div>
            <div className="container mt-10 h-max-content flex gap-10">
                <RoomDetailComponent />
                <BookingForm />
            </div>
        </div>
    )
}

export default ThongTinPhong