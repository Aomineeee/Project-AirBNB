import { createAsyncThunk } from "@reduxjs/toolkit";
import localStorageServ from "../Service/locaStorage.service";
import Quanlynguoidung from "../Service/QuanLyNguoiDung.service";
import { userService } from "../Service/user.service";
import { setUserInfor, logOutUser } from "./userslice";

export const setUserAction = (values, onFail = () => {}) => {
  return (dispatch) => {
    userService
      .dangNhap(values)
      .then((res) => {
        console.log(1);
        dispatch(setUserInfor, res.data);
        console.log(2);

        localStorageServ.userInfor.set(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        onFail(err.err.message);
      });
  };
};

export const logOutUserAction = () => {
  return (dispatch) => {
    dispatch(logOutUser);

    localStorageServ.userInfor.set(null);

    window.location.href = "/";
  };
};

export const registerUserAction = (values, onFail = () => {}) => {
  return (dispatch) => {
    userService
      .dangKy(values)
      .then((res) => {
        window.location.href = "/signin";
      })
      .catch((err) => {
        onFail(err.err.message);
      });
  };
};

export const updateAvatar = (values, onFail = () => {}) => {
  return async (dispatch) => {
    userService
      .avatar(values)
      .then((res) => {
        const user = localStorageServ.userInfor.get();
        dispatch(setUserInfor, { ...user, user: res.data });
        localStorageServ.userInfor.set({ ...user, user: res.data });
        window.location.href = "/profile";
      })
      .catch((err) => {
        onFail(err.err.message);
      });
  };
};

export const getUserUpdate = createAsyncThunk("getUserUpdate", async (id) => {
  const promise = await Quanlynguoidung.LayThongTinChiTietNguoiDung_2(id);
  return promise;
});
