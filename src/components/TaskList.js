import React from "react";
import Task from './Task';


function TaskList({taskObj}) {
  // console.log(taskObj);

  return (
    <div className="tasks">
      {taskObj.map((task) => 
      <Task key={task.text} text={task.text} category={task.category}/>
      )}
      </div>
  );
}

export default TaskList;
