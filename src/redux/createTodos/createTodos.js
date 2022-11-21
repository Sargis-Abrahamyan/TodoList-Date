import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    // Key: date, value array of todoS
    todoS: JSON.parse(localStorage.getItem("todos")) || {},
  },

  reducers: {
    addTodo(state, { payload }) {
      const newTodos = {
        id: new Date().getTime(),
        date: payload.date,
        todoValues: payload.value,
        isCompleted: false,
      };

      if (Array.isArray(state.todoS[payload.date])) {
        
        state.todoS[payload.date].push(newTodos);
        localStorage.setItem("todos", JSON.stringify(state.todoS, payload));
      }
      else {

        state.todoS[payload.date] = [newTodos];
        localStorage.setItem("todos", JSON.stringify(state.todoS, payload));
      }
    },

    isDane(state, { payload }) {
      state.todoS[payload.date] = state.todoS[payload.date].map((completed) => {
        if (completed.id === payload.id) {
          completed.isCompleted = !completed.isCompleted;
        }
        return completed;
      });
    },

    deleteTodos(state, { payload }) {
      state.todoS[payload.date] = state.todoS[payload.date].filter(
        (todoDelete) => todoDelete.id !== payload.id
      );
      localStorage.setItem("todos", JSON.stringify(state.todoS, payload));
    },

    editTodos(state, { payload }) {
      state.todoS[payload.itemsTodos.date] = state.todoS[payload.itemsTodos.date].map(
        (edit) => {
          if (edit.id === payload.itemsTodos.id) {
            edit.todoValues = payload.editValue;
            localStorage.setItem("todos", JSON.stringify(state.todoS, payload));
          }
          return edit;
        }
      );
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, isDane, deleteTodos, editTodos } = todoSlice.actions;
