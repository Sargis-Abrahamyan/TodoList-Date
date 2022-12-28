import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import TodosItems from "../../Pages/todoItems/TodosItems";
import styles from "./scss/todos.module.scss";

const TodoItem = () => {
  const { date } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos.todoS);
  let todosItems = todos[date] || [];

  return (
    <div className={styles.todosContainer}>
      <button onClick={() => navigate("/")} className={styles.backBtn}> go Back </button>

      <TodosItems todosItems={todosItems} />
      {!todosItems.length && <span className={styles.todosLengthInfo}>no information</span>}
    </div>
  );
};

export default TodoItem;
