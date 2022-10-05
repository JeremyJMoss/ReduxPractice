import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {counter: 0, counterVisible: true};

const counterSlice = createSlice({
    name: "counter",
    initialState: counterInitialState,
    reducers: {
        increment(state, action){
            state.counter = state.counter + action.payload;
        },
        decrement(state, action){
            state.counter = state.counter - action.payload;
        },
        toggleCounter(state){
            state.counterVisible = !state.counterVisible;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;