
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
        },
    }
})

export const { updateUser } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;