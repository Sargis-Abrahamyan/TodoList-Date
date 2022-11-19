import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./scss/datesTodos.module.scss";

export const DatesItems = () => {
  const dateTodos = useSelector((state) => state.todos.todoS);

  return (
    <div className={styles.dateItemsContainer}>
      <h2>Dates</h2>

      {Object.keys(dateTodos).map((dateItemTodos, index) => {

        return (
          <div className={styles.linkBlock} key={index}>
            <Link to={`todos/${dateItemTodos}`} className={styles.linkTodoItems}>
              {dateItemTodos} ({dateTodos[dateItemTodos].length})
              <i className="fa-solid fa-arrow-right"></i>

            </Link>

          </div>
        );
      })}
    </div>
  );
};
