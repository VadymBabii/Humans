import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export type UserType = {
  id: string;
  name: string;
  image: ReactNode;
  isNew?: boolean;
};

type UserSliceInitialState = {
  users: UserType[];
};

const initialState: UserSliceInitialState = {
  users: [
    { id: "1", name: "Marko", image: null },
    { id: "2", name: "Dilan", image: null },
  ],
};

const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    saveUser(state, action: { payload: UserType }) {
      state.users = [action.payload, ...state.users];
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
