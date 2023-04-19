import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);