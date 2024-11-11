// src/features/booksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push({ ...action.payload, read: false, bookmarked: false });
    },
    updateBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    toggleReadStatus: (state, action) => {
      const book = state.find((b) => b.id === action.payload);
      if (book) book.read = !book.read;
    },
    toggleBookmarkStatus: (state, action) => {
      const book = state.find((b) => b.id === action.payload);
      if (book) {
        book.bookmarked = !book.bookmarked;
      }
    },
  },
});

export const { addBook, updateBook, toggleReadStatus, toggleBookmarkStatus } =
  booksSlice.actions;
export default booksSlice.reducer;
