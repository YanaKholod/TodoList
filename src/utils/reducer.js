import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todos from "./slice";

export const rootReducer = combineReducers({
  allTodos: todos,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
