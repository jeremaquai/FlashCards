// Import from reduxjs/toolkit
import { createSlice, current,  } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

// Create initialState
const initialState = {quizzes: {}};

// Create quizzesSlice
const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        logQuizzes(state) {
            console.log(current(state));
        },
        addQuiz(state, action) {
            const quizObj = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds
            }
            state.quizzes[action.payload.id] = quizObj;
        }
    }
});

// Create thunk action creator
export const addQuizThunk = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({ quizId: payload.id, topicId: payload.topicId }))
    }
}

// create and export selector
export const selectQuizzes = (state) => state.quizzes.quizzes;

//  Create and export action creaters and reducer
export const { addQuiz, logQuizzes, } = quizzesSlice.actions;
export default quizzesSlice.reducer;