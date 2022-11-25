import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const addFavorite = createAsyncThunk("ADD_FAVORITE", async (favorite) => {
  return await axios.post("/api/favorites/add", favorite)
                      .then((res) => res.data)
});

export const getOneUserFavorites = createAsyncThunk("GET_ONE_USER_FAVORITES", async (user) => {
  const result = await user.favorites.map((e) => {
    return axios.get(`/api/products/${e}`)
                  .then((res) => res.data);
  });

  const favorites = Promise.all(result)
    .then((values) => values);

  return favorites;
});

const favoritesReducer = createReducer([], {
  [addFavorite.fulfilled]: (state, action) => action.payload,
  [getOneUserFavorites.fulfilled]: (state, action) => action.payload,
});

export default favoritesReducer;
