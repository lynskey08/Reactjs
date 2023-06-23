import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { inAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.inAuthenticated = true;
    },
    logout(state) {
      state.inAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;