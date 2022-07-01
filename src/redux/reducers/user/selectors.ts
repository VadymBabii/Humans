import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectRootState = (state: RootState) => state.user;

export const selectUsers = createSelector(
  selectRootState,
  (state) => state.users
);
