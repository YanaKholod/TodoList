import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "allTodos",
  initialState: {
    todos: [],
  },
  reducers: {
    getTodos(state, action) {
      state.todos = action.payload;
    },
    deleteTodo(state, action) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isDeleted: true, deletedAt: new Date() }
          : todo
      );
    },
    doneTodo(state, action) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: true, completedAt: new Date() }
          : todo
      );
    },
    editTodo(state, action) {
      const { id, data } = action.payload;
      console.log("payloadData", action);
      state.todos = state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title: data.title,
              description: data.description,
              isCompleted: data.isCompleted,
            }
          : todo
      );
    },
    // addTodo(state, action) {
    //   state.todos.concat(action.payload);
    // },
  },
});

export default todos.reducer;

export const { getTodos, addTodo, deleteTodo, doneTodo, editTodo } =
  todos.actions;
