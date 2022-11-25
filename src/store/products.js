import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk("ADD_PRODUCT", async (product) => {
  return await axios.post("/api/products/add", product)
                      .then((res)=> res.data)
});

export const getAllProducts = createAsyncThunk("GET_ALL_PRODUCTS", async () => {
  return await axios.get("/api/products/")
                      .then((res) => res.data);
});

export const getOneProduct = createAsyncThunk("GET_ONE_PRODUCT", async (product) => {
  return await axios.get(`/api/products/${product.id}`)
                      .then((res) => res.data);
});

export const searchProduct = createAsyncThunk("GET_ONE_PRODUCT_BY_SEARCH", async (name) => {
  return await axios.get(`/api/products/name/${name}`)
                      .then((res) => res.data);
});

export const editProduct = createAsyncThunk("EDIT_PRODUCT", async (product) => {
  return await axios.put(`/api/products/edit/${product.id}`, product)
                      .then((res)=> res.data)
});

export const deleteProduct = createAsyncThunk("DELETE_PRODUCT", async (product) => {
  return await axios.delete(`/api/products/remove${product.id}`)
                      .then((res)=> res.data)
});

const productsReducer = createReducer([], {
  [getAllProducts.fulfilled]: (state, action) => action.payload,
  [getOneProduct.fulfilled]: (state, action) => action.payload,
  [searchProduct.fulfilled]: (state, action) => action.payload,
  [addProduct.fulfilled]: (state, action) => action.payload,
  [editProduct.fulfilled]: (state, action) => action.payload,
  [deleteProduct.fulfilled]: (state, action) => action.payload,
});

export default productsReducer;
