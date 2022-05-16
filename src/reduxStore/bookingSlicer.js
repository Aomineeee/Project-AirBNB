import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import QuanLyPhongChoThue from '../Service/QuanLyPhongChoThue.service';

let initialState = {
    bookingDetail: {
        startDate: new Date(),
        endDate: new Date(),
        guestNumber: 0
    },
    result: {
        service: 0,
        nightsCount: 0,
        tax: 5,
    }
}

export const bookRoomAction = createAsyncThunk('bookingSlicer/bookRoomAction', async (roomId, { getState }) => {
    const { bookingSlicer } = getState();
    let data = {
        roomId,
        checkIn: bookingSlicer.bookingDetail.startDate,
        checkOut: bookingSlicer.bookingDetail.endDate
    }
    const promise = QuanLyPhongChoThue.DatPhong_21(data);
    return promise;
})


const bookingSlice = createSlice({
    name: 'bookingSlicer',
    initialState,
    reducers: {
        setBookingDetail: (state, action) => {
            state.bookingDetail.startDate = action.payload[0];
            state.bookingDetail.endDate = action.payload[1];
            let nightsCount = Math.floor((action.payload[1] - action.payload[0]) / (24 * 3600 * 1000)) + 1;
            state.result.nightsCount = nightsCount;
        },
        setGuestNumber: (state, action) => {
            if (isNaN(action.payload)) {
                // nhóm dịch vụ 500k
                state.result.service = 500000
            };
            switch (action.payload) {
                case 1:
                    state.bookingDetail.guestNumber = 1;
                    state.result.service = 100000;
                    break;
                case 2:
                    state.bookingDetail.guestNumber = 2;
                    state.result.service = 200000;
                    break;
                case 3:
                    state.bookingDetail.guestNumber = 3;
                    state.result.service = 400000;
                    break;
                default:
                    break;
            }
        }
    },
    extraReducers: {
        [bookRoomAction.pending]: (state) => {
            console.log('pending')
        },
        [bookRoomAction.fulfilled]: (state, action) => {
            console.log('success')
        },
        [bookRoomAction.rejected]: (state, action) => {
            console.log('reject')
        }
    }
})

export const { setBookingDetail, setGuestNumber } = bookingSlice.actions
export default bookingSlice.reducer