import React from 'react';
import { useDispatch } from 'react-redux';

import { isDane } from '../../../redux/createTodos/createTodos';
import styles from "./scss/checkboxTodos.module.scss"

const CheckboxTodos = ({ itemsTodos }) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.CheckboxTodosBlock}>
            <input type={"checkbox"} value={itemsTodos.isCompleted} onChange={() => dispatch(isDane(itemsTodos))} />
            <p>{itemsTodos.isCompleted ? <del>{itemsTodos.todoValues}</del> : itemsTodos.todoValues}</p>

        </div>
    )
}

export default CheckboxTodos
