import { createSlice } from "@reduxjs/toolkit";

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

export default authSlice;