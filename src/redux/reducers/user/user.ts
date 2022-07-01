import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export type UserType = {
  id: string;
  name: string;
  image: ReactNode;
  isNew?: boolean;
  isDefault?: boolean;
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
    deleteUser(state, action: { payload: string }) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    editUser(state, action: { payload: UserType }) {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
  },
});

export const { saveUser, deleteUser, editUser } = userSlice.actions;

export default userSlice.reducer;
