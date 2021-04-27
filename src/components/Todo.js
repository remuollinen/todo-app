import React from "react";
import { BiCheckCircle, BiTrash } from "react-icons/bi";

function Todo({ text, todo, todos, setTodos }) {
  const deleteTask = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const markCompleted = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...todo,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo-item">
      <h6 className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {text}
      </h6>
      <div className="todo-btns">
        <button className="complete-btn">
          <BiCheckCircle onClick={markCompleted} className="check-icon" />
        </button>
        <button className="delete-btn">
          <BiTrash onClick={deleteTask} className="trash-icon" />
        </button>
      </div>
    </div>
  );
}

export default Todo;
