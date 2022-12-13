import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      text: "demo",
      done: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todoObject = {
        id: state.length + 1,
        text: action.payload,
        done: false,
      };
      state = state.push(todoObject);
    },
    toggleTodo: (state, action) => {
      const index = action.payload - 1;
      state[index].done = !state[index].done;
    },
    removeTodo: (state, action) => {
      const index = action.payload - 1;
      state.splice(index, 1);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
