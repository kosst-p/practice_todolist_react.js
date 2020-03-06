import React from "react";
import "./OneCheckBoxWrap.css";

function OneCheckBoxWrap({ description, status, id, doneTask, deleteTask }) {
  //let props = doneTask(id);
  //console.log(props);

  // let classNameTask = "added-task";
  // if (status) {
  //   classNameTask += " done-task";
  // }

  return (
    <div className="one-checkbox-wrap" data-id={id} data-status={status}>
      <label className="container-checkbox">
        <input type="checkbox" onClick={doneTask} />
        <span
          className={!status ? `checkmark` : `checkmark done-task-checkbox`}
        ></span>
        <span className={!status ? `added-task` : `added-task done-task`}>
          {description}
        </span>
      </label>
      <div
        id="mdiv"
        onClick={deleteTask}
        className={!status ? `delete-task` : `delete-task-on`}
      >
        <div className="mdiv">
          <div className="md"></div>
        </div>
      </div>
    </div>
  );
}
export default OneCheckBoxWrap;
// ${
//   !status? "" : " done-task"
// }
