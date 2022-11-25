import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const userRegister = createAsyncThunk("SIGN_UP", async (user) => {
  return await axios.post("/api/auth/register", user)
                      .then((res) => res.data);
});

export const userLogin = createAsyncThunk("LOG_IN", async (user) => {
  return await axios.post("/api/auth/login", user)
                     .then((res) => res.data);
});

export const persistence = createAsyncThunk("ME_TOKEN_JWT", async () => {
  const { data } = await axios.get("/api/auth/getMe");
  const res = await axios.get(`/api/users/${data.id}`);
  return res.data;
});

export const userLogout = createAsyncThunk("LOG_OUT", async () => {
  return await axios.post("/api/auth/logout")
                      .then((res) => res.data);
});

export const getAllUsers = createAsyncThunk("GET_ALL_USERS", async () => {
  const { data } = await axios.get("/api/users")
  console.log("ESTA ES LA DATA", data)
  return data;
});

export const deleteFavoriteFromUser = createAsyncThunk("DELETE_FAVORITE", async (productId, thunkAPI) => {
  const { user } = thunkAPI.getState();
  return await axios.delete(`/api/favorites/${user.id}`, productId)
                      .then((res) => res.data);
});

const usersReducer = createReducer({}, {
  [userRegister.fulfilled]: (state, action) => action.payload,
  [userLogin.fulfilled]: (state, action) => action.payload,
  [persistence.fulfilled]: (state, action) => action.payload,
  [userLogout.fulfilled]: (state, action) => action.payload,
  [getAllUsers.fulfilled]: (state, action) => action.payload,
  [deleteFavoriteFromUser.fulfilled]: (state, action) => action.payload,
});

export default usersReducer;
