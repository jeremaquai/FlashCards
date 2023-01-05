// Import from reduxjs/toolkit
import { createSlice, current,  } from "@reduxjs/toolkit";

//  Create initialState
const initialState = {cards: {}};

// Create cardsSlice
const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        logCards(state) {
            console.log(current(state));
        },
        addCard(state, action) {
            const cardObj = {
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back,
            };
            state.cards[action.payload.id] = cardObj;
        }
    },
});

// Create and export selector
export const selectCards = (state) => state.cards.cards;

// Create and export action creators and reducer
export const { logCards, addCard } = cardsSlice.actions;
export default cardsSlice.reducer;