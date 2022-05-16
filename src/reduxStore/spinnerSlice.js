import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  loading: false,
};

export const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    startSpinner: (state, action) => {
      state.loading = true;
    },
    endSpinner: (state, action) => {
      state.loading = false;
    },
  },
});

// export actions
export const { startSpinner, endSpinner } = spinnerSlice.actions;

// export this file
export default spinnerSlice.reducer;
