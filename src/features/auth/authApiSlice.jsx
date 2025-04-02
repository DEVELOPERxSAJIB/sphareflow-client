import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

// Process user register
export const processRegister = createAsyncThunk(
  "auth/processRegister",
  async (data) => {
    try {
      
      const response = await axios.post(
        "http://localhost:3030/api/v1/auth/process-register",
        data,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);