import React from "react";
import Todo from "./Todo";

function ToDoList({ todos, setTodos, filtered}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* <Todo /> */}
        {filtered.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
