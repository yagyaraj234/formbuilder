import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
};

// const baseURl = "https://formbuilder-back.vercel.app";
// const url = `${baseURl}/login`;
const url = "/login";

export const login = createAsyncThunk("auth/login", async (data) => {
  const res = await axios.post(url, data);
  return res.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
