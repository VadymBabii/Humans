import { combineReducers } from "redux";
import userSlice from "./user/user";

export const rootReducer = () => combineReducers({ user: userSlice });
