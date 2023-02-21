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
    auth(state, action) {
      //do something to get the current user's info
      console.log("auth-action-payload", action.payload);
      state.authData = action.payload;
    },

    signOut(state, action) {
      //do something to clear the current user's info
    },
  },
  extraReducers: {},
});

//seletor
export const selectUserById = (state) => state.auth.authData.uid;

//actions
export const { auth, signOut } = authSlice.actions;

//reducer
export default authSlice.reducer;
