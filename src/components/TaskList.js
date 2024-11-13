import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggleComplete, onPriorityChange }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
          onToggleComplete={() => onToggleComplete(index)}
          onPriorityChange={(priority) => onPriorityChange(index, priority)}
        />
      ))}
    </div>
  );
};

export default TaskList;
