import React, { useState } from "react";
import { Input, Button, Box } from "@chakra-ui/react";

const TaskInput = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle(""); // Clear input after adding task
    }
  };

  return (
    <Box>
      <Input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task title"
        size="md"
      />
      <Button onClick={handleAddTask} colorScheme="teal" mt={2}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;
