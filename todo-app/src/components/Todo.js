import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [edite, setEdite] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"}></div>
  ));
}

export default Todo;