import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "allTodos",
  initialState: {
    todos: [],
  },
  reducers: {
    getTodos(state, action) {
      console.log("action.payload", action.payload);
      state.todos = action.payload;
    },
  },
});

export default todos.reducer;

export const { getTodos } = todos.actions;
