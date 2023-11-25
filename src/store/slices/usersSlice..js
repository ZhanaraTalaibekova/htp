import { createSlice } from "@reduxjs/toolkit";
import { getUsers, loginUser } from "../actions/usersActions";

const initialState = {
  users: null,
  // users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled]: (state, actions) => {
      state.users = actions.payload;
    },
    [getUsers.fulfilled]: (state, actions) => {
      state.users = actions.payload;
    },
  },
});
