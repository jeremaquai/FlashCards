import { configureStore, current } from "@reduxjs/toolkit";
import topicsSliceReducer from '../features/topics/topicsSlice';
import quizzesSliceReducer from "../features/quizzes/quizzesSlice";
import cardsSliceReducer from '../features/cards/cardsSlice';


export const store = configureStore({
  reducer: {
    topics: topicsSliceReducer,
    quizzes: quizzesSliceReducer,
    cards: cardsSliceReducer,
  },
});

console.log(store.getState());
