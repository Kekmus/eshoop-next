import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favorites: [],
  cart: [],
  products: [],
  productsIsLoading: null,
  errorLoading: null,
  currentPage: "Home",
  searchQuery: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.productsIsLoading = true;
      state.errorLoading = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.productsIsLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.productsIsLoading = false;
    },
  },
});

export const { addToFavorites, addToCart, setProducts, setSearchQuery, setCurrentPage } =
  productsSlice.actions;
export default productsSlice.reducer;
