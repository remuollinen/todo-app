import React from "react";

function Form({ inputText, setInputText, todos, setTodos }) {
  const addInputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.floor(Math.random() * 1000000),
        },
      ]);
      setInputText("");
    }
  };

  return (
    <form className="form">
      <input
        value={inputText}
        onChange={addInputTextHandler}
        type="text"
        className="input"
        placeholder="Add task"
      />
      <button onClick={submitTodo} className="add-btn">
        +
      </button>
      <select name="select" id="select">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </form>
  );
}

export default Form;
