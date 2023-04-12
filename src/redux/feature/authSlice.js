import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: null,
  status: "idle" | "loading" | "succeeded" | "failed",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AUTH(state, action) {
      state.authData = action.payload;
    },

    SIGN_OUT(state, action) {
      //do something to clear the current user's info
    },
  },
});

//seletor
export const selectUserById = (state) => state.auth.authData.uid;

//actions
export const { AUTH, SIGN_OUT } = authSlice.actions;

//reducer
export default authSlice.reducer;
