import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../types/user";
import {
  clearLocalStorage,
  persistLocalStorage,
} from "../../utils/localStorage";
import { Roles } from "../../types/roles";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
  rol: Roles.USER,
};

export const UserKey = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<UserInfo>(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>(UserKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(UserKey);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;
