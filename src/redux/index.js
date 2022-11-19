import { configureStore } from "@reduxjs/toolkit";

import createTodos from "./createTodos/createTodos";

export const store = configureStore({
  reducer: {
    todos: createTodos,
  },
});
