import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './features/blogSlice';

// Configure the store with the blog slice reducer
export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});
