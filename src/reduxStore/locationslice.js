import { createSlice } from "@reduxjs/toolkit";
import { getLocationUpdate, updateImageLocation } from "./locationAction";

let initialState = {
  locationUpdate: {
    deleteAt: false,
    _id: "",
    name: "",
    province: "",
    country: "",
    valueate: "",
    __v: "",
    image: null,
  },
};

export const locationSlice = createSlice({
  name: "locationSlice",
  initialState,
  extraReducers: {
    [getLocationUpdate.fulfilled]: (state, { payload }) => {
      state.locationUpdate = payload.data;
    },
    [updateImageLocation.fulfilled]: (state, { payload }) => {
      state.locationUpdate = payload.data;
    },
    [updateImageLocation.rejected]: (state, { payload }) => {
      console.log("rejected BE", payload);
      // state.locationUpdate = payload.data;
    },
  },
});

export default locationSlice.reducer;
