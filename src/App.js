import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  // State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  // Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  // useEffect
  useEffect(() => {
    // console.log("selamm")
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    if (status === "completed") {
      setFiltered(todos.filter((todo) => todo.completed === true));
    } else if (status === "uncompleted") {
      setFiltered(todos.filter((todo) => todo.completed === false));
    } else {
      setFiltered(todos);
    }
  };

  // Save toLocalStorage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todos"));
      setTodos(local);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>List of Today</h1>
      </header>
      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        filtered={filtered}
        setFiltered={setFiltered}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
