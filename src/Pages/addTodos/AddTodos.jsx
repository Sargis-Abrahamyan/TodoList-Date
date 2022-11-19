import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../redux/createTodos/createTodos";
import { DatesItems } from "../datesTodo/DatesItems";
import styles from "../addTodos/scss/addTodos.module.scss";

const AddTodos = () => {
  const [todoItems, setTodoItem] = useState({
    date: "",
    value: "",
  });

  const dispatch = useDispatch();

  const todosChange = (e) => {
    setTodoItem({ ...todoItems, [e.target.name]: e.target.value });
  };

  const addNewTodos = (e) => {
    e.preventDefault();
    
    if (todoItems.date === "") {
      alert("fouled most be filled");
    } 
    else if (todoItems.value.length < 3) {
      alert("select a date is required");
    } 
    else {
      dispatch(addTodo(todoItems));
      setTodoItem("");
    }
  };

  return (
    <>
      <h1>To do List</h1>

      <div className={styles.addTodosContainer}>
        <h2>New Task</h2>
        <form className={styles.addInputFormContainer} onSubmit={addNewTodos}>
          <input
            type="text"
            placeholder="Type Here"
            value={todoItems.value || ""}
            onChange={(e) => todosChange(e)}
            name={"value"}
          />
          <input
            type="date"
            value={todoItems.date || ""}
            onChange={(e) => todosChange(e)}
            name={"date"}
          />
          <button className={styles.todosAdd}>Add</button>
        </form>
      </div>
      <DatesItems />
    </>
  );
};

export default AddTodos;
