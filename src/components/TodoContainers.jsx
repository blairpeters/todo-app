import React from "react";
import Singletodoitem from "./Singletodoitem";
import { todos } from "./data";

const TodoContainers = () => {
  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <Singletodoitem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoContainers;
