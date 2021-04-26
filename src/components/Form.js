import React from "react";
import { GrAddCircle } from "react-icons/gr";

function Form() {
  return (
    <form className="form">
      <input type="text" className="input" placeholder="Add task" />
      <GrAddCircle className="add-btn" />
      <select name="select" id="select">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </form>
  );
}

export default Form;
