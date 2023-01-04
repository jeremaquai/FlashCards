import { configureStore } from "@reduxjs/toolkit";
import topicsSliceReducer from '../features/topics/topicsSlice';

export const store = configureStore({
  reducer: {
    topics: topicsSliceReducer,
  },
});

console.log(store);
