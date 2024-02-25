import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../types/user";
import { userSlice } from "./states/user";

export interface AppStore {
  user: UserInfo;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
  },
});
