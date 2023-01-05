import { configureStore, current } from "@reduxjs/toolkit";
import topicsSliceReducer from '../features/topics/topicsSlice';
import quizzesSliceReducer from "../features/quizzes/quizzesSlice";

export const store = configureStore({
  reducer: {
    topics: topicsSliceReducer,
    quizzes: quizzesSliceReducer,
  },
});

// console.log(current(state));
