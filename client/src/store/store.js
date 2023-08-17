import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "isom",
  storage,
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    // other reducers can be added here
  },
  // add middleware if needed
});

export default store;

export const persistedStore = persistStore(store);
