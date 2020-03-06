import React from "react";
import "./BtnAddTask.css";

function BtnAddTask({ handleClick }) {
  return <button onClick={handleClick} className="btn-add-task"></button>;
}

export default BtnAddTask;
