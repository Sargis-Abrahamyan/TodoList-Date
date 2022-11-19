import React from "react";
import { Route, Routes } from "react-router-dom";

import AddTodos from "../../Pages/addTodos/AddTodos"
import Todos from "../../Components/todos/Todos"
import "./App.scss";

export default function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<AddTodos />} />
        <Route path="todos/:date" element={<Todos />} />
      </Routes>
    </div>
  );
}
