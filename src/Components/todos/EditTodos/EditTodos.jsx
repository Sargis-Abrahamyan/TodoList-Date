import { useState } from 'react';
import { useDispatch } from "react-redux";

import { editTodos } from "../../../redux/createTodos/createTodos";
import { TodosButton } from '../../shared/genericButton/TodosButton';
import styles from "./scss/todosEdit.module.scss";


const EditTodos = ({ itemsTodos, edit, setEdit }) => {
    const [editValue, setEditValue] = useState(itemsTodos.todoValues);
    const dispatch = useDispatch()

    const changeSave = (e) => {
        e.preventDefault()
        setEdit(!edit);
        dispatch(editTodos({ itemsTodos, editValue }));
    };

    return (
        <form className={styles.TodosEditform} onSubmit={changeSave}>
            <input type="text" className={styles.editInput} value={editValue} onChange={(e) => setEditValue(e.target.value)} />
            <div className={styles.todosBtnBlock}>
                <TodosButton color="#3A85F7" content="Save" />
                <TodosButton color="#EB445A" content="Cancel" />
            </div>

        </form>
    )
}

export default EditTodos
