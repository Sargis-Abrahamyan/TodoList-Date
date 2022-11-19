import React from 'react';
import { TodosFunctionalItems } from './TodosFunctions';

const TodosItems = ({ todosItems }) => {
  return (
    <>
      {
        todosItems.map((itemsTodos) => {
          return (
            <div key={itemsTodos.id}>
              <TodosFunctionalItems itemsTodos={itemsTodos} />
            </div>
          );
        })
      }
    </>
  )
}

export default TodosItems
