import Quanlyvitri from "../Service/QuanLyViTri.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLocationUpdate = createAsyncThunk(
  "getLocationUpdate",
  async (id) => {
    const promise = await Quanlyvitri.LayThongTinChiTiet_10(id);
    return promise;
  }
);
export const updateImageLocation = createAsyncThunk(
  "updateImageLocation",
  async ({ id, data }) => {
    const promise = await Quanlyvitri.CapNhatAnh_12(id, data);
    return promise;
  }
);
