import { configureStore } from "@reduxjs/toolkit";
import bookingSlicer from "./bookingSlicer";
import placesSlicer from "./placesSlicer";
import roomSlicer from "./roomSlicer";
import spinnerSlice from "./spinnerSlice";
import userSlice from "./userslice";
import locationSlice from "./locationslice";

export const store = configureStore({
  reducer: {
    userSlice,
    placesSlicer,
    roomSlicer,
    bookingSlicer,
    spinnerSlice,
    locationSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
