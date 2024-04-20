import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.isAuthenticated = false;
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer