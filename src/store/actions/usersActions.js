import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("loginUser", async (user) => {
  try {
    const { data, headers } = await axios.post(
      "http://13.48.5.244/api/auth/authenticate",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true
      }
    );
    // const setCookie = headers["set-cookie"];
    return data.user;
  } catch (error) {
    console.error(error);
  }
});
