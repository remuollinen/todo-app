import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [newTodos, setNewTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterTodos();
    saveLocalTodos();
  }, [todos, filter]);

  const filterTodos = () => {
    switch (filter) {
      case "Completed":
        setNewTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setNewTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setNewTodos(todos);
        break;
    }
  };

  // Linking to Local Storage

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  return (
    <div className="App">
      <h1 className="header">Todo App</h1>
      <p className="header-text">
        Add tasks, mark them completed, delete them and filter through them -
        with this Todo App!
      </p>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
      />
      <TodoList
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        newTodos={newTodos}
      />
    </div>
  );
}

export default App;
