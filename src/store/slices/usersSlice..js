import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/usersActions";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
  },
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled]: (state, actions) => {
      state.users = actions.payload;
    },
  },
});
