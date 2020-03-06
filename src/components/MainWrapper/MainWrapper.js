import React, { useState } from "react";
import { setState } from "react";

import InpAddTask from "../InpAddTask/InpAddTask.js";
import Clock from "../Clock/Clock.js";
import BtnAddTask from "../BtnAddTask/BtnAddTask";
import OneCheckBoxWrap from "../OneCheckBoxWrap/OneCheckBoxWrap.js";
import tasks from "../Constans/Consts.js"; // массив с тасками
import "./MainWrapper.css";

function MainWrapper() {
  const [todos, setTodos] = useState(tasks); // установка начального состояния массив с тасками
  const [inputValue, setInputValue] = useState(""); // установка начального состояния в input
  const [time, setTime] = useState(new Date().toLocaleTimeString()); // установка начального состояния в clock`
  const handleAddNewTask = value => {
    if (value) {
      const id = todos.length ? todos[todos.length - 1].id : 0;
      const updTodos = [
        ...todos,
        {
          id: id + 1,
          description: value,
          status: false
        }
      ];
      setTodos(updTodos);
    }
  };

  const handleDoneTask = id => {
    const doneTask = todos.map(item => {
      return item.id === id ? { ...item, status: !item.status } : item;
    });
    setTodos(doneTask);
  };

  const handleDeleteTask = id => {
    const deleteTask = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(deleteTask);
  };

  const generateTodo = todos.map((todo, index) => (
    <OneCheckBoxWrap
      doneTask={() => handleDoneTask(todo.id)}
      description={todo.description}
      id={todo.id}
      status={todo.status}
      key={index}
      deleteTask={() => handleDeleteTask(todo.id)}
    />
  ));

  let tick = () => {
    const updTime = new Date().toLocaleTimeString();
    setTime(updTime);
  };
  setInterval(() => tick(), 1000);

  return (
    <div className="main-wrapper">
      <div className="section-with-task">
        <div className="dayli-wrapper ">
          <div className="title-day">Today</div>
          <div className="checkboxes-block">{generateTodo}</div>
        </div>
      </div>
      <div className="section-add-task">
        <InpAddTask
          onChange={e => setInputValue(e.target.value)} // ф-я setName используется для обновления состояния.
          placeholder="I want to..."
          value={inputValue}
        />
        <BtnAddTask handleClick={() => handleAddNewTask(inputValue)} />
      </div>
      <Clock time={time} />
    </div>
  );
}
export default MainWrapper;
