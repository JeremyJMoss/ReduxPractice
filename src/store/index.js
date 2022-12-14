import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})


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
