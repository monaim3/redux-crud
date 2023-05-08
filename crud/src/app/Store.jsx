import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "../Featurs/BookSlice";

export const store = configureStore({
    reducer: {
        books:BookSlice
    },
  })