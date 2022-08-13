import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favorites: [],
  cart: {},
  products: [],
  productsIsLoading: null,
  errorLoading: null,
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
      if (state.favorites.indexOf(action.payload) === -1) {
        state.favorites.push(action.payload);
      }
    },
    delFromFavorites: (state, action) => {
      console.log('dell')
      if (state.favorites.indexOf(action.payload) !== -1) {
        state.favorites = state.favorites.filter((a) => a !== action.payload);
      }
    },
    addToCart: (state, action) => {
      if (typeof  state.cart[action.payload] === "undefined" ) {
        state.cart[action.payload] = 1;
      } else {
        state.cart[action.payload] = state.cart[action.payload] + 1;
      }
    },
    delFromCart: (state, action) => {
      if (typeof  state.cart[action.payload] !== "undefined" ) {
        state.cart[action.payload] = undefined
      }
    },
    reduceCountProductInCart: (state, action) => {
      if (typeof  state.cart[action.payload] !== "undefined" ) {
        state.cart[action.payload] = state.cart[action.payload] - 1;
        if (state.cart[action.payload] === 0) {
          state.cart[action.payload] = undefined
        }
      }
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
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

export const { delFromFavorites, delFromCart, addToFavorites, addToCart, setProducts, setSearchQuery, reduceCountProductInCart } =
  productsSlice.actions;
export default productsSlice.reducer;
