import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const authInitialState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "authentication",
    initialState: authInitialState,
    reducers: {
        login(state){
            state.isAuthenticated = true; 
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

// creating store with just redux
//
// import { createStore } from "redux";
// 
// const initialState = {counter: 0, counterVisible: true};
//
// const counterReducer = (state = initialState, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return {
//                 ...state,
//                 counter: state.counter + action.amount
//             };
//    
//         case "DECREMENT":
//             return {
//                 ...state,
//                 counter: state.counter - action.amount
//             };
//         case "TOGGLE COUNTER":
//             return {
//                 ...state,
//                 counterVisible : !state.counterVisible        
//             }
//         default:
//             return {
//                 ...state
//             }
//     }
// }
//
// const store = createStore(counterReducer);
//
// export default store;
