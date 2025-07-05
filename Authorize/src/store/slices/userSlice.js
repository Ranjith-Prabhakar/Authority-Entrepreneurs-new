import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addLoggedInUser: (state, action) => {
      console.log("inside store", action);
      state.user = action.payload;
    },
    removeLoggedOutUser: (state) => {
      state.user = {};
    },
  },
});

export const { addLoggedInUser, removeLoggedOutUser } = userSlice.actions;
export default userSlice.reducer;
