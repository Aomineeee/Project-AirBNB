import { createSlice } from "@reduxjs/toolkit";
import localStorageServ from "../Service/locaStorage.service";
import { getUserUpdate } from "./userAction";

let checkStateAdmin = (userInfo) => {
  return userInfo ? (userInfo.user.type === "ADMIN" ? true : false) : false;
};



let initialState = {
  userInfor: localStorageServ.userInfor.get(),
  userUpdate: {
    tickets: [],
    deleteAt: false,
    _id: '',
    name: "",
    email: '',
    password: "",
    phone: "",
    birthday: "",
    gender: "",
    address: "",
    __v: "",
    type: ""
  },
  isAdmin: checkStateAdmin(localStorageServ.userInfor.get()),
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.userInfor = action.payload;
      state.userInfor = checkStateAdmin(action.payload);
    },
    logOutUser: (state, action) => {
      state.userInfor = null;
      state.isAdmin = null;
    },
  },
  extraReducers: {
    [getUserUpdate.fulfilled]: (state, { payload }) => {
      state.userUpdate = payload.data;
    }
  }
});

// export actions
export const { setUserInfor, logOutUser } = userSlice.actions;

// export this file
export default userSlice.reducer;
