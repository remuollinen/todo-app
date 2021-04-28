import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, newTodos }) {
  return (
    <div className="todo-container">
      <ul>
        {newTodos.map((todo) => (
          <Todo
            text={todo.text}
            todo={todo}
            key={todo.id}
            completed={todo.completed}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
