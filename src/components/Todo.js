import React from "react";

function Todo({ text, todos, setTodos, todo }) {
  // Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const checkHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {...item, completed: !item.completed }
        }
        return item
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>
      <button onClick={checkHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
