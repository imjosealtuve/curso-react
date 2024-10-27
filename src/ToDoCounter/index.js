import "../style/styles.css";
import React from 'react';
import { ToDoContext } from "../ToDoContext";

function ToDoCounter() {
  const {
    completedToDos,
    totalToDos,
    toDos
  } = React.useContext(ToDoContext)
  const noToDo = toDos.length === 0 
    ? 'No hay tareas por completar' 
    : <>Has completado <span>{completedToDos}</span> de <span>{totalToDos}</span> TODOs</>;

  return (
    <h1 id="contador">
      {noToDo}
    </h1>
  );
}

export { ToDoCounter };
