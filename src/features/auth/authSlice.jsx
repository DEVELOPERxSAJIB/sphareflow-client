import { createSlice } from "@reduxjs/toolkit";
import { processRegister } from "./authApiSlice";

const authSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    isAuthenticated: false,
    loader: false,
    message: null,
    error: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(processRegister.pending, (state) => {
        state.loader = true;
      })
      .addCase(processRegister.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
      })
      .addCase(processRegister.rejected, (state, action) => {
        state.loader = false;
        state.error =  action.error.message
      });
  },
});

// export reducers

// export actions
export const { setMessageEmpty } = authSlice.actions;

// export default
export default authSlice.reducer;
