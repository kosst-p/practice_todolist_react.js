import React from "react";
import "./Clock.css";

function Clock(props) {
  return (
    <div>
      <h3>Clock</h3>
      <div>Time now: {props.time}</div>
    </div>
  );
}

export default Clock;
