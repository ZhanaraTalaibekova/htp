import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("loginUser", async (user) => {
  try {
    const { data, headers } = await axios.post(
      `${process.env.REACT_APP_MAIN_URL}`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    const cook = document.cookie;
    return data.user;
  } catch (error) {
    console.error(error);
  }
});

export const getUsers = createAsyncThunk("getUsers", async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/users`, {
      withCredentials: true,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const getUsersById = createAsyncThunk("getUsersById", async () => {
  try {
    const { data } = await axios.get("http://localhost/api/users/", {
      withCredentials: true,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
});