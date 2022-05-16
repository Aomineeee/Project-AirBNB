import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import QuanLyDanhGia from '../Service/QuanLyDanhGia.service';

const initialState = {
    roomDetail: {
        deleteAt: "",
        _id: "",
        name: "",
        guests: "",
        bedRoom: "",
        bath: "",
        description: "",
        price: "",
        elevator: "",
        hotTub: "",
        pool: "",
        indoorFireplace: "",
        dryer: "",
        gym: "",
        kitchen: "",
        wifi: "",
        heating: "",
        cableTV: "",
        image: "",
        locationId: {}
    },
    reviews: [],
}

export const getReviewsByRoom = createAsyncThunk('reviews/getReviewsByRoom', async (id) => {
    const promise = await QuanLyDanhGia.LayDSDanhGiaTheoPhong_24(id);
    return promise;
})

const roomSlicer = createSlice({
    name: 'roomSlicer',
    initialState,
    reducers: {
        setRoom: (state, action) => {
            state.roomDetail = action.payload
        }
    },
    extraReducers: {
        [getReviewsByRoom.fulfilled]: (state, action) => {
            state.reviews = action.payload.data;
        }
    }
})


export const { setRoom } = roomSlicer.actions
export default roomSlicer.reducer
