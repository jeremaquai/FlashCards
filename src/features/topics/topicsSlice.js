// imports for reduxjs/toolkit
import { createSlice, current } from "@reduxjs/toolkit";

// Create initial state
const initialState = { topics: {} };

// Create Slice
const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        logTopics(state) {
            console.log(current(state));
        },
        addTopic(state, action) {
            console.log(current(state));
            console.log(action.payload);
            
            const topicObj = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: [],
            };

            state.topics[action.payload.id] = topicObj;
        },
        addQuizId(state, action) {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
            
        },
    },
});

//  create and export selector
export const selectTopics = (state) => state.topics.topics;

// Create and export action creaters and reducer
export const { addTopic, logTopics, addQuizId, } = topicsSlice.actions;
export default topicsSlice.reducer;

// console.log(topicsSlice.actions);