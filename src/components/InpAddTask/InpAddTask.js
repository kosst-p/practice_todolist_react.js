import React from "react";
import "./InpAddTask.css";

function InpAddTask({ onChange, placeholder, value }) {
  return (
    <input
      onChange={onChange}
      type="text"
      className="inp-add-task"
      placeholder={placeholder}
      value={value}
    />
  );
}

export default InpAddTask;
