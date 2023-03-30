import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await fetch(
      "https://642162bb86992901b2b2128d.mockapi.io/api/todos/"
    );

    if (!response.ok) {
      throw new Error("Oops, server error");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteTodo = createAsyncThunk("todos/deleteTodos", async (id) => {
  try {
    const response = await fetch(
      `https://642162bb86992901b2b2128d.mockapi.io/api/todos/${id}`,
      { method: "DELETE" }
    );
    if (!response.ok) {
      throw new Error("Can`t delete todo");
    }
  } catch (error) {
    console.log(error.message);
  }
});

export const addTodo = createAsyncThunk(
  "todos/deleteTodos",
  async (newTodo) => {
    try {
      const response = await fetch(
        `https://642162bb86992901b2b2128d.mockapi.io/api/todos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        }
      );
      if (!response.ok) {
        throw new Error("Can`t add todo");
      }
      const addedData = await response.json();
      return addedData;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  "todos/deleteTodos",
  async ({ data, id }) => {
    try {
      const response = await fetch(
        `https://642162bb86992901b2b2128d.mockapi.io/api/todos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Can`t edit todo");
      }

      const updatedData = await response.json();

      return updatedData;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const slice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [addTodo.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
