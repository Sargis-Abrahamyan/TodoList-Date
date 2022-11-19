import { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodos } from "../../redux/createTodos/createTodos";
import { TodosButton } from "../../Components/shared/genericButton/TodosButton";
import EditTodos from "../../Components/todos/EditTodos/EditTodos";
import CheckboxTodos from "../../Components/todos/CheckboxTodos/CheckboxTodos";
import styles from "./scss/todoItem.module.scss";

export const TodosFunctionalItems = ({ itemsTodos }) => {
    const [edit, setEdit] = useState(true);
    const dispatch = useDispatch();

    return (
        <div className={styles.todosContainer}>

            <div className={styles.todosItemsBlock}>
                {edit ? (
                    <div className={styles.todosItem}>
                        <CheckboxTodos itemsTodos={itemsTodos} />

                        <div className={styles.todosBtn}>
                            <TodosButton click={() => setEdit(!edit)} color="#3A85F7" content="Edit" />
                            <TodosButton click={() => dispatch(deleteTodos(itemsTodos))} color="#EB445A" content="Delete" />
                        </div>
                    </div>
                ) : (
                    <EditTodos itemsTodos={itemsTodos} edit={edit} setEdit={setEdit} />
                )}

            </div>
        </div>
    );
};
