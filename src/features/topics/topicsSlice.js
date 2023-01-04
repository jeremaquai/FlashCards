// imports for reduxjs/toolkit
import { createSlice, current } from "@reduxjs/toolkit";

// Create initial state
const initialState = { topics: {} };

// Create Slice
const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic(state, action) {
            console.log(current(state));
            console.log(action.payload);
            const topicObj = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: [],
            }
            state.topics[action.payload.id] = topicObj;
            },
        },
    },
);

//  create and export selector
export const selectTopics = (state) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

console.log(topicsSlice.actions);