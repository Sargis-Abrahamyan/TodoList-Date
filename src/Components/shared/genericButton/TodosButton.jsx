import React from 'react';

import styles from "./scss/todoBtnStyle.module.scss";

export const TodosButton = ({ color, content, click }) => {
    return <button className={styles.btnStyle} style={{ color }} onClick={click}>{content}</button>
};

